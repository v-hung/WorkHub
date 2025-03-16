import { TimesheetMinimalDto } from "@/generate-api";
import { DataTimesheetTableType } from "@/features/timesheet/components/TimesheetTable/constants";
import { formatDate } from "@/common/utils/date.util";

export const toDataTimesheetTable = (
  data: TimesheetMinimalDto
): DataTimesheetTableType => {
  return {
    ...data,
    key: data.id,
    date: formatDate(data.startTime, "yyyy/MM/dd"),
    startTime: formatDate(data.startTime),
    endTime: data.endTime ? formatDate(data.endTime) : undefined,
  };
};
