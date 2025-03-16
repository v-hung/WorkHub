import { wrapPromise } from "@/common/utils/promise";
import { timesheetApi } from "@/services/apiClient";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TimesheetStoreState = {
  startTime: Date | null;
  timeDifference: number;
  endTime: Date | null;
  checkIn: () => void;
  checkOut: () => void;
  fetchTodayTimesheet: () => Promise<void>;
};

export const useTimesheetStore = create<TimesheetStoreState>()(
  immer((set) => ({
    startTime: null,
    timeDifference: 0,
    endTime: null,
    checkIn: async () => {
      wrapPromise(() =>
        timesheetApi.timesheetCheckIn().then((data) => {
          let timeDifference = Date.now() - data.serverTime.getTime();

          set({ startTime: data.timesheet.startTime, timeDifference });
        })
      );
    },
    checkOut: async () => {
      wrapPromise(() =>
        timesheetApi.timesheetCheckOut().then((data) => {
          set({ endTime: data.timesheet.endTime });
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
        });
      });
    },
  }))
);
