/**
 * Centralized, typed access to environment variables.
 *
 * Import from here instead of reading `process.env` directly, so missing
 * or malformed configuration fails fast with a clear error instead of
 * surfacing as `undefined` deep in the app.
 */

function requireEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const env = {
  apiBaseUrl: requireEnv("NEXT_PUBLIC_API_BASE_URL", "http://localhost:3000/api/v1"),
} as const;
