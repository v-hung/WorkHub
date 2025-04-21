import {
  ResponseContext,
  type HttpLibrary,
  type RequestContext,
} from "@/generate-api";
import { from, Observable } from "@/generate-api/rxjsStub";
// import "whatwg-fetch";
import { accountApi } from "./apiClient";
import { useAuthStore } from "@/stores/auth.store";
import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import i18n from "@/utils/i18n";

export class FetchHttpLibrary implements HttpLibrary {
  private enableRefreshToken: boolean;

  constructor(enableRefreshToken: boolean = false) {
    this.enableRefreshToken = enableRefreshToken;
  }

  public send(
    request: RequestContext,
    isRetry: boolean = false
  ): Observable<ResponseContext> {
    // const controller = new AbortController();
    // const signal = controller.signal;
    // const timer = setTimeout(() => controller.abort(), 10000);

    const method = request.getHttpMethod().toString();
    const body = request.getBody();

    const resultPromise = fetch(request.getUrl(), {
      method: method,
      body: body as any,
      headers: request.getHeaders(),
      credentials: "include",
      // signal,
    })
      .then((resp: any) => {
        const headers: { [name: string]: string } = {};
        resp.headers.forEach((value: string, name: string) => {
          headers[name] = value;
        });

        const responseContext = new ResponseContext(resp.status, headers, {
          text: () => resp.text(),
          binary: () => resp.blob(),
        });

        // Handle 401 and refresh token if enabled
        if (this.enableRefreshToken && resp.status === 401 && !isRetry) {
          return accountApi
            .accountRefreshToken()
            .then(() => {
              // Retry the original request with isRetry=true
              return this.send(request, true).toPromise();
            })
            .catch(() => {
              // useAuthStore.getState().logout();
              // getNotification()?.error({
              //   message: i18n.t("auth.sessionExpired"),
              // });
              return responseContext; // Return original 401 response
            });
        }

        return responseContext;
      })
      .finally(() => {
        // clearTimeout(timer);
      });

    return from<Promise<ResponseContext>>(resultPromise);
  }
}
