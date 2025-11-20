# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

````text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
# FreshFeeds (rssence)

A lightweight RSS/Atom reader built with Astro. FreshFeeds aggregates feeds by category and presents a simple, fast interface for browsing the latest items from many sources.

## Features

- Category-based collection of RSS/Atom feeds
- Simple UI components for navigation, feed lists and theme switching
- Uses `rss-parser` to fetch and parse feeds server-side

## Quickstart

Prerequisites:
- Node.js (recommended v18+)
- `pnpm` (project expects pnpm package manager)

Install dependencies:

```bash
pnpm install
````

Run the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm preview
```

## Project Structure

- `src/components` — Astro components (Header, Sidebar, Feed, DomainChooser)
- `src/constants` — Data like `categorizedFeeds.ts` and available `themes`
- `src/utils` — Helper utilities (`rss.ts`, `time.ts`)
- `src/pages` — Astro pages and routing

## Development Notes

- Feeds are defined in `src/constants/categorizedFeeds.ts`. Add or remove feed URLs there.
- Feed fetching is handled by `src/utils/rss.ts` which uses `rss-parser`.
- Short relative times are provided by `src/utils/time.ts`.
- Theme selection is stored in `localStorage` under the key `theme` and applied to `document.documentElement`.

## Contributing

- Open an issue or submit a pull request.
- Keep changes focused and include small, testable commits.

## License

This repository does not include a license file. If you maintain the project, add a `LICENSE` to indicate the project's license (e.g. MIT).

---

If you'd like, I can:

- Add a `LICENSE` (MIT) and update `package.json`.
- Run a formatting pass (Prettier/ESLint) and fix remaining TypeScript warnings.
