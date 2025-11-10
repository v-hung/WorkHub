import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import { TimesheetDto } from "@/generate-api";
import { timesheetApi } from "@/services/apiClient";
import { getMonth, getYear, isSameMonth } from "date-fns";
import { SetStateAction, useCallback, useState } from "react";

export const useCurrentTimesheets = () => {
  const [loading, setLoading] = useState(false);
  const [timesheets, setTimesheets] = useState<TimesheetDto[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const isCurrentMonth = isSameMonth(selectedDate, new Date());

  // Get timesheets
  // =============

  const getCurrentTimesheets = async (selectedDate: Date) => {
    setLoading(true);
    try {
      const data = await timesheetApi.timesheetGetCurrentUserMonthlyTimesheets({
        month: getMonth(selectedDate) + 1,
        year: getYear(selectedDate),
      });
      setTimesheets(data);
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSelectedDate = useCallback((updater?: SetStateAction<Date>) => {
    setSelectedDate((prev) => {
      const newRequest =
        updater === undefined
          ? prev
          : typeof updater === "function"
          ? updater(prev)
          : updater;

      getCurrentTimesheets(newRequest);
      return newRequest;
    });
  }, []);

  return {
    timesheets,
    loading,
    selectedDate,
    isCurrentMonth,
    updateSelectedDate,
    getCurrentTimesheets,
  };
};
