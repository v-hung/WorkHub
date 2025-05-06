import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import {
  CreateTimesheetAdjustmentRequestDto,
  CreateTimesheetAdjustmentRequestDtoFromJSON,
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

export const useCreateTimesheetAdjustmentRequest = () => {
  const [loading, setLoading] = useState(false);
  const supervisor = useAuthStore((state) => state.user!.supervisor);

  // Default data
  // =============

  const formDefault = (
    date?: Date
  ): CreateTimesheetAdjustmentRequestDtoCustomType => {
    const form = CreateTimesheetAdjustmentRequestDtoFromJSON({});

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

  const create = async (
    request: CreateTimesheetAdjustmentRequestDto,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await requestApi.timesheetAdjustmentRequestCreateRequest({
        createTimesheetAdjustmentRequestDto: request,
      });

      cb?.();

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

  return { formDefault, loading, create };
};
