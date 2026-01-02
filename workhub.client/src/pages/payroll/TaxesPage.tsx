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
  Input,
  Select,
  InputNumber,
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
import "./TaxesPage.css";

const { Option } = Select;

interface TaxRule {
  id: string;
  name: string;
  type: "income" | "social" | "health" | "unemployment";
  rate: number;
  minAmount: number;
  maxAmount: number;
  status: "active" | "inactive";
}

interface TaxCalculation {
  id: string;
  employeeName: string;
  grossSalary: number;
  incomeTax: number;
  socialTax: number;
  healthTax: number;
  totalTax: number;
  netSalary: number;
  period: string;
}

export function Component() {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCalculation, setSelectedCalculation] =
    useState<TaxCalculation | null>(null);
  const [form] = Form.useForm();

  // Mock data
  const [taxRules] = useState<TaxRule[]>([
    {
      id: "1",
      name: "Federal Income Tax - Bracket 1",
      type: "income",
      rate: 10,
      minAmount: 0,
      maxAmount: 11000,
      status: "active",
    },
    {
      id: "2",
      name: "Federal Income Tax - Bracket 2",
      type: "income",
      rate: 12,
      minAmount: 11001,
      maxAmount: 44725,
      status: "active",
    },
    {
      id: "3",
      name: "Social Security Tax",
      type: "social",
      rate: 6.2,
      minAmount: 0,
      maxAmount: 168600,
      status: "active",
    },
    {
      id: "4",
      name: "Medicare Tax",
      type: "health",
      rate: 1.45,
      minAmount: 0,
      maxAmount: 999999,
      status: "active",
    },
  ]);

  const [taxCalculations] = useState<TaxCalculation[]>([
    {
      id: "1",
      employeeName: "John Doe",
      grossSalary: 50000,
      incomeTax: 5500,
      socialTax: 3100,
      healthTax: 725,
      totalTax: 9325,
      netSalary: 40675,
      period: "December 2024",
    },
    {
      id: "2",
      employeeName: "Jane Smith",
      grossSalary: 75000,
      incomeTax: 9750,
      socialTax: 4650,
      healthTax: 1087,
      totalTax: 15487,
      netSalary: 59513,
      period: "December 2024",
    },
    {
      id: "3",
      employeeName: "Bob Johnson",
      grossSalary: 80000,
      incomeTax: 10800,
      socialTax: 4960,
      healthTax: 1160,
      totalTax: 16920,
      netSalary: 63080,
      period: "December 2024",
    },
  ]);

  const statistics = [
    {
      title: t("taxes.total_tax_rules"),
      value: taxRules.length,
      icon: <IIonDocumentTextOutline />,
      color: "#1890ff",
    },
    {
      title: t("taxes.total_tax_calculations"),
      value: taxCalculations.length,
      icon: <IIonCalculatorOutline />,
      color: "#52c41a",
    },
    {
      title: t("taxes.total_tax_amount"),
      value: taxCalculations.reduce((sum, calc) => sum + calc.totalTax, 0),
      prefix: "$",
      icon: <IIonReceiptOutline />,
      color: "#faad14",
    },
    {
      title: t("taxes.average_tax_rate"),
      value: Math.round(
        (taxCalculations.reduce((sum, calc) => sum + calc.totalTax, 0) /
          taxCalculations.reduce((sum, calc) => sum + calc.grossSalary, 0)) *
          100
      ),
      suffix: "%",
      icon: <IIonTrendingUpOutline />,
      color: "#f5222d",
    },
  ];

  const handleCreateRule = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      message.success(t("taxes.create_success"));
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleViewCalculation = (calculation: TaxCalculation) => {
    setSelectedCalculation(calculation);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "income":
        return "blue";
      case "social":
        return "green";
      case "health":
        return "orange";
      case "unemployment":
        return "purple";
      default:
        return "default";
    }
  };

  const getTypeText = (type: string) => {
    return t(`taxes.types.${type}`);
  };

  const taxRulesColumns = [
    {
      title: t("taxes.rule_name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("taxes.type"),
      dataIndex: "type",
      key: "type",
      render: (type: string) => (
        <Tag color={getTypeColor(type)}>{getTypeText(type)}</Tag>
      ),
    },
    {
      title: t("taxes.rate"),
      dataIndex: "rate",
      key: "rate",
      render: (rate: number) => `${rate}%`,
    },
    {
      title: t("taxes.amount_range"),
      key: "range",
      render: (record: TaxRule) => (
        <span>
          ${record.minAmount.toLocaleString()} - $
          {record.maxAmount.toLocaleString()}
        </span>
      ),
    },
    {
      title: t("taxes.status"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "default"}>{status}</Tag>
      ),
    },
    {
      title: t("common.actions"),
      key: "actions",
      render: () => (
        <Space>
          <Button type="link">{t("common.edit")}</Button>
          <Button type="link">{t("common.delete")}</Button>
        </Space>
      ),
    },
  ];

  const taxCalculationsColumns = [
    {
      title: t("taxes.employee"),
      key: "employee",
      render: (record: TaxCalculation) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar>{record.employeeName.charAt(0)}</Avatar>
          <span>{record.employeeName}</span>
        </div>
      ),
    },
    {
      title: t("taxes.gross_salary"),
      dataIndex: "grossSalary",
      key: "grossSalary",
      render: (amount: number) => `$${amount.toLocaleString()}`,
    },
    {
      title: t("taxes.total_tax"),
      dataIndex: "totalTax",
      key: "totalTax",
      render: (amount: number) => `$${amount.toLocaleString()}`,
    },
    {
      title: t("taxes.net_salary"),
      dataIndex: "netSalary",
      key: "netSalary",
      render: (amount: number) => `$${amount.toLocaleString()}`,
    },
    {
      title: t("taxes.effective_rate"),
      key: "effectiveRate",
      render: (record: TaxCalculation) => (
        <span>{Math.round((record.totalTax / record.grossSalary) * 100)}%</span>
      ),
    },
    {
      title: t("taxes.period"),
      dataIndex: "period",
      key: "period",
    },
    {
      title: t("common.actions"),
      key: "actions",
      render: (record: TaxCalculation) => (
        <Space>
          <Button type="link" onClick={() => handleViewCalculation(record)}>
            {t("common.view")}
          </Button>
        </Space>
      ),
    },
  ];

  const breadcrumbItems = [
    { title: t("menus.home"), href: "/" },
    { title: t("menus.payroll") },
    { title: t("menus.taxes") },
  ];

  return (
    <DefaultPage>
      <DefaultHeader title={t("menus.taxes")}>
        <Button
          type="primary"
          icon={<IIonAddCircleOutline />}
          onClick={handleCreateRule}
        >
          {t("taxes.create_rule")}
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: t("menus.home"), href: "/" },
          { title: t("menus.performance") },
          { title: t("menus.feedback") },
        ]}
      />

      <DefaultContent>
        <div className="taxes-container">
          {/* Statistics Row */}
          <Row gutter={[16, 16]} className="stats-row">
            {statistics.map((stat, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card className="stat-card">
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    valueStyle={{ color: stat.color }}
                  />
                  <div className="stat-icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Tax Rules Table */}
          <Card title={t("taxes.tax_rules")} className="tax-rules-table">
            <Table
              columns={taxRulesColumns}
              dataSource={taxRules}
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />
          </Card>

          {/* Tax Calculations Table */}
          <Card
            title={t("taxes.tax_calculations")}
            className="tax-calculations-table"
          >
            <Table
              columns={taxCalculationsColumns}
              dataSource={taxCalculations}
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />
          </Card>

          {/* Tax Calculation Details Modal */}
          {selectedCalculation && (
            <Modal
              title={`${t("taxes.tax_details")} - ${
                selectedCalculation.employeeName
              }`}
              open={!!selectedCalculation}
              onCancel={() => setSelectedCalculation(null)}
              footer={null}
              width={600}
            >
              <div className="tax-details">
                <div className="detail-row">
                  <span className="label">{t("taxes.gross_salary")}:</span>
                  <span className="value">
                    ${selectedCalculation.grossSalary.toLocaleString()}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="label">{t("taxes.income_tax")}:</span>
                  <span className="value">
                    ${selectedCalculation.incomeTax.toLocaleString()}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="label">{t("taxes.social_tax")}:</span>
                  <span className="value">
                    ${selectedCalculation.socialTax.toLocaleString()}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="label">{t("taxes.health_tax")}:</span>
                  <span className="value">
                    ${selectedCalculation.healthTax.toLocaleString()}
                  </span>
                </div>
                <div className="detail-row total">
                  <span className="label">{t("taxes.total_tax")}:</span>
                  <span className="value">
                    ${selectedCalculation.totalTax.toLocaleString()}
                  </span>
                </div>
                <div className="detail-row net">
                  <span className="label">{t("taxes.net_salary")}:</span>
                  <span className="value">
                    ${selectedCalculation.netSalary.toLocaleString()}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="label">{t("taxes.effective_rate")}:</span>
                  <span className="value">
                    {Math.round(
                      (selectedCalculation.totalTax /
                        selectedCalculation.grossSalary) *
                        100
                    )}
                    %
                  </span>
                </div>
              </div>
            </Modal>
          )}

          {/* Create Tax Rule Modal */}
          <Modal
            title={t("taxes.create_rule")}
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            width={600}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                name="name"
                label={t("taxes.rule_name")}
                rules={[
                  {
                    required: true,
                    message: t("taxes.name_required"),
                  },
                ]}
              >
                <Input placeholder={t("taxes.name_placeholder")} />
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="type"
                    label={t("taxes.type")}
                    rules={[
                      {
                        required: true,
                        message: t("taxes.type_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("taxes.type_placeholder")}>
                      <Option value="income">{t("taxes.types.income")}</Option>
                      <Option value="social">{t("taxes.types.social")}</Option>
                      <Option value="health">{t("taxes.types.health")}</Option>
                      <Option value="unemployment">
                        {t("taxes.types.unemployment")}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="rate"
                    label={t("taxes.rate")}
                    rules={[
                      {
                        required: true,
                        message: t("taxes.rate_required"),
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      max={100}
                      placeholder="10"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="minAmount"
                    label={t("taxes.min_amount")}
                    rules={[
                      {
                        required: true,
                        message: t("taxes.min_amount_required"),
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      placeholder="0"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="maxAmount"
                    label={t("taxes.max_amount")}
                    rules={[
                      {
                        required: true,
                        message: t("taxes.max_amount_required"),
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      placeholder="100000"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
