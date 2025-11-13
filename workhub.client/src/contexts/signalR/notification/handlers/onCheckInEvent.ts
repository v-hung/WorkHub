import { useTimesheetStore } from "@/stores/timesheet.store";
import { CheckInEventMessageDto } from "@/types/signalr-notification";

export const onCheckInEvent = (data: CheckInEventMessageDto) => {
  useTimesheetStore.setState({ startTime: data.checkInTime });
};
