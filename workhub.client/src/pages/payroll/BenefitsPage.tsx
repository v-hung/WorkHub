import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Statistic,
  Button,
  List,
  Avatar,
  Tag,
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  Space,
  message,
  Tabs,
} from "antd";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { useTranslation } from "react-i18next";
import "./BenefitsPage.css";

const { Option } = Select;
const { TabPane } = Tabs;

interface Benefit {
  id: string;
  name: string;
  type: "health" | "retirement" | "insurance" | "other";
  description: string;
  coverage: string;
  cost: number;
  employees: number;
  status: "active" | "inactive";
}

interface EmployeeBenefit {
  id: string;
  employeeName: string;
  benefitName: string;
  enrollmentDate: string;
  status: "enrolled" | "pending" | "terminated";
  monthlyCost: number;
}

export function Component() {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("benefits");
  const [form] = Form.useForm();

  // Mock data
  const [benefits] = useState<Benefit[]>([
    {
      id: "1",
      name: "Health Insurance",
      type: "health",
      description:
        "Comprehensive health coverage including medical, dental, and vision",
      coverage: "Family",
      cost: 450,
      employees: 142,
      status: "active",
    },
    {
      id: "2",
      name: "401(k) Retirement Plan",
      type: "retirement",
      description: "Employee retirement savings plan with company match",
      coverage: "Individual",
      cost: 0,
      employees: 135,
      status: "active",
    },
    {
      id: "3",
      name: "Life Insurance",
      type: "insurance",
      description: "Term life insurance coverage",
      coverage: "Individual",
      cost: 25,
      employees: 128,
      status: "active",
    },
    {
      id: "4",
      name: "Paid Time Off",
      type: "other",
      description: "Annual paid vacation and sick leave",
      coverage: "Individual",
      cost: 0,
      employees: 150,
      status: "active",
    },
  ]);

  const [employeeBenefits] = useState<EmployeeBenefit[]>([
    {
      id: "1",
      employeeName: "John Doe",
      benefitName: "Health Insurance",
      enrollmentDate: "2024-01-15",
      status: "enrolled",
      monthlyCost: 450,
    },
    {
      id: "2",
      employeeName: "Jane Smith",
      benefitName: "401(k) Retirement Plan",
      enrollmentDate: "2024-02-01",
      status: "enrolled",
      monthlyCost: 0,
    },
    {
      id: "3",
      employeeName: "Bob Johnson",
      benefitName: "Life Insurance",
      enrollmentDate: "2024-03-10",
      status: "pending",
      monthlyCost: 25,
    },
  ]);

  const statistics = [
    {
      title: t("benefits.total_benefits"),
      value: benefits.length,
      icon: <IIonDocumentTextOutline />,
      color: "#1890ff",
    },
    {
      title: t("benefits.total_employees_covered"),
      value: benefits.reduce((sum, benefit) => sum + benefit.employees, 0),
      icon: <IIonPeopleOutline />,
      color: "#52c41a",
    },
    {
      title: t("benefits.average_cost_per_employee"),
      value: Math.round(
        benefits.reduce((sum, benefit) => sum + benefit.cost, 0) /
          benefits.length
      ),
      prefix: "$",
      icon: <IIonHeartOutline />,
      color: "#faad14",
    },
    {
      title: t("benefits.total_monthly_cost"),
      value: benefits.reduce(
        (sum, benefit) => sum + benefit.cost * benefit.employees,
        0
      ),
      prefix: "$",
      icon: <IIonShieldCheckmarkOutline />,
      color: "#f5222d",
    },
  ];

  const handleCreateBenefit = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      message.success(t("benefits.create_success"));
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "health":
        return <IIonMedicalOutline />;
      case "retirement":
        return <IIonShieldCheckmarkOutline />;
      case "insurance":
        return <IIonShieldCheckmarkOutline />;
      default:
        return <IIonHeartOutline />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "health":
        return "#52c41a";
      case "retirement":
        return "#1890ff";
      case "insurance":
        return "#faad14";
      default:
        return "#722ed1";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "enrolled":
        return "green";
      case "pending":
        return "orange";
      case "terminated":
        return "red";
      default:
        return "default";
    }
  };

  return (
    <DefaultPage>
      <DefaultHeader title={t("menus.benefits")}>
        <Button
          type="primary"
          icon={<IIonAddCircleOutline />}
          onClick={handleCreateBenefit}
        >
          {t("benefits.create_benefit")}
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: t("menus.home"), href: "/" },
          { title: t("menus.payroll") },
          { title: t("menus.benefits") },
        ]}
      />

      <DefaultContent>
        <div className="benefits-container">
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

          {/* Tabs for Benefits and Employee Benefits */}
          <Card className="benefits-tabs">
            <Tabs activeKey={activeTab} onChange={setActiveTab}>
              <TabPane tab={t("benefits.benefits_management")} key="benefits">
                <List
                  dataSource={benefits}
                  renderItem={(item) => (
                    <List.Item
                      key={item.id}
                      actions={[
                        <Button type="link" key="edit">
                          {t("common.edit")}
                        </Button>,
                        <Button type="link" key="manage">
                          {t("benefits.manage_employees")}
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            style={{
                              backgroundColor: getTypeColor(item.type),
                            }}
                            icon={getTypeIcon(item.type)}
                          />
                        }
                        title={
                          <div className="benefit-header">
                            <span className="benefit-name">{item.name}</span>
                            <Tag
                              color={
                                item.status === "active" ? "green" : "default"
                              }
                            >
                              {item.status}
                            </Tag>
                          </div>
                        }
                        description={
                          <div className="benefit-details">
                            <div className="benefit-description">
                              {item.description}
                            </div>
                            <div className="benefit-meta">
                              <div className="meta-item">
                                <strong>{t("benefits.type")}:</strong>{" "}
                                <Tag color={getTypeColor(item.type)}>
                                  {t(`benefits.types.${item.type}`)}
                                </Tag>
                              </div>
                              <div className="meta-item">
                                <strong>{t("benefits.coverage")}:</strong>{" "}
                                {item.coverage}
                              </div>
                              <div className="meta-item">
                                <strong>{t("benefits.monthly_cost")}:</strong>{" "}
                                {item.cost === 0
                                  ? t("benefits.company_paid")
                                  : `$${item.cost}`}
                              </div>
                              <div className="meta-item">
                                <strong>
                                  {t("benefits.employees_covered")}:
                                </strong>{" "}
                                {item.employees}
                              </div>
                            </div>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </TabPane>

              <TabPane
                tab={t("benefits.employee_benefits")}
                key="employee-benefits"
              >
                <List
                  dataSource={employeeBenefits}
                  renderItem={(item) => (
                    <List.Item
                      key={item.id}
                      actions={[
                        <Button type="link" key="edit">
                          {t("common.edit")}
                        </Button>,
                        <Button type="link" key="terminate">
                          {t("benefits.terminate")}
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={<Avatar>{item.employeeName.charAt(0)}</Avatar>}
                        title={
                          <div className="employee-benefit-header">
                            <span className="employee-name">
                              {item.employeeName}
                            </span>
                            <Tag color={getStatusColor(item.status)}>
                              {t(`benefits.status.${item.status}`)}
                            </Tag>
                          </div>
                        }
                        description={
                          <div className="employee-benefit-details">
                            <div className="benefit-info">
                              <strong>{t("benefits.benefit_name")}:</strong>{" "}
                              {item.benefitName}
                            </div>
                            <div className="enrollment-info">
                              <strong>{t("benefits.enrollment_date")}:</strong>{" "}
                              {item.enrollmentDate}
                            </div>
                            <div className="cost-info">
                              <strong>{t("benefits.monthly_cost")}:</strong>{" "}
                              {item.monthlyCost === 0
                                ? t("benefits.company_paid")
                                : `$${item.monthlyCost}`}
                            </div>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </TabPane>
            </Tabs>
          </Card>

          {/* Create Benefit Modal */}
          <Modal
            title={t("benefits.create_benefit")}
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            width={600}
          >
            <Form form={form} layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label={t("benefits.benefit_name")}
                    rules={[
                      {
                        required: true,
                        message: t("benefits.name_required"),
                      },
                    ]}
                  >
                    <Input placeholder={t("benefits.name_placeholder")} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="type"
                    label={t("benefits.type")}
                    rules={[
                      {
                        required: true,
                        message: t("benefits.type_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("benefits.type_placeholder")}>
                      <Option value="health">
                        {t("benefits.types.health")}
                      </Option>
                      <Option value="retirement">
                        {t("benefits.types.retirement")}
                      </Option>
                      <Option value="insurance">
                        {t("benefits.types.insurance")}
                      </Option>
                      <Option value="other">{t("benefits.types.other")}</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="description"
                label={t("benefits.description")}
                rules={[
                  {
                    required: true,
                    message: t("benefits.description_required"),
                  },
                ]}
              >
                <Input.TextArea
                  rows={3}
                  placeholder={t("benefits.description_placeholder")}
                />
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="coverage"
                    label={t("benefits.coverage")}
                    rules={[
                      {
                        required: true,
                        message: t("benefits.coverage_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("benefits.coverage_placeholder")}>
                      <Option value="Individual">
                        {t("benefits.coverage_individual")}
                      </Option>
                      <Option value="Family">
                        {t("benefits.coverage_family")}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="cost"
                    label={t("benefits.monthly_cost")}
                    rules={[
                      {
                        required: true,
                        message: t("benefits.cost_required"),
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
              </Row>
            </Form>
          </Modal>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
