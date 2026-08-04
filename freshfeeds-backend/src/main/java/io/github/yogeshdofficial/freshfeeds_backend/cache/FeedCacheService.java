package io.github.yogeshdofficial.freshfeeds_backend.cache;

import io.github.yogeshdofficial.freshfeeds_backend.model.FeedItem;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

@Service
public class FeedCacheService {

    private final FeedItemRepository repository;

    public FeedCacheService(FeedItemRepository repository) {
        this.repository = repository;
    }

    public CachedFeeds find(String sourceUrl) {
        List<FeedItemEntity> entities =
                repository.findBySourceUrlOrderByPubDateEpochDesc(sourceUrl);
        if (entities.isEmpty()) {
            return null;
        }
        List<FeedItem> items =
                entities.stream()
                        .map(
                                entity ->
                                        new FeedItem(
                                                entity.getTitle(),
                                                entity.getLink(),
                                                entity.getPubDateEpoch() == null
                                                        ? null
                                                        : Instant.ofEpochMilli(
                                                                entity.getPubDateEpoch())))
                        .toList();
        Instant fetchedAt =
                entities.stream()
                        .map(entity -> Instant.ofEpochMilli(entity.getFetchedAtEpoch()))
                        .max(Instant::compareTo)
                        .orElseThrow();
        return new CachedFeeds(items, fetchedAt);
    }

    @Transactional
    public void save(String sourceUrl, String domain, List<FeedItem> items, Instant fetchedAt) {
        repository.deleteBySourceUrl(sourceUrl);
        repository.saveAll(
                items.stream()
                        .map(
                                item ->
                                        new FeedItemEntity(
                                                sourceUrl,
                                                domain,
                                                item.title(),
                                                item.link(),
                                                item.pubDate() == null
                                                        ? null
                                                        : item.pubDate().toEpochMilli(),
                                                fetchedAt.toEpochMilli()))
                        .toList());
    }
}
