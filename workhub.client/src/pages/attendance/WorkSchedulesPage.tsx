import React, { useState, useEffect } from "react";
import {
  Card,
  List,
  Button,
  Modal,
  Form,
  Input,
  Select,
  TimePicker,
  DatePicker,
  Space,
  Tag,
  message,
  Statistic,
  Row,
  Col,
  Calendar,
  Badge,
} from "antd";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import "./WorkSchedulesPage.css";

interface WorkSchedule {
  id: string;
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  breakStartTime: string;
  breakEndTime: string;
  workingDays: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface EmployeeSchedule {
  id: string;
  employeeId: string;
  employeeName: string;
  scheduleId: string;
  scheduleName: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

const mockWorkSchedules: WorkSchedule[] = [
  {
    id: "1",
    name: "Standard Office Hours",
    description: "Monday to Friday, 9 AM to 6 PM with 1 hour lunch break",
    startTime: "09:00",
    endTime: "18:00",
    breakStartTime: "12:00",
    breakEndTime: "13:00",
    workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    isActive: true,
    createdAt: "2024-01-15T08:00:00Z",
    updatedAt: "2024-01-15T08:00:00Z",
  },
  {
    id: "2",
    name: "Weekend Shift",
    description: "Saturday and Sunday, 10 AM to 4 PM",
    startTime: "10:00",
    endTime: "16:00",
    breakStartTime: "13:00",
    breakEndTime: "14:00",
    workingDays: ["saturday", "sunday"],
    isActive: true,
    createdAt: "2024-01-20T08:00:00Z",
    updatedAt: "2024-01-20T08:00:00Z",
  },
  {
    id: "3",
    name: "Night Shift",
    description: "Monday to Friday, 10 PM to 6 AM",
    startTime: "22:00",
    endTime: "06:00",
    breakStartTime: "02:00",
    breakEndTime: "03:00",
    workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    isActive: false,
    createdAt: "2024-02-01T08:00:00Z",
    updatedAt: "2024-02-01T08:00:00Z",
  },
];

const mockEmployeeSchedules: EmployeeSchedule[] = [
  {
    id: "1",
    employeeId: "emp1",
    employeeName: "John Doe",
    scheduleId: "1",
    scheduleName: "Standard Office Hours",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    isActive: true,
  },
  {
    id: "2",
    employeeId: "emp2",
    employeeName: "Jane Smith",
    scheduleId: "1",
    scheduleName: "Standard Office Hours",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    isActive: true,
  },
  {
    id: "3",
    employeeId: "emp3",
    employeeName: "Bob Johnson",
    scheduleId: "2",
    scheduleName: "Weekend Shift",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    isActive: true,
  },
];

export function Component() {
  const [schedules, setSchedules] = useState<WorkSchedule[]>(mockWorkSchedules);
  const [employeeSchedules, setEmployeeSchedules] = useState<
    EmployeeSchedule[]
  >(mockEmployeeSchedules);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAssignModalVisible, setIsAssignModalVisible] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<WorkSchedule | null>(
    null
  );
  const [form] = Form.useForm();
  const [assignForm] = Form.useForm();

  const workingDaysOptions = [
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
    { label: "Saturday", value: "saturday" },
    { label: "Sunday", value: "sunday" },
  ];

  const handleCreateSchedule = (values: any) => {
    const newSchedule: WorkSchedule = {
      id: Date.now().toString(),
      name: values.name,
      description: values.description,
      startTime: values.startTime.format("HH:mm"),
      endTime: values.endTime.format("HH:mm"),
      breakStartTime: values.breakStartTime.format("HH:mm"),
      breakEndTime: values.breakEndTime.format("HH:mm"),
      workingDays: values.workingDays,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setSchedules([...schedules, newSchedule]);
    setIsCreateModalVisible(false);
    form.resetFields();
    message.success("Work schedule created successfully");
  };

  const handleEditSchedule = (values: any) => {
    if (!selectedSchedule) return;

    const updatedSchedule: WorkSchedule = {
      ...selectedSchedule,
      name: values.name,
      description: values.description,
      startTime: values.startTime.format("HH:mm"),
      endTime: values.endTime.format("HH:mm"),
      breakStartTime: values.breakStartTime.format("HH:mm"),
      breakEndTime: values.breakEndTime.format("HH:mm"),
      workingDays: values.workingDays,
      updatedAt: new Date().toISOString(),
    };

    setSchedules(
      schedules.map((s) => (s.id === selectedSchedule.id ? updatedSchedule : s))
    );
    setIsEditModalVisible(false);
    setSelectedSchedule(null);
    form.resetFields();
    message.success("Work schedule updated successfully");
  };

  const handleDeleteSchedule = (scheduleId: string) => {
    Modal.confirm({
      title: "Delete Work Schedule",
      content:
        "Are you sure you want to delete this work schedule? This action cannot be undone.",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        setSchedules(schedules.filter((s) => s.id !== scheduleId));
        message.success("Work schedule deleted successfully");
      },
    });
  };

  const handleAssignSchedule = (values: any) => {
    const newAssignment: EmployeeSchedule = {
      id: Date.now().toString(),
      employeeId: values.employeeId,
      employeeName: values.employeeName,
      scheduleId: values.scheduleId,
      scheduleName:
        schedules.find((s) => s.id === values.scheduleId)?.name || "",
      startDate: values.startDate.format("YYYY-MM-DD"),
      endDate: values.endDate.format("YYYY-MM-DD"),
      isActive: true,
    };

    setEmployeeSchedules([...employeeSchedules, newAssignment]);
    setIsAssignModalVisible(false);
    assignForm.resetFields();
    message.success("Schedule assigned successfully");
  };

  const openEditModal = (schedule: WorkSchedule) => {
    setSelectedSchedule(schedule);
    form.setFieldsValue({
      name: schedule.name,
      description: schedule.description,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      breakStartTime: schedule.breakStartTime,
      breakEndTime: schedule.breakEndTime,
      workingDays: schedule.workingDays,
    });
    setIsEditModalVisible(true);
  };

  const getScheduleStats = () => {
    const activeSchedules = schedules.filter((s) => s.isActive).length;
    const totalEmployees = employeeSchedules.length;
    const uniqueSchedules = new Set(
      employeeSchedules.map((es) => es.scheduleId)
    ).size;

    return { activeSchedules, totalEmployees, uniqueSchedules };
  };

  const stats = getScheduleStats();

  return (
    <DefaultPage>
      <DefaultHeader>
        <DefaultBreadcrumb />
        <div className="work-schedules-header">
          <div className="header-title">
            <IIonTimeOutline className="header-icon" />
            <h1>Work Schedules</h1>
          </div>
          <Space>
            <Button
              type="primary"
              icon={<IIonAddCircleOutline />}
              onClick={() => setIsCreateModalVisible(true)}
            >
              Create Schedule
            </Button>
            <Button
              icon={<IIonCalendarOutline />}
              onClick={() => setIsAssignModalVisible(true)}
            >
              Assign Schedule
            </Button>
          </Space>
        </div>
      </DefaultHeader>

      <DefaultContent>
        <Row gutter={[16, 16]} className="stats-row">
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Active Schedules"
                value={stats.activeSchedules}
                prefix={<IIonTimeOutline />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Total Employees Assigned"
                value={stats.totalEmployees}
                prefix={<IIonCalendarOutline />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Unique Schedules Used"
                value={stats.uniqueSchedules}
                prefix={<IIonEyeOutline />}
              />
            </Card>
          </Col>
        </Row>

        <Card title="Work Schedules" className="schedules-card">
          <List
            dataSource={schedules}
            renderItem={(schedule) => (
              <List.Item
                key={schedule.id}
                actions={[
                  <Button
                    key="edit"
                    type="text"
                    icon={<IIonPencilOutline />}
                    onClick={() => openEditModal(schedule)}
                  >
                    Edit
                  </Button>,
                  <Button
                    key="delete"
                    type="text"
                    danger
                    icon={<IIonTrashOutline />}
                    onClick={() => handleDeleteSchedule(schedule.id)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={
                    <Space>
                      {schedule.name}
                      <Tag color={schedule.isActive ? "green" : "red"}>
                        {schedule.isActive ? "Active" : "Inactive"}
                      </Tag>
                    </Space>
                  }
                  description={
                    <div>
                      <p>{schedule.description}</p>
                      <div className="schedule-details">
                        <span>
                          <strong>Hours:</strong> {schedule.startTime} -{" "}
                          {schedule.endTime}
                        </span>
                        <span>
                          <strong>Break:</strong> {schedule.breakStartTime} -{" "}
                          {schedule.breakEndTime}
                        </span>
                        <span>
                          <strong>Days:</strong>{" "}
                          {schedule.workingDays
                            .map(
                              (day) =>
                                workingDaysOptions.find(
                                  (opt) => opt.value === day
                                )?.label
                            )
                            .join(", ")}
                        </span>
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>

        <Card
          title="Employee Schedule Assignments"
          className="assignments-card"
        >
          <List
            dataSource={employeeSchedules}
            renderItem={(assignment) => (
              <List.Item key={assignment.id}>
                <List.Item.Meta
                  title={`${assignment.employeeName} - ${assignment.scheduleName}`}
                  description={
                    <div>
                      <span>
                        <strong>Period:</strong> {assignment.startDate} to{" "}
                        {assignment.endDate}
                      </span>
                      <Tag
                        color={assignment.isActive ? "green" : "red"}
                        style={{ marginLeft: 8 }}
                      >
                        {assignment.isActive ? "Active" : "Inactive"}
                      </Tag>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>

        {/* Create Schedule Modal */}
        <Modal
          title="Create Work Schedule"
          open={isCreateModalVisible}
          onCancel={() => {
            setIsCreateModalVisible(false);
            form.resetFields();
          }}
          footer={null}
          width={600}
        >
          <Form form={form} layout="vertical" onFinish={handleCreateSchedule}>
            <Form.Item
              name="name"
              label="Schedule Name"
              rules={[
                { required: true, message: "Please enter schedule name" },
              ]}
            >
              <Input placeholder="Enter schedule name" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Please enter description" }]}
            >
              <Input.TextArea
                placeholder="Enter schedule description"
                rows={3}
              />
            </Form.Item>

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
                  name="breakStartTime"
                  label="Break Start Time"
                  rules={[
                    {
                      required: true,
                      message: "Please select break start time",
                    },
                  ]}
                >
                  <TimePicker format="HH:mm" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="breakEndTime"
                  label="Break End Time"
                  rules={[
                    { required: true, message: "Please select break end time" },
                  ]}
                >
                  <TimePicker format="HH:mm" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="workingDays"
              label="Working Days"
              rules={[
                { required: true, message: "Please select working days" },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Select working days"
                options={workingDaysOptions}
              />
            </Form.Item>

            <Form.Item className="modal-footer">
              <Space>
                <Button
                  onClick={() => {
                    setIsCreateModalVisible(false);
                    form.resetFields();
                  }}
                >
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Create Schedule
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>

        {/* Edit Schedule Modal */}
        <Modal
          title="Edit Work Schedule"
          open={isEditModalVisible}
          onCancel={() => {
            setIsEditModalVisible(false);
            setSelectedSchedule(null);
            form.resetFields();
          }}
          footer={null}
          width={600}
        >
          <Form form={form} layout="vertical" onFinish={handleEditSchedule}>
            <Form.Item
              name="name"
              label="Schedule Name"
              rules={[
                { required: true, message: "Please enter schedule name" },
              ]}
            >
              <Input placeholder="Enter schedule name" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Please enter description" }]}
            >
              <Input.TextArea
                placeholder="Enter schedule description"
                rows={3}
              />
            </Form.Item>

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
                  name="breakStartTime"
                  label="Break Start Time"
                  rules={[
                    {
                      required: true,
                      message: "Please select break start time",
                    },
                  ]}
                >
                  <TimePicker format="HH:mm" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="breakEndTime"
                  label="Break End Time"
                  rules={[
                    { required: true, message: "Please select break end time" },
                  ]}
                >
                  <TimePicker format="HH:mm" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="workingDays"
              label="Working Days"
              rules={[
                { required: true, message: "Please select working days" },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Select working days"
                options={workingDaysOptions}
              />
            </Form.Item>

            <Form.Item className="modal-footer">
              <Space>
                <Button
                  onClick={() => {
                    setIsEditModalVisible(false);
                    setSelectedSchedule(null);
                    form.resetFields();
                  }}
                >
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Update Schedule
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>

        {/* Assign Schedule Modal */}
        <Modal
          title="Assign Schedule to Employee"
          open={isAssignModalVisible}
          onCancel={() => {
            setIsAssignModalVisible(false);
            assignForm.resetFields();
          }}
          footer={null}
          width={500}
        >
          <Form
            form={assignForm}
            layout="vertical"
            onFinish={handleAssignSchedule}
          >
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

            <Form.Item
              name="scheduleId"
              label="Work Schedule"
              rules={[{ required: true, message: "Please select a schedule" }]}
            >
              <Select placeholder="Select a work schedule">
                {schedules
                  .filter((s) => s.isActive)
                  .map((schedule) => (
                    <Select.Option key={schedule.id} value={schedule.id}>
                      {schedule.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="startDate"
                  label="Start Date"
                  rules={[
                    { required: true, message: "Please select start date" },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="endDate"
                  label="End Date"
                  rules={[
                    { required: true, message: "Please select end date" },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item className="modal-footer">
              <Space>
                <Button
                  onClick={() => {
                    setIsAssignModalVisible(false);
                    assignForm.resetFields();
                  }}
                >
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Assign Schedule
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </DefaultContent>
    </DefaultPage>
  );
}
