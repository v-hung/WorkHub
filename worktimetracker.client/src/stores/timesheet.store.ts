import { WorkTimeDto } from "@/generate-api";
import { create } from "zustand";

type TimesheetStoreState = {
  startTime: Date | null;
  timeDifference: number;
  endTime: Date | null;
  workTime: WorkTimeDto | null;
};

export const useTimesheetStore = create<TimesheetStoreState>((set) => ({
  startTime: null,
  timeDifference: 0,
  endTime: null,
  workTime: null,
}));
