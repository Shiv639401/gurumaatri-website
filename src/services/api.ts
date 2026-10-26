/**
 * GuruMaatri Innovations
 * Centralized API client.
 * File: src/lib/api.ts
 */

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");

export class ApiError extends Error {
  readonly status: number;
  readonly data: unknown;

  constructor(message: string, status = 0, data?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

type ApiRequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  timeout?: number;
};

async function request<T>(
  path: string,
  options: ApiRequestOptions = {},
): Promise<T> {
  const { timeout = 15000, ...requestOptions } = options;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  // Preserve an explicitly supplied signal while still supporting timeout.
  const externalSignal = requestOptions.signal;
  const abortFromExternalSignal = () => controller.abort();
  if (externalSignal?.aborted) controller.abort();
  else externalSignal?.addEventListener("abort", abortFromExternalSignal, { once: true });

  const headers = new Headers(requestOptions.headers);
  const rawBody = requestOptions.body;
  let body: BodyInit | undefined;

  if (rawBody !== undefined && rawBody !== null) {
    if (
      typeof rawBody === "string" ||
      (typeof FormData !== "undefined" && rawBody instanceof FormData) ||
      (typeof Blob !== "undefined" && rawBody instanceof Blob) ||
      rawBody instanceof URLSearchParams ||
      rawBody instanceof ArrayBuffer
    ) {
      body = rawBody as BodyInit;
    } else {
      headers.set("Content-Type", "application/json");
      body = JSON.stringify(rawBody);
    }
  }

  if (!headers.has("Accept")) headers.set("Accept", "application/json");

  try {
    const response = await fetch(
      `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`,
      {
        ...requestOptions,
        headers,
        body,
        signal: controller.signal,
      },
    );

    const contentType = response.headers.get("content-type") ?? "";
    let responseData: unknown;

    if (response.status === 204) {
      responseData = undefined;
    } else if (contentType.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (!response.ok) {
      const message =
        typeof responseData === "object" &&
        responseData !== null &&
        "message" in responseData &&
        typeof responseData.message === "string"
          ? responseData.message
          : `Request failed with status ${response.status}`;

      throw new ApiError(message, response.status, responseData);
    }

    return responseData as T;
  } catch (error) {
    if (error instanceof ApiError) throw error;

    if (error instanceof Error && error.name === "AbortError") {
      throw new ApiError(
        externalSignal?.aborted ? "Request was cancelled." : "Request timed out.",
      );
    }

    throw new ApiError(
      error instanceof Error ? error.message : "Network request failed.",
    );
  } finally {
    clearTimeout(timeoutId);
    externalSignal?.removeEventListener("abort", abortFromExternalSignal);
  }
}

const api = {
  get<T>(path: string, options?: Omit<ApiRequestOptions, "body">): Promise<T> {
    return request<T>(path, { ...options, method: "GET" });
  },
  post<T>(
    path: string,
    body?: unknown,
    options?: Omit<ApiRequestOptions, "body" | "method">,
  ): Promise<T> {
    return request<T>(path, { ...options, method: "POST", body });
  },
  put<T>(
    path: string,
    body?: unknown,
    options?: Omit<ApiRequestOptions, "body" | "method">,
  ): Promise<T> {
    return request<T>(path, { ...options, method: "PUT", body });
  },
  patch<T>(
    path: string,
    body?: unknown,
    options?: Omit<ApiRequestOptions, "body" | "method">,
  ): Promise<T> {
    return request<T>(path, { ...options, method: "PATCH", body });
  },
  delete<T>(
    path: string,
    options?: Omit<ApiRequestOptions, "body" | "method">,
  ): Promise<T> {
    return request<T>(path, { ...options, method: "DELETE" });
  },
};

export { api };
export default api;
