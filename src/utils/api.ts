import { API_BASE_URL } from "../constants/api";

export interface CategorySummary {
  name: string;
  feedCount: number;
  sampleDomains: string[];
}

export interface FeedItem {
  title: string | null;
  link: string | null;
  pubDate: string | null;
}

export interface CategoryFeeds {
  category: string;
  feeds: Record<string, FeedItem[]>;
}

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      signal: AbortSignal.timeout(60_000),
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      return null;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error(`Failed to fetch ${path}:`, error);
    return null;
  }
}

let categoriesPromise: Promise<CategorySummary[] | null> | undefined;

export function getCategories(): Promise<CategorySummary[] | null> {
  categoriesPromise ??= getJson<CategorySummary[]>("/categories");
  return categoriesPromise;
}

export function getCategoryFeeds(
  category: string
): Promise<CategoryFeeds | null> {
  return getJson<CategoryFeeds>(`/categories/${encodeURIComponent(category)}`);
}
