import { localTimeToDate, setTimeToDate } from "@/utils/date.utils";
import { WorkScheduleDto } from "@/generate-api";
import { isAfter, differenceInSeconds, add, isBefore } from "date-fns";

export function calculateWorkDay(
  startTime: Date,
  endTime: Date,
  workSchedule: WorkScheduleDto
): number {
  let totalWorkingSeconds = 0;

  startTime = setTimeToDate(startTime);
  endTime = setTimeToDate(endTime);

  const startTimeMorning = localTimeToDate(workSchedule.startTimeMorning);
  const endTimeMorning = localTimeToDate(workSchedule.endTimeMorning);
  const startTimeAfternoon = localTimeToDate(workSchedule.startTimeAfternoon);
  let endTimeAfternoon = localTimeToDate(workSchedule.endTimeAfternoon); // dynamic end time afternoon

  if (
    isInvalidTimeRange(startTime, endTime, startTimeMorning, endTimeAfternoon)
  ) {
    return totalWorkingSeconds;
  }

  // Recalculate finish time due to late arrival time
  if (isAfter(startTime, startTimeMorning)) {
    let lateSeconds = differenceInSeconds(startTimeMorning, startTime);
    let adjustedSeconds = Math.min(
      workSchedule.allowedLateMinutes * 60,
      lateSeconds
    );

    add(endTimeAfternoon, { seconds: adjustedSeconds });
  }

  // Calculate morning work minutes
  if (isBefore(startTime, endTimeMorning)) {
    let validMorningStart = isBefore(startTime, startTimeMorning)
      ? startTimeMorning
      : startTime;
    let validMorningEnd = isAfter(endTime, endTimeMorning)
      ? endTimeMorning
      : endTime;

    if (isBefore(validMorningStart, validMorningEnd)) {
      totalWorkingSeconds += differenceInSeconds(
        validMorningEnd,
        validMorningStart
      );
    }
  }

  // Calculate afternoon work minutes
  if (isAfter(endTime, endTimeMorning)) {
    let validAfternoonStart = isBefore(startTime, startTimeAfternoon)
      ? startTimeAfternoon
      : startTime;
    let validAfternoonEnd = isAfter(endTime, endTimeAfternoon)
      ? endTimeAfternoon
      : endTime;

    if (isBefore(validAfternoonStart, validAfternoonEnd)) {
      totalWorkingSeconds += differenceInSeconds(
        validAfternoonEnd,
        validAfternoonStart
      );
    }
  }

  return totalWorkingSeconds / 3600;
}

function isInvalidTimeRange(
  startTime: Date,
  endTime: Date,
  startTimeMorning: Date,
  endTimeAfternoon: Date
) {
  return (
    !startTime ||
    !endTime ||
    isAfter(startTime, endTime) ||
    isAfter(startTime, endTimeAfternoon) ||
    isBefore(endTime, startTimeMorning)
  );
}
