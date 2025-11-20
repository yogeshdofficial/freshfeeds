import Parser from "rss-parser";

// Lightweight RSS parser instance used by the app.
// Keep a single parser instance so internal caches (if any) are reused.
const parser = new Parser();

/**
 * Fetch and parse an RSS/Atom feed from a URL.
 *
 * @param url - The feed URL to fetch.
 * @returns Promise resolving to an array of feed items (or empty array on error).
 */
export async function getFeedFromUrl(url: string): Promise<any[]> {
  try {
    const feed = await parser.parseURL(url);
    // Use debug-level logging here so it's easy to filter in production.
    console.debug(`Parsed feed: ${url}`);

    // `feed.items` can be undefined for some malformed feeds — normalize to array.
    return feed.items ?? [];
  } catch (err) {
    // Log a friendly error message and return an empty list so callers can continue.
    console.error(`Failed to parse feed: ${url}`, err);
    return [];
  }
}
