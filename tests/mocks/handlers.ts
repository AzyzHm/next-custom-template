import { http, HttpResponse } from "msw";

/**
 * Default mock handlers used across unit/integration tests.
 * Add per-resource handlers here as the API surface grows, or override
 * a handler locally in a specific test with `server.use(...)`.
 */
export const handlers = [
  http.get("http://localhost:3000/api/v1/health", () => {
    return HttpResponse.json({ status: "ok", timestamp: new Date().toISOString() });
  }),
];
