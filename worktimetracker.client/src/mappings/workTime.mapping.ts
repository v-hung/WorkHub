import { DataWorkTimeTableType } from "@/features/workTime/components/WorkTimeTable/constants";
import { WorkTimeDto } from "@/generate-api";

export const toDataWorkTimeTable = (
  data: WorkTimeDto
): DataWorkTimeTableType => {
  return {
    ...data,
    key: data.id,
  };
};
