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
} from "antd";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { useTranslation } from "react-i18next";
import "./SalaryStructurePage.css";

const { Option } = Select;

interface SalaryStructure {
  id: string;
  position: string;
  department: string;
  baseSalary: number;
  allowances: number;
  bonuses: number;
  totalSalary: number;
  employees: number;
  status: "active" | "inactive";
}

export function Component() {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Mock data
  const [salaryStructures] = useState<SalaryStructure[]>([
    {
      id: "1",
      position: "Software Developer",
      department: "IT",
      baseSalary: 50000,
      allowances: 5000,
      bonuses: 10000,
      totalSalary: 65000,
      employees: 15,
      status: "active",
    },
    {
      id: "2",
      position: "Senior Developer",
      department: "IT",
      baseSalary: 75000,
      allowances: 7500,
      bonuses: 15000,
      totalSalary: 97500,
      employees: 8,
      status: "active",
    },
    {
      id: "3",
      position: "Project Manager",
      department: "Management",
      baseSalary: 80000,
      allowances: 10000,
      bonuses: 20000,
      totalSalary: 110000,
      employees: 5,
      status: "active",
    },
    {
      id: "4",
      position: "HR Manager",
      department: "HR",
      baseSalary: 60000,
      allowances: 6000,
      bonuses: 12000,
      totalSalary: 78000,
      employees: 3,
      status: "active",
    },
  ]);

  const statistics = [
    {
      title: t("salary_structure.total_positions"),
      value: salaryStructures.length,
      icon: <IIonDocumentTextOutline />,
      color: "#1890ff",
    },
    {
      title: t("salary_structure.total_employees"),
      value: salaryStructures.reduce((sum, item) => sum + item.employees, 0),
      icon: <IIonPeopleOutline />,
      color: "#52c41a",
    },
    {
      title: t("salary_structure.average_salary"),
      value: Math.round(
        salaryStructures.reduce((sum, item) => sum + item.totalSalary, 0) /
          salaryStructures.length
      ),
      prefix: "$",
      icon: <IIonCashOutline />,
      color: "#faad14",
    },
    {
      title: t("salary_structure.total_budget"),
      value: salaryStructures.reduce(
        (sum, item) => sum + item.totalSalary * item.employees,
        0
      ),
      prefix: "$",
      icon: <IIonTrendingUpOutline />,
      color: "#f5222d",
    },
  ];

  const handleCreateStructure = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      const newStructure: SalaryStructure = {
        id: Date.now().toString(),
        ...values,
        totalSalary: values.baseSalary + values.allowances + values.bonuses,
        employees: 0,
        status: "active",
      };

      message.success(t("salary_structure.create_success"));
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <DefaultPage>
      <DefaultHeader title={t("menus.salary_structure")}>
        {" "}
        <Button
          type="primary"
          icon={<IIonAddCircleOutline />}
          onClick={handleCreateStructure}
        >
          {t("salary_structure.create_structure")}
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: t("menus.home"), href: "/" },
          { title: t("menus.payroll") },
          { title: t("menus.salary_structure") },
        ]}
      />

      <DefaultContent>
        <div className="salary-structure-container">
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

          {/* Salary Structures List */}
          <Card
            title={t("salary_structure.structures_list")}
            className="structures-list"
          >
            <List
              dataSource={salaryStructures}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  actions={[
                    <Button type="link" key="edit">
                      {t("common.edit")}
                    </Button>,
                    <Button type="link" key="view">
                      {t("common.view")}
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        style={{
                          backgroundColor:
                            item.status === "active" ? "#52c41a" : "#d9d9d9",
                        }}
                      >
                        {item.position.charAt(0)}
                      </Avatar>
                    }
                    title={
                      <div className="structure-header">
                        <span className="position-name">{item.position}</span>
                        <Tag
                          color={item.status === "active" ? "green" : "default"}
                        >
                          {item.status}
                        </Tag>
                      </div>
                    }
                    description={
                      <div className="structure-details">
                        <div className="department">
                          <strong>{t("salary_structure.department")}:</strong>{" "}
                          {item.department}
                        </div>
                        <div className="salary-breakdown">
                          <div className="salary-item">
                            <span>{t("salary_structure.base_salary")}:</span>
                            <strong>${item.baseSalary.toLocaleString()}</strong>
                          </div>
                          <div className="salary-item">
                            <span>{t("salary_structure.allowances")}:</span>
                            <strong>${item.allowances.toLocaleString()}</strong>
                          </div>
                          <div className="salary-item">
                            <span>{t("salary_structure.bonuses")}:</span>
                            <strong>${item.bonuses.toLocaleString()}</strong>
                          </div>
                          <div className="salary-item total">
                            <span>{t("salary_structure.total_salary")}:</span>
                            <strong>
                              ${item.totalSalary.toLocaleString()}
                            </strong>
                          </div>
                        </div>
                        <div className="employees-count">
                          <IIonPeopleOutline /> {item.employees}{" "}
                          {t("salary_structure.employees")}
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* Create Structure Modal */}
          <Modal
            title={t("salary_structure.create_structure")}
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            width={600}
          >
            <Form form={form} layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="position"
                    label={t("salary_structure.position")}
                    rules={[
                      {
                        required: true,
                        message: t("salary_structure.position_required"),
                      },
                    ]}
                  >
                    <Input
                      placeholder={t("salary_structure.position_placeholder")}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="department"
                    label={t("salary_structure.department")}
                    rules={[
                      {
                        required: true,
                        message: t("salary_structure.department_required"),
                      },
                    ]}
                  >
                    <Select
                      placeholder={t("salary_structure.department_placeholder")}
                    >
                      <Option value="IT">IT</Option>
                      <Option value="HR">HR</Option>
                      <Option value="Finance">Finance</Option>
                      <Option value="Management">Management</Option>
                      <Option value="Marketing">Marketing</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    name="baseSalary"
                    label={t("salary_structure.base_salary")}
                    rules={[
                      {
                        required: true,
                        message: t("salary_structure.base_salary_required"),
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      placeholder="50000"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="allowances"
                    label={t("salary_structure.allowances")}
                    rules={[
                      {
                        required: true,
                        message: t("salary_structure.allowances_required"),
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      placeholder="5000"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="bonuses"
                    label={t("salary_structure.bonuses")}
                    rules={[
                      {
                        required: true,
                        message: t("salary_structure.bonuses_required"),
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      placeholder="10000"
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
