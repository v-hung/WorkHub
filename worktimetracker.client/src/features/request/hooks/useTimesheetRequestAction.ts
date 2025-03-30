import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error";
import { CreateTimesheetRequestDto } from "@/generate-api";
import { requestApi } from "@/services/apiClient";
import { useState } from "react";

export const useTimesheetRequestAction = () => {
  const [loading, setLoading] = useState(false);

  // Create
  // =============

  const create = async (request: CreateTimesheetRequestDto) => {
    setLoading(true);
    try {
      await requestApi.timesheetRequestCreateRequest(request);
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
