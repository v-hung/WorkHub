import { localTimeToDate, setTimeToDate } from "@/utils/date.utils";
import { isEmpty } from "@/utils/validate.utils";
import { WorkTimeDto } from "@/generate-api";
import { add } from "date-fns";

export const requestDisabledTime = (workTime?: WorkTimeDto) => {
  if (!workTime) {
    return {
      disabledHours: () => [],
      disabledMinutes: () => [],
      disabledSeconds: () => [],
    };
  }

  const parseTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return { hours, minutes };
  };

  const morningStart = parseTime(workTime.startTimeMorning);
  const morningEnd = parseTime(workTime.endTimeMorning);
  const afternoonStart = parseTime(workTime.startTimeAfternoon);
  const afternoonEnd = add(localTimeToDate(workTime.endTimeAfternoon), {
    minutes: workTime.allowedLateMinutes,
  });

  return {
    disabledHours: () => {
      const hours = Array.from({ length: 24 }, (_, i) => i);
      return hours.filter(
        (hour) =>
          (hour < morningStart.hours || hour > morningEnd.hours) &&
          (hour < afternoonStart.hours || hour > afternoonEnd.getHours())
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
      if (selectedHour === afternoonEnd.getHours()) {
        return minutes.filter((minute) => minute > afternoonEnd.getMinutes());
      }
      return [];
    },

    disabledSeconds: () => [],
  };
};

export const requestValidateTime =
  (workTime?: WorkTimeDto, required: boolean | undefined = false) =>
  (_: any, value: [Date, Date]) => {
    if (!workTime) {
      return Promise.reject(
        new Error("No working time information available.")
      );
    }

    if (isEmpty(value)) {
      if (required) {
        return Promise.reject(new Error("Please input your working time!"));
      }
      return Promise.resolve();
    }

    const afternoonEnd = add(localTimeToDate(workTime.endTimeAfternoon), {
      minutes: workTime.allowedLateMinutes,
    });

    console.log({ workTime }, localTimeToDate(workTime.endTimeAfternoon));

    const startTime = setTimeToDate(value[0]),
      endTime = setTimeToDate(value[1]);

    const validStartTime =
      startTime >= localTimeToDate(workTime.startTimeMorning) &&
      afternoonEnd >= startTime;

    const validEndTime =
      endTime >= localTimeToDate(workTime.startTimeMorning) &&
      afternoonEnd >= endTime;

    const valid = validStartTime && validEndTime && endTime > startTime;

    if (valid) {
      return Promise.resolve();
    }

    return Promise.reject(new Error("The time period is not valid."));
  };
