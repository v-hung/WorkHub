import { RefreshTokenResponse } from "@/generate-api";
import { accountApi } from "./apiClient";
import i18n from "@/hooks/locale/i18n";

let refreshTokenPromise: Promise<RefreshTokenResponse> | null = null;

/**
 * Custom fetch wrapper with optional refresh-token logic.
 * Usage: const fetch = createFetchHttp(true);
 */
export const createFetchHttp = (enableRefreshToken: boolean): typeof fetch => {
  const send: typeof fetch = async (
    input: RequestInfo | URL,
    init?: RequestInit
  ) => {
    const response = await fetch(input, {
      ...init,
      headers: {
        ...(init?.headers || {}),
        "Accept-Language": i18n.language,
      },
      credentials: "include", // ensure cookies are sent
    });

    if (response.status === 401 && enableRefreshToken) {
      // Try refreshing the token

      if (!refreshTokenPromise) {
        refreshTokenPromise = accountApi.accountRefreshToken().finally(() => {
          refreshTokenPromise = null;
        });
      }

      await refreshTokenPromise;

      return fetch(input, {
        ...init,
        headers: {
          ...(init?.headers || {}),
          "Accept-Language": i18n.language,
        },
        credentials: "include",
      });
    }

    return response;
  };

  return send;
};
