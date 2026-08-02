package io.github.yogeshdofficial.freshfeeds_backend.model;

import java.util.List;

public record CategorySummary(String name, int feedCount, List<String> sampleDomains) {
}
