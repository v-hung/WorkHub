import { format } from "@/common/utils/date.utils";
import { useTimesheetStore } from "@/stores/timesheet.store";
import { useEffect, useRef, useState, useCallback } from "react";
import { calculateWorkDay } from "../utils/timesheet.util";
import { useAuthStore } from "@/stores/auth.store";

export const useTimesheet = () => {
  const { startTime, endTime, timeDifference, fetchTodayTimesheet } =
    useTimesheetStore();
  const workTime = useAuthStore((state) => state.user?.workTime);

  const [loading, setLoading] = useState(false);
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const [timeString, setTimeString] = useState("--:-- - --:--:--");

  const updateTimeUI = useCallback(() => {
    if (!startTime || !workTime) return;

    if (endTime) {
      const durationWork = calculateWorkDay(startTime, endTime, workTime);
      setTimeString(`${durationWork.toFixed(2)}`);
    } else {
      const currentServerTime = new Date(Date.now() - timeDifference);
      const currentServerTimeFormatted = format(currentServerTime);
      const durationWork = calculateWorkDay(
        startTime,
        currentServerTime,
        workTime
      );

      setTimeString(
        `${durationWork.toFixed(2)} - ${currentServerTimeFormatted}`
      );
    }
  }, [startTime, timeDifference, workTime, endTime]);

  useEffect(() => {
    if (!startTime) {
      (async () => {
        setLoading(true);
        await fetchTodayTimesheet();
        setLoading(false);
      })();
    }
  }, [startTime, fetchTodayTimesheet]);

  useEffect(() => {
    if (startTime) {
      updateTimeUI();

      if (!intervalId.current && !endTime) {
        intervalId.current = setInterval(updateTimeUI, 1000);
      }
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    };
  }, [startTime, endTime, updateTimeUI]);

  return { timeString, loading };
};
