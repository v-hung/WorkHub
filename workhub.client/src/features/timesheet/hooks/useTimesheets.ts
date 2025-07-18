import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import { TimesheetFullDtoPaginated } from "@/generate-api";
import { timesheetApi } from "@/services/apiClient";
import { getMonth, getYear, isSameMonth } from "date-fns";
import { SetStateAction, useCallback, useState } from "react";
import { isEmpty } from "@/utils/validate.utils";

type GetMonthlyTimesheetRequest = {
  date: Date;
  userIds: string[];
};

export const useTimesheets = () => {
  const [loading, setLoading] = useState(false);
  const [timesheetPaginated, setTimesheetPaginated] =
    useState<TimesheetFullDtoPaginated>();

  const [request, setRequest] = useState<GetMonthlyTimesheetRequest>({
    date: new Date(),
    userIds: [] as string[],
  });

  const isCurrentMonth = isSameMonth(request.date, new Date());

  // Get timesheets
  // =============

  const getTimesheets = async (request: GetMonthlyTimesheetRequest) => {
    setLoading(true);
    try {
      if (loading) return;

      if (isEmpty(request.userIds)) {
        return setTimesheetPaginated(undefined);
      }

      const data = await timesheetApi.timesheetGetMonthlyTimesheets({
        month: getMonth(request.date) + 1,
        year: getYear(request.date),
        pageNumber: 1,
        pageSize: 1000,
        ids: request.userIds,
      });
      setTimesheetPaginated(data);
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  const updateRequest = useCallback(
    (updater?: SetStateAction<GetMonthlyTimesheetRequest>) => {
      setRequest((prev) => {
        const newRequest =
          updater === undefined
            ? prev
            : typeof updater === "function"
            ? updater(prev)
            : updater;

        getTimesheets(newRequest);
        return newRequest;
      });
    },
    []
  );

  return {
    timesheetPaginated,
    loading,
    isCurrentMonth,
    request,
    updateRequest,
    getTimesheets,
  };
};
