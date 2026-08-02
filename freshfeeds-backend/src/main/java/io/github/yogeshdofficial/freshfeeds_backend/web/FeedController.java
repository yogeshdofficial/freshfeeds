package io.github.yogeshdofficial.freshfeeds_backend.web;

import io.github.yogeshdofficial.freshfeeds_backend.config.CategorizedFeeds;
import io.github.yogeshdofficial.freshfeeds_backend.model.CategoryFeeds;
import io.github.yogeshdofficial.freshfeeds_backend.model.CategorySummary;
import io.github.yogeshdofficial.freshfeeds_backend.model.FeedSource;
import io.github.yogeshdofficial.freshfeeds_backend.service.FeedService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FeedController {

    private final FeedService feedService;

    public FeedController(FeedService feedService) {
        this.feedService = feedService;
    }

    @GetMapping("/categories")
    public List<CategorySummary> categories() {
        return CategorizedFeeds.all().entrySet().stream()
                .map(
                        entry ->
                                new CategorySummary(
                                        entry.getKey(),
                                        entry.getValue().size(),
                                        entry.getValue().stream()
                                                .limit(3)
                                                .map(FeedSource::domain)
                                                .toList()))
                .toList();
    }

    @GetMapping("/categories/{category}")
    public CategoryFeeds category(@PathVariable String category) {
        List<FeedSource> sources = CategorizedFeeds.all().get(category);
        if (sources == null) {
            throw new CategoryNotFoundException(category);
        }
        return new CategoryFeeds(category, feedService.fetchByDomain(sources));
    }
}
