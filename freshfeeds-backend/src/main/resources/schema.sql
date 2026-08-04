CREATE TABLE IF NOT EXISTS feed_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source_url TEXT NOT NULL,
    domain TEXT NOT NULL,
    title TEXT,
    link TEXT NOT NULL,
    pub_date_epoch INTEGER,
    fetched_at_epoch INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_feed_items_source_url ON feed_items (source_url);
