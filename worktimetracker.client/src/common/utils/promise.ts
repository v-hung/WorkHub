import { Dispatch, SetStateAction } from "react";
import { getMessageError } from "./error";
import { notification } from "antd";

export type PromiseNotificationType<T> = {
  promise: Promise<T>;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export const promiseNotification = async <T>({
  promise,
  setLoading,
}: PromiseNotificationType<T>): Promise<T | undefined> => {
  if (setLoading) {
    setLoading(true);
  }

  try {
    const result = await promise;
    return result;
  } catch (e) {
    notification.error({
      message: getMessageError(e),
    });
    return undefined;
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};
