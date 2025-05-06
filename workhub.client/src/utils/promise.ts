import { getMessageError } from "./error.utils";
import { getNotification } from "../contexts/feedback/FeedbackProvider";

export const wrapPromise = async <T>(callback: () => Promise<T>) => {
  try {
    return await callback();
  } catch (error) {
    const message = await getMessageError(error);
    getNotification()?.error({ message });
    // throw error;
  }
};
