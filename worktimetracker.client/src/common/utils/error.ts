import { ApiException, ErrorResponse } from "@/generate-api";
import i18n from "./i18n";

export const getMessageError = (error: any): string => {
  return error instanceof ApiException
    ? (JSON.parse(error.body) as ErrorResponse).message
    : i18n.t("message.error");
};
