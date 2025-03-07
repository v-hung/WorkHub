import {
  ApiException,
  ErrorResponse,
  ErrorValidateResponse,
} from "@/generate-api";
import i18n from "./i18n";

export const getMessageError = (e: any): string => {
  try {
    if (!(e instanceof ApiException)) throw e;

    let error = JSON.parse(e.body) as Partial<
      ErrorResponse & ErrorValidateResponse
    >;

    if (error.message) return error.message;
    if (error.title) return error.title;

    throw e;
  } catch {
    return i18n.t("message.error");
  }
};
