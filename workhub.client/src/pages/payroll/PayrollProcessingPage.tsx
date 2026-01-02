import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Statistic,
  Button,
  Table,
  Tag,
  Modal,
  Form,
  Select,
  DatePicker,
  Space,
  message,
  Progress,
  Avatar,
} from "antd";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { useTranslation } from "react-i18next";
import "./PayrollProcessingPage.css";

const { Option } = Select;
const { RangePicker } = DatePicker;

interface PayrollProcess {
  id: string;
  period: string;
  status: "pending" | "processing" | "completed" | "failed";
  totalEmployees: number;
  processedEmployees: number;
  totalAmount: number;
  createdDate: string;
  completedDate?: string;
}

interface EmployeePayroll {
  id: string;
  employeeName: string;
  position: string;
  department: string;
  baseSalary: number;
  deductions: number;
  netSalary: number;
  status: "pending" | "processed" | "paid";
}

export function Component() {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState<PayrollProcess | null>(
    null
  );
  const [form] = Form.useForm();

  // Mock data
  const [payrollProcesses] = useState<PayrollProcess[]>([
    {
      id: "1",
      period: "December 2024",
      status: "completed",
      totalEmployees: 150,
      processedEmployees: 150,
      totalAmount: 1250000,
      createdDate: "2024-12-01",
      completedDate: "2024-12-05",
    },
    {
      id: "2",
      period: "January 2025",
      status: "processing",
      totalEmployees: 152,
      processedEmployees: 98,
      totalAmount: 1280000,
      createdDate: "2025-01-01",
    },
    {
      id: "3",
      period: "November 2024",
      status: "completed",
      totalEmployees: 148,
      processedEmployees: 148,
      totalAmount: 1220000,
      createdDate: "2024-11-01",
      completedDate: "2024-11-05",
    },
  ]);

  const [employeePayrolls] = useState<EmployeePayroll[]>([
    {
      id: "1",
      employeeName: "John Doe",
      position: "Software Developer",
      department: "IT",
      baseSalary: 50000,
      deductions: 2500,
      netSalary: 47500,
      status: "processed",
    },
    {
      id: "2",
      employeeName: "Jane Smith",
      position: "Senior Developer",
      department: "IT",
      baseSalary: 75000,
      deductions: 3750,
      netSalary: 71250,
      status: "processed",
    },
    {
      id: "3",
      employeeName: "Bob Johnson",
      position: "Project Manager",
      department: "Management",
      baseSalary: 80000,
      deductions: 4000,
      netSalary: 76000,
      status: "pending",
    },
  ]);

  const statistics = [
    {
      title: t("payroll_processing.total_processes"),
      value: payrollProcesses.length,
      icon: <IIonDocumentTextOutline />,
      color: "#1890ff",
    },
    {
      title: t("payroll_processing.completed_processes"),
      value: payrollProcesses.filter((p) => p.status === "completed").length,
      icon: <IIonCheckmarkCircleOutline />,
      color: "#52c41a",
    },
    {
      title: t("payroll_processing.processing_processes"),
      value: payrollProcesses.filter((p) => p.status === "processing").length,
      icon: <IIonTimeOutline />,
      color: "#faad14",
    },
    {
      title: t("payroll_processing.total_payroll_amount"),
      value: payrollProcesses.reduce((sum, p) => sum + p.totalAmount, 0),
      prefix: "$",
      icon: <IIonCalculatorOutline />,
      color: "#f5222d",
    },
  ];

  const handleCreateProcess = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      message.success(t("payroll_processing.create_success"));
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleViewDetails = (process: PayrollProcess) => {
    setSelectedProcess(process);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "green";
      case "processing":
        return "orange";
      case "pending":
        return "blue";
      case "failed":
        return "red";
      default:
        return "default";
    }
  };

  const getStatusText = (status: string) => {
    return t(`payroll_processing.status.${status}`);
  };

  const processColumns = [
    {
      title: t("payroll_processing.period"),
      dataIndex: "period",
      key: "period",
    },
    {
      title: t("payroll_processing.status"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>{getStatusText(status)}</Tag>
      ),
    },
    {
      title: t("payroll_processing.employees"),
      key: "employees",
      render: (record: PayrollProcess) => (
        <div>
          <div>
            {record.processedEmployees}/{record.totalEmployees}
          </div>
          {record.status === "processing" && (
            <Progress
              percent={Math.round(
                (record.processedEmployees / record.totalEmployees) * 100
              )}
              size="small"
              status="active"
            />
          )}
        </div>
      ),
    },
    {
      title: t("payroll_processing.total_amount"),
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount: number) => `$${amount.toLocaleString()}`,
    },
    {
      title: t("payroll_processing.created_date"),
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: t("common.actions"),
      key: "actions",
      render: (record: PayrollProcess) => (
        <Space>
          <Button type="link" onClick={() => handleViewDetails(record)}>
            {t("common.view")}
          </Button>
          {record.status === "pending" && (
            <Button type="link" icon={<IIonPlayOutline />}>
              {t("payroll_processing.start_process")}
            </Button>
          )}
        </Space>
      ),
    },
  ];

  const employeeColumns = [
    {
      title: t("payroll_processing.employee"),
      key: "employee",
      render: (record: EmployeePayroll) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar>{record.employeeName.charAt(0)}</Avatar>
          <div>
            <div style={{ fontWeight: "500" }}>{record.employeeName}</div>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>
              {record.position} • {record.department}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t("payroll_processing.base_salary"),
      dataIndex: "baseSalary",
      key: "baseSalary",
      render: (amount: number) => `$${amount.toLocaleString()}`,
    },
    {
      title: t("payroll_processing.deductions"),
      dataIndex: "deductions",
      key: "deductions",
      render: (amount: number) => `$${amount.toLocaleString()}`,
    },
    {
      title: t("payroll_processing.net_salary"),
      dataIndex: "netSalary",
      key: "netSalary",
      render: (amount: number) => `$${amount.toLocaleString()}`,
    },
    {
      title: t("payroll_processing.status"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>{getStatusText(status)}</Tag>
      ),
    },
  ];

  return (
    <DefaultPage>
      <DefaultHeader title={t("menus.payroll_processing")}>
        <Button
          type="primary"
          icon={<IIonPlayOutline />}
          onClick={handleCreateProcess}
        >
          {t("payroll_processing.create_process")}
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: t("menus.home"), href: "/" },
          { title: t("menus.payroll") },
          { title: t("menus.payroll_processing") },
        ]}
      />

      <DefaultContent>
        <div className="payroll-processing-container">
          {/* Statistics Row */}
          <Row gutter={[16, 16]} className="stats-row">
            {statistics.map((stat, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card className="stat-card">
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    prefix={stat.prefix}
                    valueStyle={{ color: stat.color }}
                  />
                  <div className="stat-icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Payroll Processes Table */}
          <Card
            title={t("payroll_processing.payroll_processes")}
            className="processes-table"
          >
            <Table
              columns={processColumns}
              dataSource={payrollProcesses}
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />
          </Card>

          {/* Employee Payroll Details */}
          {selectedProcess && (
            <Card
              title={`${t("payroll_processing.employee_details")} - ${
                selectedProcess.period
              }`}
              className="employee-details"
            >
              <Table
                columns={employeeColumns}
                dataSource={employeePayrolls}
                rowKey="id"
                pagination={{ pageSize: 10 }}
              />
            </Card>
          )}

          {/* Create Process Modal */}
          <Modal
            title={t("payroll_processing.create_process")}
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            width={500}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                name="period"
                label={t("payroll_processing.payroll_period")}
                rules={[
                  {
                    required: true,
                    message: t("payroll_processing.period_required"),
                  },
                ]}
              >
                <Select placeholder={t("payroll_processing.select_period")}>
                  <Option value="January 2025">January 2025</Option>
                  <Option value="February 2025">February 2025</Option>
                  <Option value="March 2025">March 2025</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="dateRange"
                label={t("payroll_processing.processing_dates")}
                rules={[
                  {
                    required: true,
                    message: t("payroll_processing.dates_required"),
                  },
                ]}
              >
                <RangePicker style={{ width: "100%" }} />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
