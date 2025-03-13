import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error";
import { TimesheetDto } from "@/generate-api";
import { timesheetApi } from "@/services/apiClient";
import { useCallback, useState } from "react";

export const useTimesheetAction = () => {
  const [loading, setLoading] = useState(false);
  const [timesheets, setTimesheets] = useState<TimesheetDto[]>([]);
  const [request, setRequest] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  // Get timesheets
  // =============

  const getTimesheets = useCallback(async () => {
    setLoading(true);
    try {
      const data = await timesheetApi.timesheetGetMonthlyTimesheets(
        request.month,
        request.year
      );
      setTimesheets(data);
    } catch (e) {
      getNotification().error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [request]);

  // // CheckIn
  // // =============

  // const checkIn = async () => {
  //   setLoading(true);
  //   try {
  //     return await timesheetApi.timesheetCheckIn();
  //   } catch (e) {
  //     getNotification().error({
  //       message: getMessageError(e),
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // // Checkout
  // // =============

  // const Checkout = async () => {
  //   setLoading(true);
  //   try {
  //     return await timesheetApi.timesheetCheckOut();
  //   } catch (e) {
  //     getNotification().error({
  //       message: getMessageError(e),
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return { timesheets, loading, request, setRequest, getTimesheets };
};
