import { ErrorResponse, ErrorValidateResponse } from "@/generate-api";
import i18n from "./i18n";

export const getMessageError = (e: any): string => {
  try {
    // if (!(e instanceof any)) throw e;

    console.log({ e });

    let error = JSON.parse(e.body) as Partial<
      ErrorResponse & ErrorValidateResponse
    >;

    console.log({ error });

    if (error.message) return error.message;
    if (error.title) return error.title;

    throw e;
  } catch {
    return i18n.t("message.error");
  }
};
