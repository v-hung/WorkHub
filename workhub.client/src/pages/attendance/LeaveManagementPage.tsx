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
  Space,
  Tag,
  message,
  Statistic,
  Row,
  Col,
  Tabs,
  Timeline,
  Badge,
} from "antd";

import "./LeaveManagementPage.css";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";

interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  leaveType:
    | "annual"
    | "sick"
    | "personal"
    | "maternity"
    | "paternity"
    | "emergency";
  startDate: string;
  endDate: string;
  totalDays: number;
  reason: string;
  status: "pending" | "approved" | "rejected" | "cancelled";
  appliedDate: string;
  approvedBy?: string;
  approvedDate?: string;
  comments?: string;
}

interface LeaveBalance {
  employeeId: string;
  employeeName: string;
  annualLeave: number;
  sickLeave: number;
  personalLeave: number;
  maternityLeave: number;
  paternityLeave: number;
  emergencyLeave: number;
  usedAnnual: number;
  usedSick: number;
  usedPersonal: number;
  usedMaternity: number;
  usedPaternity: number;
  usedEmergency: number;
}

const mockLeaveRequests: LeaveRequest[] = [
  {
    id: "1",
    employeeId: "emp1",
    employeeName: "John Doe",
    leaveType: "annual",
    startDate: "2024-02-01",
    endDate: "2024-02-05",
    totalDays: 5,
    reason: "Family vacation",
    status: "pending",
    appliedDate: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    employeeId: "emp2",
    employeeName: "Jane Smith",
    leaveType: "sick",
    startDate: "2024-01-20",
    endDate: "2024-01-22",
    totalDays: 3,
    reason: "Medical appointment and recovery",
    status: "approved",
    appliedDate: "2024-01-18T14:30:00Z",
    approvedBy: "Manager",
    approvedDate: "2024-01-19T09:00:00Z",
  },
  {
    id: "3",
    employeeId: "emp3",
    employeeName: "Bob Johnson",
    leaveType: "personal",
    startDate: "2024-01-25",
    endDate: "2024-01-25",
    totalDays: 1,
    reason: "Personal matter",
    status: "rejected",
    appliedDate: "2024-01-22T11:15:00Z",
    approvedBy: "Manager",
    approvedDate: "2024-01-23T16:45:00Z",
    comments: "Insufficient leave balance",
  },
];

const mockLeaveBalances: LeaveBalance[] = [
  {
    employeeId: "emp1",
    employeeName: "John Doe",
    annualLeave: 25,
    sickLeave: 10,
    personalLeave: 5,
    maternityLeave: 0,
    paternityLeave: 0,
    emergencyLeave: 3,
    usedAnnual: 5,
    usedSick: 2,
    usedPersonal: 1,
    usedMaternity: 0,
    usedPaternity: 0,
    usedEmergency: 0,
  },
  {
    employeeId: "emp2",
    employeeName: "Jane Smith",
    annualLeave: 25,
    sickLeave: 10,
    personalLeave: 5,
    maternityLeave: 90,
    paternityLeave: 0,
    emergencyLeave: 3,
    usedAnnual: 8,
    usedSick: 5,
    usedPersonal: 2,
    usedMaternity: 0,
    usedPaternity: 0,
    usedEmergency: 1,
  },
  {
    employeeId: "emp3",
    employeeName: "Bob Johnson",
    annualLeave: 25,
    sickLeave: 10,
    personalLeave: 5,
    maternityLeave: 0,
    paternityLeave: 14,
    emergencyLeave: 3,
    usedAnnual: 12,
    usedSick: 0,
    usedPersonal: 3,
    usedMaternity: 0,
    usedPaternity: 0,
    usedEmergency: 0,
  },
];

