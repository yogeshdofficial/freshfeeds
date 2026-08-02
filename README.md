# FreshFeeds (rssence)

https://freshfeeds.netlify.app

A lightweight RSS/Atom reader. A **Spring Boot** backend aggregates ~526 feeds across
34 categories; an **Astro** frontend renders them by category.

## Architecture

- `freshfeeds-backend/` — Spring Boot 4 (Java, GraalVM native-ready) REST API:
  - `GET /api/categories` — category list (name, feed count, sample domains)
  - `GET /api/categories/{category}` — feed items grouped by domain, newest first
  - Fetching/parsing lives in the backend (`FeedService` + `FeedParser`, JDK
    `HttpClient` + DOM parser), so no runtime reflection is needed for native images.
  - Feed registry: `CategorizedFeeds.java` (generated from the original
    `categorizedFeeds.ts` data).
- `src/` — Astro frontend. Pages fetch from the backend at build time using the
  `PUBLIC_API_URL` environment variable (`src/constants/api.ts`, `src/utils/api.ts`).

## Local development

Backend (http://localhost:8080):

```bash
cd freshfeeds-backend
./mvnw spring-boot:run
```

Frontend (http://localhost:4321):

```bash
pnpm install
pnpm dev
```

The frontend defaults to `http://localhost:8080/api` when `PUBLIC_API_URL` is unset.

## Deployment

### Backend → Render (GraalVM native)

1. Push this repo to GitHub (repo: `yogeshdofficial/freshfeeds`).
2. On [Render](https://dashboard.render.com): **New → Blueprint**, select the repo.
   Render reads `render.yaml` and deploys `freshfeeds-backend` using the
   multi-stage `Dockerfile` (GraalVM native build → tiny distroless image, binds to
   `$PORT`).
3. Note the service URL, e.g. `https://freshfeeds-backend.onrender.com`.

Local container build (optional):

```bash
cd freshfeeds-backend
docker build -t freshfeeds-backend .
docker run -p 8080:8080 freshfeeds-backend
```

### Frontend → Netlify

1. In Netlify: **Add new site → Import from Git** and pick this repo (already done
   for `freshfeeds.netlify.app`).
2. Set the environment variable **`PUBLIC_API_URL`** to your backend URL + `/api`,
   e.g. `https://freshfeeds-backend.onrender.com/api`
   (Site settings → Environment variables). Build command `pnpm build`, publish
   dir `dist` (also in `netlify.toml`).
3. Push to `master` — Netlify builds and deploys. Content is baked at build time,
   so redeploy (or use the dashboard's "Clear cache and deploy") to refresh feeds.

> The frontend build fetches from the backend, so deploy the backend first, then
> redeploy the frontend once the backend URL is set.

## Development notes

- Add/remove feeds by editing `CategorizedFeeds.java` in the backend.
- The backend fetches all feeds for a category concurrently (virtual threads) and
  sorts by publication date; unparseable dates sort last.
- Theme selection is stored in `localStorage` under `theme`.

## Contributing

- Open an issue or submit a pull request.
- Keep changes focused and include small, testable commits.

## License

This repository does not include a license file. If you maintain the project, add
a `LICENSE` to indicate the project's license (e.g. MIT).
