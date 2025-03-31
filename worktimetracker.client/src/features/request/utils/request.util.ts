import { localTimeToDate } from "@/common/utils/date.util";
import { isEmpty } from "@/common/utils/validate.utils";
import { WorkTimeDto } from "@/generate-api";
import { isAfter } from "date-fns";

export const requestDisabledTime = (workTime: WorkTimeDto) => {
  const parseTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return { hours, minutes };
  };

  const morningStart = parseTime(workTime.startTimeMorning);
  const morningEnd = parseTime(workTime.endTimeMorning);
  const afternoonStart = parseTime(workTime.startTimeAfternoon);
  const afternoonEnd = parseTime(workTime.endTimeAfternoon);

  return {
    disabledHours: () => {
      const hours = Array.from({ length: 24 }, (_, i) => i);
      return hours.filter(
        (hour) =>
          (hour < morningStart.hours || hour > morningEnd.hours) &&
          (hour < afternoonStart.hours || hour > afternoonEnd.hours)
      );
    },

    disabledMinutes: (selectedHour: number) => {
      const minutes = Array.from({ length: 60 }, (_, i) => i);
      if (selectedHour === morningStart.hours) {
        return minutes.filter((minute) => minute < morningStart.minutes);
      }
      if (selectedHour === morningEnd.hours) {
        return minutes.filter((minute) => minute > morningEnd.minutes);
      }
      if (selectedHour === afternoonStart.hours) {
        return minutes.filter((minute) => minute < afternoonStart.minutes);
      }
      if (selectedHour === afternoonEnd.hours) {
        return minutes.filter((minute) => minute > afternoonEnd.minutes);
      }
      return [];
    },

    disabledSeconds: () => [],
  };
};

export const requestValidateTime =
  (workTime: WorkTimeDto) => (_: any, value: string) => {
    if (isEmpty(value)) {
      return Promise.reject(new Error("Please choose time!"));
    }

    const time = localTimeToDate(value);

    const validMinutes =
      isAfter(time, localTimeToDate(workTime.startTimeMorning)) &&
      isAfter(localTimeToDate(workTime.endTimeAfternoon), time);

    if (validMinutes) {
      return Promise.resolve();
    }

    return Promise.reject(new Error("Invalid time."));
  };
