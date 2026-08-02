package io.github.yogeshdofficial.freshfeeds_backend.model;

import java.util.List;
import java.util.Map;

public record CategoryFeeds(String category, Map<String, List<FeedItem>> feeds) {
}
