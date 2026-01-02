import React, { useState } from "react";
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
} from "antd";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import "./OvertimePage.css";

interface OvertimeRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  startTime: string;
  endTime: string;
  hours: number;
  rate: number; // multiplier (1.5x, 2x, etc.)
  reason: string;
  status: "pending" | "approved" | "rejected" | "paid";
  requestedBy: string;
  approvedBy?: string;
  approvedDate?: string;
  totalAmount: number;
  notes?: string;
}

interface OvertimeSummary {
  employeeId: string;
  employeeName: string;
  totalHours: number;
  totalAmount: number;
  pendingHours: number;
  approvedHours: number;
  paidHours: number;
  monthlyLimit: number;
  usedThisMonth: number;
}

const mockOvertimeRequests: OvertimeRequest[] = [
  {
    id: "1",
    employeeId: "emp1",
    employeeName: "John Doe",
    date: "2024-01-15",
    startTime: "18:00",
    endTime: "22:00",
    hours: 4,
    rate: 1.5,
    reason: "Project deadline",
    status: "pending",
    requestedBy: "John Doe",
    totalAmount: 240, // 4 hours * 1.5 * hourly rate (assuming $40/hour)
  },
  {
    id: "2",
    employeeId: "emp2",
    employeeName: "Jane Smith",
    date: "2024-01-12",
    startTime: "17:30",
    endTime: "21:30",
    hours: 4,
    rate: 2.0,
    reason: "System maintenance",
    status: "approved",
    requestedBy: "Jane Smith",
    approvedBy: "Manager",
    approvedDate: "2024-01-13T10:00:00Z",
    totalAmount: 320, // 4 hours * 2.0 * hourly rate
  },
  {
    id: "3",
    employeeId: "emp3",
    employeeName: "Bob Johnson",
    date: "2024-01-10",
    startTime: "19:00",
    endTime: "23:00",
    hours: 4,
    rate: 1.5,
    reason: "Client meeting",
    status: "paid",
    requestedBy: "Bob Johnson",
    approvedBy: "Manager",
    approvedDate: "2024-01-11T14:30:00Z",
    totalAmount: 240,
    notes: "Paid on 2024-01-31",
  },
];

const mockOvertimeSummaries: OvertimeSummary[] = [
  {
    employeeId: "emp1",
    employeeName: "John Doe",
    totalHours: 12,
    totalAmount: 720,
    pendingHours: 4,
    approvedHours: 8,
    paidHours: 0,
    monthlyLimit: 20,
    usedThisMonth: 12,
  },
  {
    employeeId: "emp2",
    employeeName: "Jane Smith",
    totalHours: 16,
    totalAmount: 960,
    pendingHours: 0,
    approvedHours: 12,
    paidHours: 4,
    monthlyLimit: 20,
    usedThisMonth: 16,
  },
  {
    employeeId: "emp3",
    employeeName: "Bob Johnson",
    totalHours: 8,
    totalAmount: 480,
    pendingHours: 0,
    approvedHours: 4,
    paidHours: 4,
    monthlyLimit: 20,
    usedThisMonth: 8,
  },
];

