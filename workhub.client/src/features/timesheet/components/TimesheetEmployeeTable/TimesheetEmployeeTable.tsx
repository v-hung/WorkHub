import DatePicker from "@/ui/form/DatePicker";
import MainTable from "@/ui/table/MainTable";
import { Button, Flex } from "antd";
import { addMonths, formatDuration, intervalToDuration } from "date-fns";
import { useState, type FC, type HTMLAttributes } from "react";
import { useTimesheetEmployeeContext } from "../../context/TimesheetEmployeeContext";
import { useTimesheets } from "../../hooks/useTimesheets";

type State = HTMLAttributes<HTMLDivElement>;

const TimesheetEmployeeTable: FC<State> = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const { getTimesheets } = useTimesheets()
	
	
		return (
			<Flex vertical style={{ height: "100%" }}>
				<Flex
					gap="small"
					justify="space-between"
					align="end"
					flex="none"
					style={{ marginBottom: "1rem" }}
				>
					<Button
						icon={<IIonChevronBack style={{ width: 20 }} />}
						onClick={() => setSelectedDate((state) => addMonths(state, -1))}
					></Button>
					<DatePicker
						picker="month"
						value={selectedDate}
						onChange={(v) => setSelectedDate(v)}
						showNow
					/>
					<Button
						icon={<IIonChevronForward style={{ width: 20 }} />}
						onClick={() => setSelectedDate((state) => addMonths(state, 1))}
					></Button>
					<Button
						icon={<IBxCalendarCheck style={{ width: 20 }} />}
						style={{ color: isCurrentMonth ? blue.primary : "inherit" }}
						onClick={() => setSelectedDate(new Date())}
					></Button>
				</Flex>
	
				<div style={{ flexGrow: 1, minHeight: 0 }}>
					<MainTable
						className="timesheet-table"
						columns={timesheetColumns}
						dataSource={data}
						loading={loading}
						pagination={false}
						rowClassName={(record) => {
							return isWeekend(record.date) ? "weekend-row" : "";
						}}
						expandable={{
							expandedRowRender: (record) =>
								(record.requests ?? []).length > 0 ? (
									<Table
										rowKey="id"
										dataSource={record.requests ?? undefined}
										pagination={false}
										columns={requestTimesheetColumns}
									/>
								) : null,
							rowExpandable: (record) => (record.requests ?? []).length > 0,
						}}
					/>
				</div>
			</Flex>
};

export default TimesheetEmployeeTable;
