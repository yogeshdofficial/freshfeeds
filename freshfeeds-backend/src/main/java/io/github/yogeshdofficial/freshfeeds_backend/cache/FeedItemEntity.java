package io.github.yogeshdofficial.freshfeeds_backend.cache;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "feed_items")
public class FeedItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "source_url", nullable = false)
    private String sourceUrl;

    @Column(name = "domain", nullable = false)
    private String domain;

    @Column(name = "title")
    private String title;

    @Column(name = "link", nullable = false)
    private String link;

    @Column(name = "pub_date_epoch")
    private Long pubDateEpoch;

    @Column(name = "fetched_at_epoch", nullable = false)
    private Long fetchedAtEpoch;

    protected FeedItemEntity() {
    }

    public FeedItemEntity(
            String sourceUrl,
            String domain,
            String title,
            String link,
            Long pubDateEpoch,
            Long fetchedAtEpoch) {
        this.sourceUrl = sourceUrl;
        this.domain = domain;
        this.title = title;
        this.link = link;
        this.pubDateEpoch = pubDateEpoch;
        this.fetchedAtEpoch = fetchedAtEpoch;
    }

    public String getTitle() {
        return title;
    }

    public String getLink() {
        return link;
    }

    public Long getPubDateEpoch() {
        return pubDateEpoch;
    }

    public Long getFetchedAtEpoch() {
        return fetchedAtEpoch;
    }
}
