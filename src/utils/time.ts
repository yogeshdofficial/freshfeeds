/**
 * Convert a date string (or Date) into a short relative time string.
 * Examples: `5m`, `2h`, `3d`, `just now`.
 *
 * The function accepts values commonly provided by RSS feeds such as
 * `pubDate` or `isoDate` strings.
 *
 * @param dateStr - Date string or Date object to convert.
 * @returns Short relative time string.
 */
export function shortTimeAgo(dateStr: string | Date): string {
  const date = typeof dateStr === "string" ? new Date(dateStr) : dateStr;

  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return "unknown";
  }

  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const units = [
    { label: "y", seconds: 60 * 60 * 24 * 365 },
    { label: "mo", seconds: 60 * 60 * 24 * 30 },
    { label: "d", seconds: 60 * 60 * 24 },
    { label: "h", seconds: 60 * 60 },
    { label: "m", seconds: 60 },
    { label: "s", seconds: 1 },
  ];

  for (const unit of units) {
    const value = Math.floor(seconds / unit.seconds);
    if (value >= 1) {
      return `${value}${unit.label}`;
    }
  }

  return "just now";
}
