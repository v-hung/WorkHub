import { localTimeToDate } from "@/common/utils/date.util";

const allowedMinutes = [0, 10, 20, 30, 40, 50];

export const workTimeDisabledTime = () => {
  return {
    disabledHours: () => {
      return [];
    },
    disabledMinutes: () => {
      return Array.from({ length: 60 }, (_, i) => i).filter(
        (minute) => !allowedMinutes.includes(minute)
      );
    },
    disabledSeconds: () => Array.from({ length: 60 }, (_, i) => i),
  };
};

export const workTimeValidateTime = () => (_: any, value: string) => {
  if (!value) {
    return Promise.reject(new Error("Please choose time!"));
  }

  const time = localTimeToDate(value);

  const validMinutes = allowedMinutes.includes(time.getMinutes());

  if (validMinutes) {
    return Promise.resolve();
  }

  return Promise.reject(new Error("Invalid time."));
};
