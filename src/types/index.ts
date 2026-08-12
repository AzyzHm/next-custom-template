/**
 * Shared, cross-cutting types live here. Resource-specific types should
 * live next to the feature that owns them; this file is for genuinely
 * shared shapes (pagination, API envelopes, etc.).
 */

export interface ApiErrorBody {
  message: string;
  code?: string;
  details?: unknown;
}

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
