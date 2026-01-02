import React, { useState, useEffect } from "react";
import {
  Card,
  List,
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Space,
  Tag,
  message,
  Statistic,
  Row,
  Col,
  Table,
  Progress,
  Badge,
} from "antd";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import "./TimeTrackingPage.css";

interface TimeEntry {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  startTime: string;
  endTime: string;
  breakDuration: number; // in minutes
  totalHours: number;
  status: "present" | "absent" | "late" | "early_leave";
  notes: string;
  createdAt: string;
  updatedAt: string;
}

interface AttendanceSummary {
  employeeId: string;
  employeeName: string;
  totalDays: number;
  presentDays: number;
  absentDays: number;
  lateDays: number;
  earlyLeaveDays: number;
  totalHours: number;
  averageHours: number;
}

const mockTimeEntries: TimeEntry[] = [
  {
    id: "1",
    employeeId: "emp1",
    employeeName: "John Doe",
    date: "2024-01-15",
    startTime: "09:00",
    endTime: "18:00",
    breakDuration: 60,
    totalHours: 8,
    status: "present",
    notes: "Regular working day",
    createdAt: "2024-01-15T18:00:00Z",
    updatedAt: "2024-01-15T18:00:00Z",
  },
  {
    id: "2",
    employeeId: "emp2",
    employeeName: "Jane Smith",
    date: "2024-01-15",
    startTime: "09:15",
    endTime: "17:45",
    breakDuration: 60,
    totalHours: 7.5,
    status: "late",
    notes: "Arrived 15 minutes late",
    createdAt: "2024-01-15T17:45:00Z",
    updatedAt: "2024-01-15T17:45:00Z",
  },
  {
    id: "3",
    employeeId: "emp3",
    employeeName: "Bob Johnson",
    date: "2024-01-15",
    startTime: "09:00",
    endTime: "16:30",
    breakDuration: 60,
    totalHours: 7,
    status: "early_leave",
    notes: "Left early for personal reasons",
    createdAt: "2024-01-15T16:30:00Z",
    updatedAt: "2024-01-15T16:30:00Z",
  },
];

const mockAttendanceSummaries: AttendanceSummary[] = [
  {
    employeeId: "emp1",
    employeeName: "John Doe",
    totalDays: 22,
    presentDays: 20,
    absentDays: 2,
    lateDays: 1,
    earlyLeaveDays: 0,
    totalHours: 168,
    averageHours: 8.4,
  },
  {
    employeeId: "emp2",
    employeeName: "Jane Smith",
    totalDays: 22,
    presentDays: 18,
    absentDays: 1,
    lateDays: 3,
    earlyLeaveDays: 1,
    totalHours: 154,
    averageHours: 7.7,
  },
  {
    employeeId: "emp3",
    employeeName: "Bob Johnson",
    totalDays: 22,
    presentDays: 19,
    absentDays: 0,
    lateDays: 2,
    earlyLeaveDays: 2,
    totalHours: 162,
    averageHours: 8.1,
  },
];

