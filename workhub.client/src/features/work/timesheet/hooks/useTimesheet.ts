import { format } from "@/utils/date.utils";
import { useTimesheetStore } from "@/stores/timesheet.store";
import { useEffect, useRef, useState, useCallback } from "react";
import { calculateWorkDay } from "../utils/timesheet.util";
import { useAuthStore } from "@/stores/auth.store";

export const useTimesheet = () => {
  const { startTime, endTime, timeDifference, reset } = useTimesheetStore();
  const workSchedule = useAuthStore((state) => state.user?.workSchedule);

  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const [timeString, setTimeString] = useState("--:-- - --:--:--");

  const updateTimeUI = useCallback(() => {
    if (!workSchedule) return;

    const currentServerTime = new Date(Date.now() - timeDifference);
    const currentServerTimeFormatted = format(currentServerTime);

    if (!startTime) {
      setTimeString(`--:-- - ${currentServerTimeFormatted}`);
      return;
    }

    const durationWork = calculateWorkDay(
      startTime,
      currentServerTime,
      workSchedule
    );

    setTimeString(`${durationWork.toFixed(2)} - ${currentServerTimeFormatted}`);
  }, [startTime, timeDifference, workSchedule, endTime]);

  useEffect(() => {
    updateTimeUI();

    if (!intervalId.current) {
      intervalId.current = setInterval(updateTimeUI, 1000);
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    };
  }, [startTime, updateTimeUI]);

  const scheduleResetAtMidnight = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0);
    const msUntilMidnight = tomorrow.getTime() - now.getTime() + 5000;

    return setTimeout(() => {
      reset();
      scheduleResetAtMidnight();
    }, msUntilMidnight);
  };

  return { timeString, scheduleResetAtMidnight };
};
