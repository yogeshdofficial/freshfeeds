package io.github.yogeshdofficial.freshfeeds_backend.service;

import io.github.yogeshdofficial.freshfeeds_backend.cache.CachedFeeds;
import io.github.yogeshdofficial.freshfeeds_backend.cache.FeedCacheService;
import io.github.yogeshdofficial.freshfeeds_backend.model.FeedItem;
import io.github.yogeshdofficial.freshfeeds_backend.model.FeedSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
public class FeedService {

    private static final Logger log = LoggerFactory.getLogger(FeedService.class);

    private static final Comparator<FeedItem> BY_PUB_DATE_DESC =
            Comparator.comparing(FeedItem::pubDate, Comparator.nullsLast(Comparator.reverseOrder()));

    private final HttpClient httpClient;
    private final FeedParser feedParser;
    private final FeedCacheService cache;
    private final Duration cacheTtl;

    public FeedService(
            FeedParser feedParser,
            FeedCacheService cache,
            @Value("${app.cache.ttl:15m}") Duration cacheTtl) {
        this.feedParser = feedParser;
        this.cache = cache;
        this.cacheTtl = cacheTtl;
        this.httpClient =
                HttpClient.newBuilder()
                        .connectTimeout(Duration.ofSeconds(10))
                        .followRedirects(HttpClient.Redirect.NORMAL)
                        .build();
    }

    public List<FeedItem> fetch(FeedSource source) {
        try {
            HttpRequest request =
                    HttpRequest.newBuilder(URI.create(source.url()))
                            .timeout(Duration.ofSeconds(20))
                            .header(
                                    "User-Agent",
                                    "FreshFeeds/1.0 (+https://freshfeeds.netlify.app)")
                            .header(
                                    "Accept",
                                    "application/rss+xml, application/atom+xml, application/xml;q=0.9, text/xml;q=0.8, */*;q=0.7")
                            .GET()
                            .build();
            HttpResponse<byte[]> response =
                    httpClient.send(request, HttpResponse.BodyHandlers.ofByteArray());
            if (response.statusCode() < 200 || response.statusCode() >= 300) {
                log.debug("Non-2xx response {} for {}", response.statusCode(), source.url());
                return new ArrayList<>();
            }
            return feedParser.parse(response.body());
        } catch (Exception e) {
            log.debug("Failed to fetch feed {}: {}", source.url(), e.getMessage());
            return new ArrayList<>();
        }
    }

    public Map<String, List<FeedItem>> fetchByDomain(List<FeedSource> sources) {
        Map<String, List<FeedItem>> byDomain = new LinkedHashMap<>();
        try (ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor()) {
            List<CompletableFuture<List<FeedItem>>> futures =
                    sources.stream()
                            .map(source -> CompletableFuture.supplyAsync(() -> load(source), executor))
                            .toList();
            for (int i = 0; i < sources.size(); i++) {
                List<FeedItem> items = futures.get(i).join();
                items.sort(BY_PUB_DATE_DESC);
                byDomain.put(sources.get(i).domain(), items);
            }
        }
        return byDomain;
    }

    private List<FeedItem> load(FeedSource source) {
        CachedFeeds cached = cache.find(source.url());
        Instant now = Instant.now();
        if (cached != null && !cached.fetchedAt().isBefore(now.minus(cacheTtl))) {
            return cached.items();
        }
        List<FeedItem> fresh = fetch(source);
        if (fresh.isEmpty()) {
            if (cached != null) {
                log.debug("Fetch failed for {}, serving stale cache", source.url());
                return cached.items();
            }
            return new ArrayList<>();
        }
        cache.save(source.url(), source.domain(), fresh, now);
        return fresh;
    }
}
