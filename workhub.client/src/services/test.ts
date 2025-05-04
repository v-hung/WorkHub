import { getAccessToken, refreshAccessToken } from "./auth";

export const fetchWithAuth: typeof fetch = async (input, init = {}) => {
  const originalSignal = init.signal;

  // Nếu bị abort ngay từ đầu
  if (originalSignal?.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }

  const addAuthHeader = () => ({
    ...init.headers,
    Authorization: `Bearer ${getAccessToken()}`,
  });

  const baseInit: RequestInit = {
    ...init,
    headers: addAuthHeader(),
    credentials: "include",
    signal: originalSignal,
  };

  try {
    let response = await fetch(input, baseInit);

    if (response.status === 401) {
      // Token có thể hết hạn, thử refresh
      const refreshed = await refreshAccessToken();

      // Kiểm tra lại xem đã bị hủy chưa trước khi retry
      if (originalSignal?.aborted) {
        throw new DOMException("Aborted", "AbortError");
      }

      if (refreshed) {
        const retryInit: RequestInit = {
          ...init,
          headers: addAuthHeader(),
          credentials: "include",
          signal: originalSignal,
        };
        response = await fetch(input, retryInit);
      }
    }

    return response;
  } catch (err) {
    if (originalSignal?.aborted) {
      throw new DOMException("Aborted", "AbortError");
    }
    throw err;
  }
};
