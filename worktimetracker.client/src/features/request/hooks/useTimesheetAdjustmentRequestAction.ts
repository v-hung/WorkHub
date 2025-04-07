import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error";
import {
  CreateTimesheetAdjustmentRequestDto,
  RequestType,
} from "@/generate-api";
import { requestApi } from "@/services/apiClient";
import { useAuthStore } from "@/stores/auth.store";
import { useState } from "react";

export type CreateTimesheetAdjustmentRequestDtoCustomType =
  CreateTimesheetAdjustmentRequestDto & {
    breakTime: [Date | null, Date | null];
    workingTime: [Date | null, Date | null];
    approvedName: string;
  };

export const useTimesheetAdjustmentRequestAction = () => {
  const [loading, setLoading] = useState(false);
  const supervisor = useAuthStore((state) => state.user!.supervisor);

  // Default data
  // =============

  const formDefault = (
    date?: Date
  ): CreateTimesheetAdjustmentRequestDtoCustomType => {
    const form = new CreateTimesheetAdjustmentRequestDto();
    return {
      ...form,
      approvedId: supervisor?.id,
      approvedName: supervisor?.fullName || "No supervisor",
      requestType: RequestType.TimesheetAdjustmentRequest,
      date: date || new Date(),
      breakTime: [null, null],
      workingTime: [null, null],
    };
  };

  // Create
  // =============

  const create = async (request: CreateTimesheetAdjustmentRequestDto) => {
    setLoading(true);
    try {
      console.log({ request });
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

  return { formDefault, loading, create };
};