export function Component() {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>(mockTimeEntries);
  const [attendanceSummaries, setAttendanceSummaries] = useState<
    AttendanceSummary[]
  >(mockAttendanceSummaries);
  const [isClockInModalVisible, setIsClockInModalVisible] = useState(false);
  const [isClockOutModalVisible, setIsClockOutModalVisible] = useState(false);
  const [isManualEntryModalVisible, setIsManualEntryModalVisible] =
    useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString()
  );
  const [form] = Form.useForm();
  const [manualForm] = Form.useForm();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const statusColors = {
    present: "green",
    absent: "red",
    late: "orange",
    early_leave: "purple",
  };

  const statusLabels = {
    present: "Present",
    absent: "Absent",
    late: "Late",
    early_leave: "Early Leave",
  };

  const handleClockIn = (values: any) => {
    const newEntry: TimeEntry = {
      id: Date.now().toString(),
      employeeId: values.employeeId,
      employeeName: values.employeeName,
      date: selectedDate,
      startTime: currentTime,
      endTime: "",
      breakDuration: 0,
      totalHours: 0,
      status: "present",
      notes: values.notes || "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setTimeEntries([...timeEntries, newEntry]);
    setIsClockInModalVisible(false);
    form.resetFields();
    message.success("Clocked in successfully");
  };

  const handleClockOut = (values: any) => {
    // In a real app, this would find the current active entry for the employee
    const activeEntry = timeEntries.find(
      (entry) =>
        entry.employeeId === values.employeeId &&
        entry.date === selectedDate &&
        !entry.endTime
    );

    if (activeEntry) {
      const endTime = currentTime;
      const startTime = activeEntry.startTime;
      const breakDuration = values.breakDuration || 0;

      // Calculate total hours (simplified calculation)
      const start = new Date(`2000-01-01T${startTime}`);
      const end = new Date(`2000-01-01T${endTime}`);
      const totalMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
      const totalHours = Math.max(0, (totalMinutes - breakDuration) / 60);

      const updatedEntry: TimeEntry = {
        ...activeEntry,
        endTime,
        breakDuration,
        totalHours: Math.round(totalHours * 100) / 100,
        notes: values.notes || activeEntry.notes,
        updatedAt: new Date().toISOString(),
      };

      setTimeEntries(
        timeEntries.map((entry) =>
          entry.id === activeEntry.id ? updatedEntry : entry
        )
      );
      message.success("Clocked out successfully");
    }

    setIsClockOutModalVisible(false);
    form.resetFields();
  };

  const handleManualEntry = (values: any) => {
    const startTime = values.startTime.format("HH:mm");
    const endTime = values.endTime.format("HH:mm");
    const breakDuration = values.breakDuration || 0;

    // Calculate total hours
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    const totalMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
    const totalHours = Math.max(0, (totalMinutes - breakDuration) / 60);

    const newEntry: TimeEntry = {
      id: Date.now().toString(),
      employeeId: values.employeeId,
      employeeName: values.employeeName,
      date: values.date.format("YYYY-MM-DD"),
      startTime,
      endTime,
      breakDuration,
      totalHours: Math.round(totalHours * 100) / 100,
      status: values.status,
      notes: values.notes || "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setTimeEntries([...timeEntries, newEntry]);
    setIsManualEntryModalVisible(false);
    manualForm.resetFields();
    message.success("Time entry added successfully");
  };

  const getTodayStats = () => {
    const todayEntries = timeEntries.filter(
      (entry) => entry.date === selectedDate
    );
    const totalEmployees = todayEntries.length;
    const presentCount = todayEntries.filter(
      (entry) => entry.status === "present"
    ).length;
    const lateCount = todayEntries.filter(
      (entry) => entry.status === "late"
    ).length;
    const absentCount = todayEntries.filter(
      (entry) => entry.status === "absent"
    ).length;

    return { totalEmployees, presentCount, lateCount, absentCount };
  };

  const todayStats = getTodayStats();

  const columns = [
    {
      title: "Employee",
      dataIndex: "employeeName",
      key: "employeeName",
      sorter: (a: TimeEntry, b: TimeEntry) =>
        a.employeeName.localeCompare(b.employeeName),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a: TimeEntry, b: TimeEntry) => a.date.localeCompare(b.date),
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "Break (min)",
      dataIndex: "breakDuration",
      key: "breakDuration",
    },
    {
      title: "Total Hours",
      dataIndex: "totalHours",
      key: "totalHours",
      render: (hours: number) => `${hours}h`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={statusColors[status as keyof typeof statusColors]}>
          {statusLabels[status as keyof typeof statusLabels]}
        </Tag>
      ),
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
      ellipsis: true,
    },
  ];

  return (
    <DefaultPage>
      <DefaultHeader>
        <DefaultBreadcrumb />
        <div className="time-tracking-header">
          <div className="header-title">
            <IIonTimeOutline className="header-icon" />
            <h1>Time Tracking</h1>
            <div className="current-time">
              <span>{currentTime}</span>
            </div>
          </div>
          <Space>
            <Button
              type="primary"
              icon={<IIonPlayOutline />}
              onClick={() => setIsClockInModalVisible(true)}
            >
              Clock In
            </Button>
            <Button
              danger
              icon={<IIonStopOutline />}
              onClick={() => setIsClockOutModalVisible(true)}
            >
              Clock Out
            </Button>
            <Button
              icon={<IIonCalendarOutline />}
              onClick={() => setIsManualEntryModalVisible(true)}
            >
              Manual Entry
            </Button>
          </Space>
        </div>
      </DefaultHeader>

      <DefaultContent>
        <Row gutter={[16, 16]} className="stats-row">
          <Col xs={24} sm={6}>
            <Card>
              <Statistic
                title="Total Employees Today"
                value={todayStats.totalEmployees}
                prefix={<IIonTimeOutline />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card>
              <Statistic
                title="Present"
                value={todayStats.presentCount}
                prefix={<IIonCheckmarkCircleOutline />}
                valueStyle={{ color: "#10b981" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card>
              <Statistic
                title="Late"
                value={todayStats.lateCount}
                prefix={<IIonCloseCircleOutline />}
                valueStyle={{ color: "#f59e0b" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card>
              <Statistic
                title="Absent"
                value={todayStats.absentCount}
                prefix={<IIonCloseCircleOutline />}
                valueStyle={{ color: "#ef4444" }}
              />
            </Card>
          </Col>
        </Row>

        <Card title="Today's Time Entries" className="time-entries-card">
          <Table
            columns={columns}
            dataSource={timeEntries.filter(
              (entry) => entry.date === selectedDate
            )}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            scroll={{ x: 800 }}
          />
        </Card>

        <Card title="Monthly Attendance Summary" className="summary-card">
          <List
            dataSource={attendanceSummaries}
            renderItem={(summary) => (
              <List.Item key={summary.employeeId}>
                <List.Item.Meta
                  title={summary.employeeName}
                  description={
                    <div className="summary-details">
                      <div className="summary-stats">
                        <span>
                          Present: {summary.presentDays}/{summary.totalDays}
                        </span>
                        <span>Absent: {summary.absentDays}</span>
                        <span>Late: {summary.lateDays}</span>
                        <span>Early Leave: {summary.earlyLeaveDays}</span>
                      </div>
                      <div className="summary-hours">
                        <span>Total Hours: {summary.totalHours}h</span>
                        <span>Average: {summary.averageHours}h/day</span>
                      </div>
                      <Progress
                        percent={Math.round(
                          (summary.presentDays / summary.totalDays) * 100
                        )}
                        size="small"
                        status={
                          summary.presentDays / summary.totalDays >= 0.9
                            ? "success"
                            : "normal"
                        }
                      />
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>

        {/* Clock In Modal */}
        <Modal
          title="Clock In"
          open={isClockInModalVisible}
          onCancel={() => {
            setIsClockInModalVisible(false);
            form.resetFields();
          }}
          footer={null}
          width={400}
        >
          <div className="clock-display">
            <div className="current-time-display">{currentTime}</div>
            <div className="current-date-display">
              {new Date().toLocaleDateString()}
            </div>
          </div>
          <Form form={form} layout="vertical" onFinish={handleClockIn}>
            <Form.Item
              name="employeeId"
              label="Employee ID"
              rules={[{ required: true, message: "Please enter employee ID" }]}
            >
              <Input placeholder="Enter employee ID" />
            </Form.Item>

            <Form.Item
              name="employeeName"
              label="Employee Name"
              rules={[
                { required: true, message: "Please enter employee name" },
              ]}
            >
              <Input placeholder="Enter employee name" />
            </Form.Item>

            <Form.Item name="notes" label="Notes (Optional)">
              <Input.TextArea placeholder="Any additional notes" rows={2} />
            </Form.Item>

            <Form.Item className="modal-footer">
              <Space>
                <Button
                  onClick={() => {
                    setIsClockInModalVisible(false);
                    form.resetFields();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<IIonPlayOutline />}
                >
                  Clock In
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>

        {/* Clock Out Modal */}
        <Modal
          title="Clock Out"
          open={isClockOutModalVisible}
          onCancel={() => {
            setIsClockOutModalVisible(false);
            form.resetFields();
          }}
          footer={null}
          width={400}
        >
          <div className="clock-display">
            <div className="current-time-display">{currentTime}</div>
            <div className="current-date-display">
              {new Date().toLocaleDateString()}
            </div>
          </div>
          <Form form={form} layout="vertical" onFinish={handleClockOut}>
            <Form.Item
              name="employeeId"
              label="Employee ID"
              rules={[{ required: true, message: "Please enter employee ID" }]}
            >
              <Input placeholder="Enter employee ID" />
            </Form.Item>

            <Form.Item
              name="breakDuration"
              label="Break Duration (minutes)"
              rules={[
                { required: true, message: "Please enter break duration" },
              ]}
            >
              <Input type="number" placeholder="60" min={0} />
            </Form.Item>

            <Form.Item name="notes" label="Notes (Optional)">
              <Input.TextArea placeholder="Any additional notes" rows={2} />
            </Form.Item>

            <Form.Item className="modal-footer">
              <Space>
                <Button
                  onClick={() => {
                    setIsClockOutModalVisible(false);
                    form.resetFields();
                  }}
                >
                  Cancel
                </Button>
                <Button danger htmlType="submit" icon={<IIonStopOutline />}>
                  Clock Out
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>

        {/* Manual Entry Modal */}
        <Modal
          title="Manual Time Entry"
          open={isManualEntryModalVisible}
          onCancel={() => {
            setIsManualEntryModalVisible(false);
            manualForm.resetFields();
          }}
          footer={null}
          width={600}
        >
          <Form
            form={manualForm}
            layout="vertical"
            onFinish={handleManualEntry}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="employeeId"
                  label="Employee ID"
                  rules={[
                    { required: true, message: "Please enter employee ID" },
                  ]}
                >
                  <Input placeholder="Enter employee ID" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="employeeName"
                  label="Employee Name"
                  rules={[
                    { required: true, message: "Please enter employee name" },
                  ]}
                >
                  <Input placeholder="Enter employee name" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="date"
                  label="Date"
                  rules={[{ required: true, message: "Please select date" }]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="status"
                  label="Status"
                  rules={[{ required: true, message: "Please select status" }]}
                >
                  <Select placeholder="Select status">
                    <Select.Option value="present">Present</Select.Option>
                    <Select.Option value="absent">Absent</Select.Option>
                    <Select.Option value="late">Late</Select.Option>
                    <Select.Option value="early_leave">
                      Early Leave
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="startTime"
                  label="Start Time"
                  rules={[
                    { required: true, message: "Please select start time" },
                  ]}
                >
                  <TimePicker format="HH:mm" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="endTime"
                  label="End Time"
                  rules={[
                    { required: true, message: "Please select end time" },
                  ]}
                >
                  <TimePicker format="HH:mm" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="breakDuration"
                  label="Break Duration (minutes)"
                  rules={[
                    { required: true, message: "Please enter break duration" },
                  ]}
                >
                  <Input type="number" placeholder="60" min={0} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="notes" label="Notes (Optional)">
                  <Input.TextArea placeholder="Any additional notes" rows={2} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item className="modal-footer">
              <Space>
                <Button
                  onClick={() => {
                    setIsManualEntryModalVisible(false);
                    manualForm.resetFields();
                  }}
                >
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Add Entry
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </DefaultContent>
    </DefaultPage>
  );
}
