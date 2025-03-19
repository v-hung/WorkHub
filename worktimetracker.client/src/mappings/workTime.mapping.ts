import { DataWorkTimeTableType } from "@/features/workTime/components/WorkTimeTable/constants";
import { CreateWorkTimeCommand, WorkTimeDto } from "@/generate-api";

export const toDataWorkTimeTable = (
  data: WorkTimeDto
): DataWorkTimeTableType => {
  return {
    ...data,
    key: data.id,
  };
};

export const toWorkTimeRequest = (
  data: WorkTimeDto
): CreateWorkTimeCommand => ({
  ...data,
});
