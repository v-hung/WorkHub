import {
  ErrorResponse,
  ErrorValidateResponse,
  ResponseError,
} from "@/generate-api";
import i18n from "../hooks/locale/i18n";

export async function getMessageError(e: any): Promise<string> {
  try {
    if (!(e instanceof ResponseError)) throw e;

    const json = await e.response.json();
    const error = json as Partial<ErrorResponse & ErrorValidateResponse>;

    if (error.message) return error.message;
    if (error.title) return error.title;

    throw e;
  } catch {
    return i18n.t("message.error");
  }
}
