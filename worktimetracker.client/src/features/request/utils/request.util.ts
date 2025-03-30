import { localTimeToDate } from "@/common/utils/date.util";
import { WorkTimeDto } from "@/generate-api";

export const requestDisabledTime = (workTime: WorkTimeDto) => {
  const parseTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return { hours, minutes };
  };

  const { hours: startMorningHour, minutes: startMorningMinute } = parseTime(
    workTime.startTimeMorning
  );
  const { hours: endMorningHour, minutes: endMorningMinute } = parseTime(
    workTime.endTimeMorning
  );
  const { hours: startAfternoonHour, minutes: startAfternoonMinute } =
    parseTime(workTime.startTimeAfternoon);
  const { hours: endAfternoonHour, minutes: endAfternoonMinute } = parseTime(
    workTime.endTimeAfternoon
  );

  return {
    disabledHours: () => {
      const allHours = Array.from({ length: 24 }, (_, i) => i);
      return allHours.filter(
        (hour) =>
          (hour < startMorningHour || hour > endMorningHour) &&
          (hour < startAfternoonHour || hour > endAfternoonHour)
      );
    },
    disabledMinutes: (selectedHour: number) => {
      if (
        (selectedHour === startMorningHour &&
          selectedHour === endMorningHour) ||
        (selectedHour === startAfternoonHour &&
          selectedHour === endAfternoonHour)
      ) {
        return Array.from({ length: 60 }, (_, i) => i).filter(
          (minute) =>
            (selectedHour === startMorningHour &&
              minute < startMorningMinute) ||
            (selectedHour === endMorningHour && minute > endMorningMinute) ||
            (selectedHour === startAfternoonHour &&
              minute < startAfternoonMinute) ||
            (selectedHour === endAfternoonHour && minute > endAfternoonMinute)
        );
      }
      return [];
    },
    disabledSeconds: () => Array.from({ length: 59 }, (_, i) => i + 1),
  };
};

// export const RequestValidateTime = () => (_: any, value: string) => {
//   if (!value) {
//     return Promise.reject(new Error("Please choose time!"));
//   }

//   const time = localTimeToDate(value);

//   const validMinutes = allowedMinutes.includes(time.getMinutes());

//   if (validMinutes) {
//     return Promise.resolve();
//   }

//   return Promise.reject(new Error("Invalid time."));
// };
