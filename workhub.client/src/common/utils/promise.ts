import { getMessageError } from "./error.utils";
import { getNotification } from "../contexts/FeedbackProvider";

export const wrapPromise = async <T>(callback: () => Promise<T>) => {
  return callback().catch((e) => {
    getNotification()?.error({
      message: getMessageError(e),
    });
    return undefined;
  });
};
