import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import {
  CreateLeaveRequestDto,
  CreateLeaveRequestDtoFromJSON,
  RequestType,
} from "@/generate-api";
import { requestApi } from "@/services/apiClient";
import { useAuthStore } from "@/stores/auth.store";
import { useState } from "react";

export type CreateLeaveRequestDtoCustomType = CreateLeaveRequestDto & {
  breakTime: [Date | null, Date | null];
  approvedName: string;
};

export const useCreateLeaveRequest = () => {
  const [loading, setLoading] = useState(false);
  const supervisor = useAuthStore((state) => state.user!.supervisor);

  // Default data
  // =============

  const formDefault = (date?: Date): CreateLeaveRequestDtoCustomType => {
    const form = CreateLeaveRequestDtoFromJSON({});
    return {
      ...form,
      approvedId: supervisor?.id,
      approvedName: supervisor?.fullName || "No supervisor",
      requestType: RequestType.LeaveRequest,
      date: date || new Date(),
      breakTime: [null, null],
    };
  };

  // Create
  // =============

  const create = async (request: CreateLeaveRequestDto, cb?: () => void) => {
    setLoading(true);
    try {
      await requestApi.leaveRequestCreateRequest({
        createLeaveRequestDto: request,
      });

      cb?.();

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
