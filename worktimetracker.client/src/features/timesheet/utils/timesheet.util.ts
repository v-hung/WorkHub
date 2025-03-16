import { localTimeToDate } from "@/common/utils/date.util";
import { WorkTimeDto } from "@/generate-api";
import { isAfter, differenceInSeconds, add, isBefore } from "date-fns";

export function calculateWorkDay(
  startTime: Date,
  endTime: Date,
  workTime: WorkTimeDto
): number {
  let totalWorkingSeconds = 0;

  const startTimeMorning = localTimeToDate(workTime.startTimeMorning);
  const endTimeMorning = localTimeToDate(workTime.endTimeMorning);
  const startTimeAfternoon = localTimeToDate(workTime.startTimeAfternoon);
  const endTimeAfternoon = localTimeToDate(workTime.endTimeAfternoon);

  if (
    isInvalidTimeRange(startTime, endTime, startTimeMorning, endTimeAfternoon)
  ) {
    return totalWorkingSeconds;
  }

  if (isAfter(startTime, startTimeMorning)) {
    let lateSeconds = differenceInSeconds(startTimeMorning, startTime);
    let adjustedSeconds = Math.min(
      workTime.allowedLateMinutes * 60,
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
      ? endTime
      : endTimeAfternoon;

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
