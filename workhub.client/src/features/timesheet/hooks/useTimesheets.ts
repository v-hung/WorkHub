import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import { TimesheetFullDtoPaginated } from "@/generate-api";
import { timesheetApi } from "@/services/apiClient";
import { getMonth, getYear, isSameMonth } from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useTimesheets = () => {
  const [loading, setLoading] = useState(false);
  const [timesheetPaginated, setTimesheetPaginated] =
    useState<TimesheetFullDtoPaginated>();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const isCurrentMonth = useMemo(
    () => isSameMonth(selectedDate, new Date()),
    [selectedDate]
  );

  // Get timesheets
  // =============

  const getTimesheets = useCallback(async () => {
    setLoading(true);
    try {
      const data = await timesheetApi.timesheetGetMonthlyTimesheets({
        month: getMonth(selectedDate) + 1,
        year: getYear(selectedDate),
      });
      setTimesheetPaginated(data);
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [selectedDate]);

  useEffect(() => {
    getTimesheets();
  }, [selectedDate]);

  return {
    timesheets: timesheetPaginated,
    loading,
    selectedDate,
    isCurrentMonth,
    setSelectedDate,
    getTimesheets: getTimesheets,
  };
};
