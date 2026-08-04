package io.github.yogeshdofficial.freshfeeds_backend.cache;

import io.github.yogeshdofficial.freshfeeds_backend.model.FeedItem;

import java.time.Instant;
import java.util.List;

public record CachedFeeds(List<FeedItem> items, Instant fetchedAt) {
}
