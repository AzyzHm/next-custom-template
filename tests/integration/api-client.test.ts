import { describe, expect, it } from "vitest";
import { apiClient } from "@/lib/api-client";
import type { HealthResponse } from "@/app/api/v1/health/route";

describe("apiClient", () => {
  it("fetches and parses a JSON response through the mocked network layer", async () => {
    const result = await apiClient.get<HealthResponse>("/health");

    expect(result.status).toBe("ok");
    expect(typeof result.timestamp).toBe("string");
  });
});