export function Component() {
  const [leaveRequests, setLeaveRequests] =
    useState<LeaveRequest[]>(mockLeaveRequests);
  const [leaveBalances, setLeaveBalances] =
    useState<LeaveBalance[]>(mockLeaveBalances);
  const [isRequestModalVisible, setIsRequestModalVisible] = useState(false);
  const [isApprovalModalVisible, setIsApprovalModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<LeaveRequest | null>(
    null
  );
  const [form] = Form.useForm();
  const [approvalForm] = Form.useForm();

  const leaveTypeOptions = [
    { label: "Annual Leave", value: "annual" },
    { label: "Sick Leave", value: "sick" },
    { label: "Personal Leave", value: "personal" },
    { label: "Maternity Leave", value: "maternity" },
    { label: "Paternity Leave", value: "paternity" },
    { label: "Emergency Leave", value: "emergency" },
  ];

  const statusColors = {
    pending: "orange",
    approved: "green",
    rejected: "red",
    cancelled: "gray",
  };

  const statusLabels = {
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    cancelled: "Cancelled",
  };

  const handleSubmitLeaveRequest = (values: any) => {
    const startDate = values.startDate.format("YYYY-MM-DD");
    const endDate = values.endDate.format("YYYY-MM-DD");

    // Calculate total days (simplified - doesn't account for weekends)
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDays =
      Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    const newRequest: LeaveRequest = {
      id: Date.now().toString(),
      employeeId: values.employeeId,
      employeeName: values.employeeName,
      leaveType: values.leaveType,
      startDate,
      endDate,
      totalDays,
      reason: values.reason,
      status: "pending",
      appliedDate: new Date().toISOString(),
    };

    setLeaveRequests([...leaveRequests, newRequest]);
    setIsRequestModalVisible(false);
    form.resetFields();
    message.success("Leave request submitted successfully");
  };

  const handleApproveRejectRequest = (values: any) => {
    if (!selectedRequest) return;

    const updatedRequest: LeaveRequest = {
      ...selectedRequest,
      status: values.action,
      approvedBy: "Manager",
      approvedDate: new Date().toISOString(),
      comments: values.comments,
    };

    setLeaveRequests(
      leaveRequests.map((req) =>
        req.id === selectedRequest.id ? updatedRequest : req
      )
    );

    setIsApprovalModalVisible(false);
    setSelectedRequest(null);
    approvalForm.resetFields();
    message.success(`Leave request ${values.action} successfully`);
  };

  const openApprovalModal = (request: LeaveRequest) => {
    setSelectedRequest(request);
    setIsApprovalModalVisible(true);
  };

  const getLeaveStats = () => {
    const pendingRequests = leaveRequests.filter(
      (req) => req.status === "pending"
    ).length;
    const approvedRequests = leaveRequests.filter(
      (req) => req.status === "approved"
    ).length;
    const rejectedRequests = leaveRequests.filter(
      (req) => req.status === "rejected"
    ).length;
    const totalRequests = leaveRequests.length;

    return {
      pendingRequests,
      approvedRequests,
      rejectedRequests,
      totalRequests,
    };
  };

  const stats = getLeaveStats();

  const getLeaveBalanceForEmployee = (employeeId: string) => {
    return leaveBalances.find((balance) => balance.employeeId === employeeId);
  };

  const tabItems = [
    {
      key: "requests",
      label: "Leave Requests",
      children: (
        <Card title="Leave Requests" className="requests-card">
          <List
            dataSource={leaveRequests}
            renderItem={(request) => (
              <List.Item
                key={request.id}
                actions={[
                  request.status === "pending" && (
                    <Button
                      key="approve"
                      type="primary"
                      size="small"
                      icon={<IIonCheckmarkCircleOutline />}
                      onClick={() => openApprovalModal(request)}
                    >
                      Review
                    </Button>
                  ),
                ].filter(Boolean)}
              >
                <List.Item.Meta
                  title={
                    <Space>
                      {request.employeeName} -{" "}
                      {
                        leaveTypeOptions.find(
                          (opt) => opt.value === request.leaveType
                        )?.label
                      }
                      <Tag color={statusColors[request.status]}>
                        {statusLabels[request.status]}
                      </Tag>
                    </Space>
                  }
                  description={
                    <div className="request-details">
                      <div className="request-info">
                        <span>
                          <strong>Dates:</strong> {request.startDate} to{" "}
                          {request.endDate} ({request.totalDays} days)
                        </span>
                        <span>
                          <strong>Applied:</strong>{" "}
                          {new Date(request.appliedDate).toLocaleDateString()}
                        </span>
                        {request.approvedDate && (
                          <span>
                            <strong>Decision:</strong>{" "}
                            {new Date(
                              request.approvedDate
                            ).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      <p>
                        <strong>Reason:</strong> {request.reason}
                      </p>
                      {request.comments && (
                        <p>
                          <strong>Comments:</strong> {request.comments}
                        </p>
                      )}
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      ),
    },
    {
      key: "balances",
      label: "Leave Balances",
      children: (
        <Card title="Employee Leave Balances" className="balances-card">
          <List
            dataSource={leaveBalances}
            renderItem={(balance) => (
              <List.Item key={balance.employeeId}>
                <List.Item.Meta
                  title={balance.employeeName}
                  description={
                    <div className="balance-details">
                      <div className="balance-row">
                        <div className="balance-item">
                          <span className="balance-label">Annual:</span>
                          <span className="balance-value">
                            {balance.annualLeave - balance.usedAnnual}/
                            {balance.annualLeave}
                          </span>
                          <div className="balance-bar">
                            <div
                              className="balance-fill"
                              style={{
                                width: `${
                                  (balance.usedAnnual / balance.annualLeave) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="balance-item">
                          <span className="balance-label">Sick:</span>
                          <span className="balance-value">
                            {balance.sickLeave - balance.usedSick}/
                            {balance.sickLeave}
                          </span>
                          <div className="balance-bar">
                            <div
                              className="balance-fill"
                              style={{
                                width: `${
                                  (balance.usedSick / balance.sickLeave) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="balance-row">
                        <div className="balance-item">
                          <span className="balance-label">Personal:</span>
                          <span className="balance-value">
                            {balance.personalLeave - balance.usedPersonal}/
                            {balance.personalLeave}
                          </span>
                          <div className="balance-bar">
                            <div
                              className="balance-fill"
                              style={{
                                width: `${
                                  (balance.usedPersonal /
                                    balance.personalLeave) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="balance-item">
                          <span className="balance-label">Emergency:</span>
                          <span className="balance-value">
                            {balance.emergencyLeave - balance.usedEmergency}/
                            {balance.emergencyLeave}
                          </span>
                          <div className="balance-bar">
                            <div
                              className="balance-fill"
                              style={{
                                width: `${
                                  (balance.usedEmergency /
                                    balance.emergencyLeave) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {(balance.maternityLeave > 0 ||
                        balance.paternityLeave > 0) && (
                        <div className="balance-row">
                          {balance.maternityLeave > 0 && (
                            <div className="balance-item">
                              <span className="balance-label">Maternity:</span>
                              <span className="balance-value">
                                {balance.maternityLeave - balance.usedMaternity}
                                /{balance.maternityLeave}
                              </span>
                              <div className="balance-bar">
                                <div
                                  className="balance-fill"
                                  style={{
                                    width: `${
                                      (balance.usedMaternity /
                                        balance.maternityLeave) *
                                      100
                                    }%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          )}
                          {balance.paternityLeave > 0 && (
                            <div className="balance-item">
                              <span className="balance-label">Paternity:</span>
                              <span className="balance-value">
                                {balance.paternityLeave - balance.usedPaternity}
                                /{balance.paternityLeave}
                              </span>
                              <div className="balance-bar">
                                <div
                                  className="balance-fill"
                                  style={{
                                    width: `${
                                      (balance.usedPaternity /
                                        balance.paternityLeave) *
                                      100
                                    }%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      ),
    },
    {
      key: "calendar",
      label: "Leave Calendar",
      children: (
        <Card title="Leave Calendar" className="calendar-card">
          <div className="calendar-placeholder">
            <IIonCalendarOutline className="calendar-icon" />
            <p>Calendar view will show approved leaves and holidays</p>
            <p>
              Integration with calendar component planned for future release
            </p>
          </div>
        </Card>
      ),
    },
  ];

  return (
    <DefaultPage>
      <DefaultHeader>
        <DefaultBreadcrumb />
        <div className="leave-management-header">
          <div className="header-title">
            <IIonDocumentTextOutline className="header-icon" />
            <h1>Leave Management</h1>
          </div>
          <Space>
            <Button
              type="primary"
              icon={<IIonAddCircleOutline />}
              onClick={() => setIsRequestModalVisible(true)}
            >
              New Leave Request
            </Button>
          </Space>
        </div>
      </DefaultHeader>

      <DefaultContent>
        <Row gutter={[16, 16]} className="stats-row">
          <Col xs={24} sm={6}>
            <Card>
              <Statistic
                title="Total Requests"
                value={stats.totalRequests}
                prefix={<IIonDocumentTextOutline />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card>
              <Statistic
                title="Pending"
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
                title="Rejected"
                value={stats.rejectedRequests}
                prefix={<IIonCloseCircleOutline />}
                valueStyle={{ color: "#ef4444" }}
              />
            </Card>
          </Col>
        </Row>

        <Tabs defaultActiveKey="requests" items={tabItems} />

        {/* Leave Request Modal */}
        <Modal
          title="Submit Leave Request"
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
            onFinish={handleSubmitLeaveRequest}
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

            <Form.Item
              name="leaveType"
              label="Leave Type"
              rules={[{ required: true, message: "Please select leave type" }]}
            >
              <Select
                placeholder="Select leave type"
                options={leaveTypeOptions}
              />
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

            <Form.Item
              name="reason"
              label="Reason"
              rules={[
                { required: true, message: "Please enter reason for leave" },
              ]}
            >
              <Input.TextArea
                placeholder="Please provide a detailed reason for your leave request"
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
          title="Review Leave Request"
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
                  <strong>Type:</strong>{" "}
                  {
                    leaveTypeOptions.find(
                      (opt) => opt.value === selectedRequest.leaveType
                    )?.label
                  }
                </p>
                <p>
                  <strong>Dates:</strong> {selectedRequest.startDate} to{" "}
                  {selectedRequest.endDate} ({selectedRequest.totalDays} days)
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

                <Form.Item name="comments" label="Comments (Optional)">
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
