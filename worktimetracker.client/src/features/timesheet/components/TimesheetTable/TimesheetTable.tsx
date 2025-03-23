import MainTable from "@/ui/table/MainTable";
import { DataTimesheetTableType, userTimesheetColumns } from "./constants";
import { useMemo } from "react";
import { useTimesheets } from "../../hooks/useTimesheets";
import { formatDate } from "@/common/utils/date.util";
import "./TimesheetTable.css";
import { isWeekend } from "date-fns";

const TimesheetTable = () => {
  const { timesheets, loading } = useTimesheets();

  const data = useMemo(
    () =>
      timesheets.map<DataTimesheetTableType>((v) => ({
        id: v.id,
        date: v.date,
        dateString: formatDate(v.date, "dd/MM/yyyy"),
        startTime: v.startTime ? formatDate(v.startTime) : undefined,
        endTime: v.endTime ? formatDate(v.endTime) : undefined,
        workMinutes: v.workMinutes,
        requests: v.requests,
      })),
    [timesheets]
  );

  return (
		<div class="mb-2 flex flex-none justify-between gap-2 px-6">
    <DatePicker v-model:value="month" picker="month" />
    <a-button
      :icon="h(BxCalendarCheck, { class: 'w-5' })"
      class="mr-auto text-gray-600"
      :class="{ '!text-sky-500': isSameMonth(month, new Date()) }"
      @click.prevent="month = new Date()"
    ></a-button>
    <a-dropdown :trigger="['click']" placement="bottomLeft">
      <a-button class="flex items-center text-sm" type="text">
        <IonList class="mr-1 w-5" />
        <span>List view</span>
        <DownOutlined class="text-xs leading-none" />
      </a-button>
      <template #overlay>
        <a-menu>
          <a-menu-item key="1"
            >Clicking me will not close the menu.</a-menu-item
          >
          <a-menu-item key="2"
            >Clicking me will not close the menu also.</a-menu-item
          >
          <a-menu-item key="3">Clicking me will close the menu</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
    <MainTable
      className="timesheet-table"
      columns={userTimesheetColumns}
      dataSource={data}
      loading={loading}
      pagination={false}
      rowClassName={(record) => {
        return isWeekend(record.date) ? "weekend-row" : "";
      }}
    />
  );
};

export default TimesheetTable;
