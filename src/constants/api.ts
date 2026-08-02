// Backend API base URL.
// - In production: set PUBLIC_API_URL in your host (e.g. Netlify env var).
// - In local dev: defaults to the Spring Boot backend on port 8080.
export const API_BASE_URL = (
  import.meta.env.PUBLIC_API_URL ?? "http://localhost:8080/api"
).replace(/\/+$/, "");
