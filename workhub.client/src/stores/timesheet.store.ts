import { wrapPromise } from "@/utils/promise";
import { timesheetApi } from "@/services/apiClient";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { isBefore, startOfDay } from "date-fns";

type TimesheetStoreState = {
  startTime: Date | null;
  timeDifference: number;
  endTime: Date | null;
  isActive: boolean;
  checkIn: () => Promise<void>;
  checkOut: () => Promise<void>;
  fetchTodayTimesheet: () => Promise<void>;
  reset: () => void;
};

export const useTimesheetStore = create<TimesheetStoreState>()(
  immer((set, get) => ({
    startTime: null,
    timeDifference: 0,
    endTime: null,
    isActive: true,
    checkIn: async () => {
      wrapPromise(() =>
        timesheetApi.timesheetCheckIn().then((data) => {
          let timeDifference = Date.now() - data.serverTime.getTime();

          set({
            startTime: data.timesheet.startTime,
            timeDifference,
            isActive: true,
          });
        })
      );
    },
    checkOut: async () => {
      wrapPromise(() =>
        timesheetApi.timesheetCheckOut().then((data) => {
          set({ endTime: data.timesheet.endTime, isActive: false });
        })
      );
    },
    fetchTodayTimesheet: async () => {
      timesheetApi.timesheetGetTodayTimesheet().then((data) => {
        let timeDifference = Date.now() - data.serverTime.getTime();

        set({
          startTime: data.timesheet.startTime,
          endTime: data.timesheet.endTime,
          timeDifference,
          isActive: data.timesheet.isActive,
        });
      });
    },
    reset: () => {
      if (
        get().startTime &&
        isBefore(startOfDay(get().startTime!), startOfDay(new Date()))
      ) {
        set({
          startTime: null,
          endTime: null,
          timeDifference: 0,
          isActive: true,
        });
      }
    },
  }))
);
