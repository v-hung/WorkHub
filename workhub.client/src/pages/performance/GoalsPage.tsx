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
  DatePicker,
  Space,
  message,
  Progress,
  Timeline,
} from "antd";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { useTranslation } from "react-i18next";
import "./GoalsPage.css";

const { Option } = Select;
const { TextArea } = Input;

interface Goal {
  id: string;
  title: string;
  description: string;
  employeeName: string;
  type: "individual" | "team" | "department" | "company";
  category: "performance" | "learning" | "project" | "career";
  priority: "low" | "medium" | "high" | "critical";
  status: "not_started" | "in_progress" | "completed" | "cancelled";
  progress: number;
  startDate: string;
  endDate: string;
  createdBy: string;
}

interface GoalMilestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "completed";
  completedDate?: string;
}

export function Component() {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [form] = Form.useForm();

  // Mock data
  const [goals] = useState<Goal[]>([
    {
      id: "1",
      title: "Complete React Certification",
      description:
        "Obtain React Developer certification to enhance frontend skills",
      employeeName: "John Doe",
      type: "individual",
      category: "learning",
      priority: "high",
      status: "in_progress",
      progress: 75,
      startDate: "2024-10-01",
      endDate: "2025-01-31",
      createdBy: "John Doe",
    },
    {
      id: "2",
      title: "Q4 Sales Target",
      description: "Achieve $500K in sales for Q4 2024",
      employeeName: "Jane Smith",
      type: "individual",
      category: "performance",
      priority: "critical",
      status: "in_progress",
      progress: 60,
      startDate: "2024-10-01",
      endDate: "2024-12-31",
      createdBy: "Manager",
    },
    {
      id: "3",
      title: "Team Productivity Improvement",
      description:
        "Increase team productivity by 20% through process optimization",
      employeeName: "Team Alpha",
      type: "team",
      category: "project",
      priority: "high",
      status: "completed",
      progress: 100,
      startDate: "2024-08-01",
      endDate: "2024-11-30",
      createdBy: "Project Manager",
    },
    {
      id: "4",
      title: "Department Diversity Initiative",
      description:
        "Implement diversity and inclusion programs across the department",
      employeeName: "HR Department",
      type: "department",
      category: "career",
      priority: "medium",
      status: "in_progress",
      progress: 40,
      startDate: "2024-09-01",
      endDate: "2025-02-28",
      createdBy: "HR Manager",
    },
  ]);

  const [goalMilestones] = useState<GoalMilestone[]>([
    {
      id: "1",
      title: "Complete online courses",
      description: "Finish all required React courses on Udemy",
      dueDate: "2024-12-15",
      status: "completed",
      completedDate: "2024-12-10",
    },
    {
      id: "2",
      title: "Pass certification exam",
      description: "Take and pass the React certification exam",
      dueDate: "2025-01-15",
      status: "pending",
    },
    {
      id: "3",
      title: "Apply knowledge in projects",
      description: "Implement learned concepts in ongoing projects",
      dueDate: "2025-01-31",
      status: "pending",
    },
  ]);

  const statistics = [
    {
      title: t("goals.total_goals"),
      value: goals.length,
      icon: <IIonDocumentTextOutline />,
      color: "#1890ff",
    },
    {
      title: t("goals.completed_goals"),
      value: goals.filter((g) => g.status === "completed").length,
      icon: <IIonCheckmarkCircleOutline />,
      color: "#52c41a",
    },
    {
      title: t("goals.in_progress_goals"),
      value: goals.filter((g) => g.status === "in_progress").length,
      icon: <IIonTimeOutline />,
      color: "#faad14",
    },
    {
      title: t("goals.average_progress"),
      value: Math.round(
        goals.reduce((sum, g) => sum + g.progress, 0) / goals.length
      ),
      suffix: "%",
      icon: <IIonTrophyOutline />,
      color: "#f5222d",
    },
  ];

  const handleCreateGoal = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      message.success(t("goals.create_success"));
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleViewGoal = (goal: Goal) => {
    setSelectedGoal(goal);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "individual":
        return "blue";
      case "team":
        return "green";
      case "department":
        return "orange";
      case "company":
        return "purple";
      default:
        return "default";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "default";
      case "medium":
        return "blue";
      case "high":
        return "orange";
      case "critical":
        return "red";
      default:
        return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "green";
      case "in_progress":
        return "blue";
      case "not_started":
        return "default";
      case "cancelled":
        return "red";
      default:
        return "default";
    }
  };

  const getStatusText = (status: string) => {
    return t(`goals.status.${status}`);
  };

  const getTypeText = (type: string) => {
    return t(`goals.types.${type}`);
  };

  const getCategoryText = (category: string) => {
    return t(`goals.categories.${category}`);
  };

  const getPriorityText = (priority: string) => {
    return t(`goals.priorities.${priority}`);
  };

  return (
    <DefaultPage>
      <DefaultHeader title={t("menus.goals_objectives")}>
        <Button
          type="primary"
          icon={<IIonAddCircleOutline />}
          onClick={handleCreateGoal}
        >
          {t("goals.create_goal")}
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: t("menus.home"), href: "/" },
          { title: t("menus.performance") },
          { title: t("menus.goals_objectives") },
        ]}
      />

      <DefaultContent>
        <div className="goals-container">
          {/* Statistics Row */}
          <Row gutter={[16, 16]} className="stats-row">
            {statistics.map((stat, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card className="stat-card">
                  <Statistic
                    title={stat.title}
                    value={stat.value}
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

          {/* Goals List */}
          <Card title={t("goals.goals_list")} className="goals-list">
            <List
              dataSource={goals}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  actions={[
                    <Button
                      type="link"
                      key="view"
                      onClick={() => handleViewGoal(item)}
                    >
                      {t("common.view")}
                    </Button>,
                    <Button type="link" key="edit">
                      {t("common.edit")}
                    </Button>,
                    <Button type="link" key="update">
                      {t("goals.update_progress")}
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        style={{
                          backgroundColor:
                            getStatusColor(item.status) === "green"
                              ? "#52c41a"
                              : "#1890ff",
                        }}
                        icon={<IIonScan />}
                      />
                    }
                    title={
                      <div className="goal-header">
                        <span className="goal-title">{item.title}</span>
                        <div className="goal-tags">
                          <Tag color={getTypeColor(item.type)}>
                            {getTypeText(item.type)}
                          </Tag>
                          <Tag color={getPriorityColor(item.priority)}>
                            {getPriorityText(item.priority)}
                          </Tag>
                          <Tag color={getStatusColor(item.status)}>
                            {getStatusText(item.status)}
                          </Tag>
                        </div>
                      </div>
                    }
                    description={
                      <div className="goal-details">
                        <div className="goal-description">
                          {item.description}
                        </div>
                        <div className="goal-meta">
                          <div className="meta-item">
                            <strong>{t("goals.assigned_to")}:</strong>{" "}
                            {item.employeeName}
                          </div>
                          <div className="meta-item">
                            <strong>{t("goals.category")}:</strong>{" "}
                            <Tag>{getCategoryText(item.category)}</Tag>
                          </div>
                          <div className="meta-item">
                            <strong>{t("goals.duration")}:</strong>{" "}
                            {item.startDate} - {item.endDate}
                          </div>
                          <div className="meta-item">
                            <strong>{t("goals.created_by")}:</strong>{" "}
                            {item.createdBy}
                          </div>
                        </div>
                        <div className="goal-progress">
                          <div className="progress-header">
                            <span>{t("goals.progress")}</span>
                            <span>{item.progress}%</span>
                          </div>
                          <Progress
                            percent={item.progress}
                            status={
                              item.status === "completed" ? "success" : "active"
                            }
                            strokeColor={
                              item.status === "completed"
                                ? "#52c41a"
                                : "#1890ff"
                            }
                          />
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* Goal Details Modal */}
          {selectedGoal && (
            <Modal
              title={`${t("goals.goal_details")} - ${selectedGoal.title}`}
              open={!!selectedGoal}
              onCancel={() => setSelectedGoal(null)}
              footer={null}
              width={800}
            >
              <div className="goal-details-modal">
                <div className="goal-summary">
                  <div className="summary-section">
                    <h4>{t("goals.goal_information")}</h4>
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="label">{t("goals.type")}:</span>
                        <Tag color={getTypeColor(selectedGoal.type)}>
                          {getTypeText(selectedGoal.type)}
                        </Tag>
                      </div>
                      <div className="info-item">
                        <span className="label">{t("goals.category")}:</span>
                        <Tag>{getCategoryText(selectedGoal.category)}</Tag>
                      </div>
                      <div className="info-item">
                        <span className="label">{t("goals.priority")}:</span>
                        <Tag color={getPriorityColor(selectedGoal.priority)}>
                          {getPriorityText(selectedGoal.priority)}
                        </Tag>
                      </div>
                      <div className="info-item">
                        <span className="label">{t("goals.status")}:</span>
                        <Tag color={getStatusColor(selectedGoal.status)}>
                          {getStatusText(selectedGoal.status)}
                        </Tag>
                      </div>
                    </div>
                  </div>

                  <div className="progress-section">
                    <h4>{t("goals.progress_tracking")}</h4>
                    <div className="progress-display">
                      <div className="progress-number">
                        {selectedGoal.progress}%
                      </div>
                      <Progress
                        percent={selectedGoal.progress}
                        status={
                          selectedGoal.status === "completed"
                            ? "success"
                            : "active"
                        }
                        strokeColor={
                          selectedGoal.status === "completed"
                            ? "#52c41a"
                            : "#1890ff"
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="milestones-section">
                  <h4>{t("goals.milestones")}</h4>
                  <Timeline>
                    {goalMilestones.map((milestone) => (
                      <Timeline.Item
                        key={milestone.id}
                        color={
                          milestone.status === "completed" ? "green" : "blue"
                        }
                      >
                        <div className="milestone-item">
                          <div className="milestone-header">
                            <span className="milestone-title">
                              {milestone.title}
                            </span>
                            <Tag
                              color={
                                milestone.status === "completed"
                                  ? "green"
                                  : "default"
                              }
                            >
                              {milestone.status}
                            </Tag>
                          </div>
                          <div className="milestone-description">
                            {milestone.description}
                          </div>
                          <div className="milestone-date">
                            {t("goals.due_date")}: {milestone.dueDate}
                            {milestone.completedDate && (
                              <span>
                                {" "}
                                • {t("goals.completed_date")}:{" "}
                                {milestone.completedDate}
                              </span>
                            )}
                          </div>
                        </div>
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </div>
              </div>
            </Modal>
          )}

          {/* Create Goal Modal */}
          <Modal
            title={t("goals.create_goal")}
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            width={600}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                name="title"
                label={t("goals.goal_title")}
                rules={[
                  {
                    required: true,
                    message: t("goals.title_required"),
                  },
                ]}
              >
                <Input placeholder={t("goals.title_placeholder")} />
              </Form.Item>
              <Form.Item
                name="description"
                label={t("goals.description")}
                rules={[
                  {
                    required: true,
                    message: t("goals.description_required"),
                  },
                ]}
              >
                <TextArea
                  rows={3}
                  placeholder={t("goals.description_placeholder")}
                />
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="type"
                    label={t("goals.type")}
                    rules={[
                      {
                        required: true,
                        message: t("goals.type_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("goals.select_type")}>
                      <Option value="individual">
                        {t("goals.types.individual")}
                      </Option>
                      <Option value="team">{t("goals.types.team")}</Option>
                      <Option value="department">
                        {t("goals.types.department")}
                      </Option>
                      <Option value="company">
                        {t("goals.types.company")}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="category"
                    label={t("goals.category")}
                    rules={[
                      {
                        required: true,
                        message: t("goals.category_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("goals.select_category")}>
                      <Option value="performance">
                        {t("goals.categories.performance")}
                      </Option>
                      <Option value="learning">
                        {t("goals.categories.learning")}
                      </Option>
                      <Option value="project">
                        {t("goals.categories.project")}
                      </Option>
                      <Option value="career">
                        {t("goals.categories.career")}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="priority"
                    label={t("goals.priority")}
                    rules={[
                      {
                        required: true,
                        message: t("goals.priority_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("goals.select_priority")}>
                      <Option value="low">{t("goals.priorities.low")}</Option>
                      <Option value="medium">
                        {t("goals.priorities.medium")}
                      </Option>
                      <Option value="high">{t("goals.priorities.high")}</Option>
                      <Option value="critical">
                        {t("goals.priorities.critical")}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="assignedTo"
                    label={t("goals.assigned_to")}
                    rules={[
                      {
                        required: true,
                        message: t("goals.assigned_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("goals.select_assignee")}>
                      <Option value="1">John Doe</Option>
                      <Option value="2">Jane Smith</Option>
                      <Option value="3">Team Alpha</Option>
                      <Option value="4">HR Department</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="startDate"
                    label={t("goals.start_date")}
                    rules={[
                      {
                        required: true,
                        message: t("goals.start_date_required"),
                      },
                    ]}
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="endDate"
                    label={t("goals.end_date")}
                    rules={[
                      {
                        required: true,
                        message: t("goals.end_date_required"),
                      },
                    ]}
                  >
                    <DatePicker style={{ width: "100%" }} />
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
