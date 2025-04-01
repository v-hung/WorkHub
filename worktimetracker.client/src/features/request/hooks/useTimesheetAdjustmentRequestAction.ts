import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error";
import { CreateTimesheetAdjustmentRequestDto } from "@/generate-api";
import { requestApi } from "@/services/apiClient";
import { useState } from "react";

export const useTimesheetAdjustmentRequestAction = () => {
  const [loading, setLoading] = useState(false);

  // Create
  // =============

  const create = async (request: CreateTimesheetAdjustmentRequestDto) => {
    setLoading(true);
    try {
      await requestApi.timesheetAdjustmentRequestCreateRequest(request);
      getNotification().success({
        message: "Successfully completed",
      });
    } catch (e) {
      getNotification().error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, create };
};
