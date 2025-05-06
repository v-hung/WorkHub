import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import {
  BioStarSyncHistoricalEventsResponse,
  GetHistoricalEventsRequest,
} from "@/generate-api";
import { bioStarApi } from "@/services/apiClient";
import { getMessageError } from "@/utils/error.utils";
import { useState } from "react";

export const useTimesheetAction = () => {
  const [loading, setLoading] = useState(false);

  const syncTimesheet = async (
    request: GetHistoricalEventsRequest,
    cb?: (data: BioStarSyncHistoricalEventsResponse) => void
  ) => {
    try {
      let data = await bioStarApi.bioStarSyncTimesheets({
        getHistoricalEventsRequest: request,
      });

      cb?.(data);
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, syncTimesheet };
};
