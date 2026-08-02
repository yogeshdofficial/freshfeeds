package io.github.yogeshdofficial.freshfeeds_backend.model;

import java.time.Instant;

public record FeedItem(String title, String link, Instant pubDate) {
}
