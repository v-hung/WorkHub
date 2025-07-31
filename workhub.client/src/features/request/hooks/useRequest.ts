import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import { RequestType } from "@/generate-api";
import { requestApi } from "@/services/apiClient";
import { useState } from "react";

export const useRequest = () => {
  const [loading, setLoading] = useState(false);

  // Cancel
  // =============

  const cancelRequestMap: Record<RequestType, (id: number) => Promise<void>> = {
    [RequestType.LeaveRequest]: async (id: number) => {
      await requestApi.leaveRequestCancelRequest({ id });
    },
    [RequestType.TimesheetAdjustmentRequest]: async (id: number) => {
      await requestApi.timesheetAdjustmentRequestCancelRequest({ id });
    },
    [RequestType.OvertimeRequest]: async () => {},
    [RequestType.WorkFromHomeRequest]: async () => {},
    [RequestType.CancelRequest]: async () => {},
  };

  const cancel = async (requestId: number, requestType: RequestType) => {
    setLoading(true);
    try {
      const cancelFn = cancelRequestMap[requestType];

      await cancelFn(requestId);

      getNotification().success({
        message: "Successfully completed",
      });
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, cancel };
};
