package io.github.yogeshdofficial.freshfeeds_backend.cache;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface FeedItemRepository extends JpaRepository<FeedItemEntity, Long> {

    List<FeedItemEntity> findBySourceUrlOrderByPubDateEpochDesc(String sourceUrl);

    @Transactional
    void deleteBySourceUrl(String sourceUrl);
}
