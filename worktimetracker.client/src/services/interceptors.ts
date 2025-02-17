import {
  ResponseContext,
  type HttpLibrary,
  type RequestContext,
} from "@/generate-api";
import { from, Observable } from "@/generate-api/rxjsStub";
import "whatwg-fetch";
import { accountApi } from "./apiClient";

export class FetchHttpLibrary implements HttpLibrary {
  private enableRefreshToken: boolean;

  constructor(enableRefreshToken: boolean = false) {
    this.enableRefreshToken = enableRefreshToken;
  }

  private async handleRequest(
    request: RequestContext,
    isRetry: boolean = false
  ): Promise<ResponseContext> {
    const method = request.getHttpMethod().toString();
    const body = request.getBody();

    const resp = await fetch(request.getUrl(), {
      method: method,
      body: body as any,
      headers: request.getHeaders(),
      credentials: "include",
    });

    const headers: { [name: string]: string } = {};
    resp.headers.forEach((value: string, name: string) => {
      headers[name] = value;
    });

    const responseContext = new ResponseContext(resp.status, headers, {
      text: () => resp.text(),
      binary: () => resp.blob(),
    });

    if (this.enableRefreshToken && resp.status === 401 && !isRetry) {
      try {
        await accountApi.apiIdentityRefreshTokenPost();
        return this.handleRequest(request, true);
      } catch (e) {
        alert(e);
      }
    }

    return responseContext;
  }

  public send(request: RequestContext): Observable<ResponseContext> {
    return from(this.handleRequest(request));
  }
}
