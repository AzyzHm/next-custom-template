import { NextResponse } from "next/server";

export interface HealthResponse {
  status: "ok";
  timestamp: string;
}

/**
 * GET /api/v1/health
 *
 * Simple liveness check. Use this as a reference for how route handlers
 * in this template are structured: one `route.ts` per resource/version,
 * returning a typed JSON payload.
 */
export function GET() {
  const payload: HealthResponse = {
    status: "ok",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(payload);
}
