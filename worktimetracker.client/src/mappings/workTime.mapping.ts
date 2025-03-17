import { DataWorkTimeTableType } from "@/features/workTime/components/WorkTimeTable/constants";
import { CreateEditWorkTimeCommand, WorkTimeDto } from "@/generate-api";

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
): CreateEditWorkTimeCommand => ({
  ...data,
});