export function Component() {
  const [overtimeRequests, setOvertimeRequests] =
    useState<OvertimeRequest[]>(mockOvertimeRequests);
  const [overtimeSummaries, setOvertimeSummaries] = useState<OvertimeSummary[]>(
    mockOvertimeSummaries
  );
  const [isRequestModalVisible, setIsRequestModalVisible] = useState(false);
  const [isApprovalModalVisible, setIsApprovalModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] =
    useState<OvertimeRequest | null>(null);
  const [form] = Form.useForm();
  const [approvalForm] = Form.useForm();

  const rateOptions = [
    { label: "1.5x (Regular Overtime)", value: 1.5 },
    { label: "2.0x (Double Time)", value: 2.0 },
    { label: "2.5x (Holiday/Weekend)", value: 2.5 },
  ];

  const statusColors = {
    pending: "orange",
    approved: "green",
    rejected: "red",
    paid: "blue",
  };

  const statusLabels = {
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    paid: "Paid",
  };

  const handleSubmitOvertimeRequest = (values: any) => {
    const startTime = values.startTime.format("HH:mm");
    const endTime = values.endTime.format("HH:mm");

    // Calculate hours
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

    // Calculate total amount (assuming $40/hour base rate)
    const baseRate = 40;
    const totalAmount = hours * values.rate * baseRate;

    const newRequest: OvertimeRequest = {
      id: Date.now().toString(),
      employeeId: values.employeeId,
      employeeName: values.employeeName,
      date: values.date.format("YYYY-MM-DD"),
      startTime,
      endTime,
      hours: Math.round(hours * 100) / 100,
      rate: values.rate,
      reason: values.reason,
      status: "pending",
      requestedBy: values.employeeName,
      totalAmount: Math.round(totalAmount * 100) / 100,
    };

    setOvertimeRequests([...overtimeRequests, newRequest]);
    setIsRequestModalVisible(false);
    form.resetFields();
    message.success("Overtime request submitted successfully");
  };

  const handleApproveRejectRequest = (values: any) => {
    if (!selectedRequest) return;

    const updatedRequest: OvertimeRequest = {
      ...selectedRequest,
      status: values.action,
      approvedBy: "Manager",
      approvedDate: new Date().toISOString(),
      notes: values.notes,
    };

    setOvertimeRequests(
      overtimeRequests.map((req) =>
        req.id === selectedRequest.id ? updatedRequest : req
      )
    );

    setIsApprovalModalVisible(false);
    setSelectedRequest(null);
    approvalForm.resetFields();
    message.success(`Overtime request ${values.action} successfully`);
  };

  const openApprovalModal = (request: OvertimeRequest) => {
    setSelectedRequest(request);
    setIsApprovalModalVisible(true);
  };

  const getOvertimeStats = () => {
    const pendingRequests = overtimeRequests.filter(
      (req) => req.status === "pending"
    ).length;
    const approvedRequests = overtimeRequests.filter(
      (req) => req.status === "approved"
    ).length;
    const paidRequests = overtimeRequests.filter(
      (req) => req.status === "paid"
    ).length;
    const totalHours = overtimeRequests.reduce(
      (sum, req) => sum + req.hours,
      0
    );
    const totalAmount = overtimeRequests.reduce(
      (sum, req) => sum + req.totalAmount,
      0
    );

    return {
      pendingRequests,
      approvedRequests,
      paidRequests,
      totalHours,
      totalAmount,
    };
  };

  const stats = getOvertimeStats();

  const columns = [
    {
      title: "Employee",
      dataIndex: "employeeName",
      key: "employeeName",
      sorter: (a: OvertimeRequest, b: OvertimeRequest) =>
        a.employeeName.localeCompare(b.employeeName),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a: OvertimeRequest, b: OvertimeRequest) =>
        a.date.localeCompare(b.date),
    },
    {
      title: "Time",
      key: "time",
      render: (record: OvertimeRequest) =>
        `${record.startTime} - ${record.endTime}`,
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
      sorter: (a: OvertimeRequest, b: OvertimeRequest) => a.hours - b.hours,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      render: (rate: number) => `${rate}x`,
    },
    {
      title: "Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount: number) => `$${amount.toFixed(2)}`,
      sorter: (a: OvertimeRequest, b: OvertimeRequest) =>
        a.totalAmount - b.totalAmount,
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
      title: "Action",
      key: "action",
      render: (record: OvertimeRequest) =>
        record.status === "pending" && (
          <Button
            type="primary"
            size="small"
            icon={<IIonCheckmarkCircleOutline />}
            onClick={() => openApprovalModal(record)}
          >
            Review
          </Button>
        ),
    },
  ];

  return (
    <DefaultPage>
      <DefaultHeader>
        <DefaultBreadcrumb />
        <div className="overtime-header">
          <div className="header-title">
            <IIonCalculatorOutline className="header-icon" />
            <h1>Overtime Management</h1>
          </div>
          <Space>
            <Button
              type="primary"
              icon={<IIonAddCircleOutline />}
              onClick={() => setIsRequestModalVisible(true)}
            >
              Request Overtime
            </Button>
          </Space>
        </div>
      </DefaultHeader>

      <DefaultContent>
        <Row gutter={[16, 16]} className="stats-row">
          <Col xs={24} sm={6}>
            <Card>
              <Statistic
                title="Pending Requests"
                value={stats.pendingRequests}
                prefix={<IIonTimeOutline />}
                valueStyle={{ color: "#f59e0b" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card>
              <Statistic
                title="Approved"
                value={stats.approvedRequests}
                prefix={<IIonCheckmarkCircleOutline />}
                valueStyle={{ color: "#10b981" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card>
              <Statistic
                title="Total Hours"
                value={stats.totalHours}
                prefix={<IIonCalculatorOutline />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card>
              <Statistic
                title="Total Amount"
                value={`$${stats.totalAmount.toFixed(2)}`}
                prefix={<IIonDocumentTextOutline />}
                valueStyle={{ color: "#3b82f6" }}
              />
            </Card>
          </Col>
        </Row>

        <Card title="Overtime Requests" className="requests-card">
          <Table
            columns={columns}
            dataSource={overtimeRequests}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            scroll={{ x: 800 }}
          />
        </Card>

        <Card title="Employee Overtime Summary" className="summary-card">
          <List
            dataSource={overtimeSummaries}
            renderItem={(summary) => (
              <List.Item key={summary.employeeId}>
                <List.Item.Meta
                  title={summary.employeeName}
                  description={
                    <div className="summary-details">
                      <div className="summary-stats">
                        <span>Total Hours: {summary.totalHours}h</span>
                        <span>
                          Total Amount: ${summary.totalAmount.toFixed(2)}
                        </span>
                        <span>
                          Monthly Limit: {summary.usedThisMonth}/
                          {summary.monthlyLimit}h
                        </span>
                      </div>
                      <div className="summary-breakdown">
                        <div className="breakdown-item">
                          <span className="breakdown-label">Pending:</span>
                          <span className="breakdown-value">
                            {summary.pendingHours}h
                          </span>
                        </div>
                        <div className="breakdown-item">
                          <span className="breakdown-label">Approved:</span>
                          <span className="breakdown-value">
                            {summary.approvedHours}h
                          </span>
                        </div>
                        <div className="breakdown-item">
                          <span className="breakdown-label">Paid:</span>
                          <span className="breakdown-value">
                            {summary.paidHours}h
                          </span>
                        </div>
                      </div>
                      <Progress
                        percent={Math.round(
                          (summary.usedThisMonth / summary.monthlyLimit) * 100
                        )}
                        size="small"
                        status={
                          summary.usedThisMonth / summary.monthlyLimit >= 0.9
                            ? "exception"
                            : "normal"
                        }
                        strokeColor={
                          summary.usedThisMonth / summary.monthlyLimit >= 0.9
                            ? "#ef4444"
                            : "#10b981"
                        }
                      />
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>

        {/* Overtime Request Modal */}
        <Modal
          title="Request Overtime"
          open={isRequestModalVisible}
          onCancel={() => {
            setIsRequestModalVisible(false);
            form.resetFields();
          }}
          footer={null}
          width={600}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmitOvertimeRequest}
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
                  name="rate"
                  label="Overtime Rate"
                  rules={[
                    { required: true, message: "Please select overtime rate" },
                  ]}
                >
                  <Select placeholder="Select rate" options={rateOptions} />
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

            <Form.Item
              name="reason"
              label="Reason"
              rules={[
                { required: true, message: "Please enter reason for overtime" },
              ]}
            >
              <Input.TextArea
                placeholder="Please provide a detailed reason for the overtime request"
                rows={4}
              />
            </Form.Item>

            <Form.Item className="modal-footer">
              <Space>
                <Button
                  onClick={() => {
                    setIsRequestModalVisible(false);
                    form.resetFields();
                  }}
                >
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit Request
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>

        {/* Approval Modal */}
        <Modal
          title="Review Overtime Request"
          open={isApprovalModalVisible}
          onCancel={() => {
            setIsApprovalModalVisible(false);
            setSelectedRequest(null);
            approvalForm.resetFields();
          }}
          footer={null}
          width={500}
        >
          {selectedRequest && (
            <div className="request-review">
              <div className="request-summary">
                <h4>{selectedRequest.employeeName}</h4>
                <p>
                  <strong>Date:</strong> {selectedRequest.date}
                </p>
                <p>
                  <strong>Time:</strong> {selectedRequest.startTime} -{" "}
                  {selectedRequest.endTime}
                </p>
                <p>
                  <strong>Hours:</strong> {selectedRequest.hours}h at{" "}
                  {selectedRequest.rate}x rate
                </p>
                <p>
                  <strong>Amount:</strong> $
                  {selectedRequest.totalAmount.toFixed(2)}
                </p>
                <p>
                  <strong>Reason:</strong> {selectedRequest.reason}
                </p>
              </div>

              <Form
                form={approvalForm}
                layout="vertical"
                onFinish={handleApproveRejectRequest}
              >
                <Form.Item
                  name="action"
                  label="Decision"
                  rules={[
                    { required: true, message: "Please select an action" },
                  ]}
                >
                  <Select placeholder="Select decision">
                    <Select.Option value="approved">Approve</Select.Option>
                    <Select.Option value="rejected">Reject</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item name="notes" label="Notes (Optional)">
                  <Input.TextArea
                    placeholder="Add any comments or notes"
                    rows={3}
                  />
                </Form.Item>

                <Form.Item className="modal-footer">
                  <Space>
                    <Button
                      onClick={() => {
                        setIsApprovalModalVisible(false);
                        setSelectedRequest(null);
                        approvalForm.resetFields();
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                      Submit Decision
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </div>
          )}
        </Modal>
      </DefaultContent>
    </DefaultPage>
  );
}
