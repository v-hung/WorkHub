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
  Tabs,
  InputNumber,
} from "antd";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { useTranslation } from "react-i18next";
import "./TrainingPage.css";

const { Option } = Select;
const { TextArea } = Input;
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  category: "technical" | "soft_skills" | "leadership" | "compliance";
  type: "online" | "in_person" | "hybrid";
  instructor: string;
  duration: number; // hours
  maxParticipants: number;
  enrolledParticipants: number;
  status: "draft" | "active" | "completed" | "cancelled";
  startDate: string;
  endDate: string;
  cost: number;
}

interface EmployeeTraining {
  id: string;
  employeeName: string;
  programTitle: string;
  status: "enrolled" | "in_progress" | "completed" | "dropped";
  enrollmentDate: string;
  completionDate?: string;
  progress: number;
  score?: number;
  certificate?: boolean;
}

interface TrainingSession {
  id: string;
  programId: string;
  title: string;
  date: string;
  duration: number;
  type: "lecture" | "workshop" | "assessment" | "review";
  status: "scheduled" | "in_progress" | "completed";
  attendees: number;
}

export function Component() {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] =
    useState<TrainingProgram | null>(null);
  const [activeTab, setActiveTab] = useState("programs");
  const [form] = Form.useForm();

  // Mock data
  const [trainingPrograms] = useState<TrainingProgram[]>([
    {
      id: "1",
      title: "Advanced React Development",
      description:
        "Master advanced React concepts including hooks, context, and performance optimization",
      category: "technical",
      type: "online",
      instructor: "Sarah Johnson",
      duration: 40,
      maxParticipants: 25,
      enrolledParticipants: 20,
      status: "active",
      startDate: "2025-01-15",
      endDate: "2025-02-15",
      cost: 1200,
    },
    {
      id: "2",
      title: "Leadership Excellence Program",
      description:
        "Develop essential leadership skills for team management and strategic thinking",
      category: "leadership",
      type: "hybrid",
      instructor: "Michael Chen",
      duration: 60,
      maxParticipants: 15,
      enrolledParticipants: 12,
      status: "active",
      startDate: "2025-02-01",
      endDate: "2025-03-15",
      cost: 2500,
    },
    {
      id: "3",
      title: "Communication Skills Workshop",
      description:
        "Improve verbal and written communication skills for professional success",
      category: "soft_skills",
      type: "in_person",
      instructor: "Emma Davis",
      duration: 16,
      maxParticipants: 20,
      enrolledParticipants: 18,
      status: "completed",
      startDate: "2024-11-01",
      endDate: "2024-11-15",
      cost: 800,
    },
  ]);

  const [employeeTrainings] = useState<EmployeeTraining[]>([
    {
      id: "1",
      employeeName: "John Doe",
      programTitle: "Advanced React Development",
      status: "in_progress",
      enrollmentDate: "2025-01-15",
      progress: 65,
    },
    {
      id: "2",
      employeeName: "Jane Smith",
      programTitle: "Leadership Excellence Program",
      status: "completed",
      enrollmentDate: "2025-02-01",
      completionDate: "2025-03-15",
      progress: 100,
      score: 95,
      certificate: true,
    },
    {
      id: "3",
      employeeName: "Bob Wilson",
      programTitle: "Communication Skills Workshop",
      status: "completed",
      enrollmentDate: "2024-11-01",
      completionDate: "2024-11-15",
      progress: 100,
      score: 88,
      certificate: true,
    },
  ]);

  const [trainingSessions] = useState<TrainingSession[]>([
    {
      id: "1",
      programId: "1",
      title: "React Hooks Deep Dive",
      date: "2025-01-20",
      duration: 4,
      type: "lecture",
      status: "completed",
      attendees: 20,
    },
    {
      id: "2",
      programId: "1",
      title: "Performance Optimization Workshop",
      date: "2025-01-27",
      duration: 6,
      type: "workshop",
      status: "scheduled",
      attendees: 0,
    },
    {
      id: "3",
      programId: "1",
      title: "Final Assessment",
      date: "2025-02-10",
      duration: 2,
      type: "assessment",
      status: "scheduled",
      attendees: 0,
    },
  ]);

  const statistics = [
    {
      title: t("training.total_programs"),
      value: trainingPrograms.length,
      icon: <IIonDocumentTextOutline />,
      color: "#1890ff",
    },
    {
      title: t("training.active_programs"),
      value: trainingPrograms.filter((p) => p.status === "active").length,
      icon: <IIonTimeOutline />,
      color: "#52c41a",
    },
    {
      title: t("training.total_participants"),
      value: trainingPrograms.reduce(
        (sum, p) => sum + p.enrolledParticipants,
        0
      ),
      icon: <IIonPeopleOutline />,
      color: "#faad14",
    },
    {
      title: t("training.completion_rate"),
      value: Math.round(
        (employeeTrainings.filter((t) => t.status === "completed").length /
          employeeTrainings.length) *
          100
      ),
      suffix: "%",
      icon: <IIonCheckmarkCircleOutline />,
      color: "#f5222d",
    },
  ];

  const handleCreateProgram = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      message.success(t("training.create_success"));
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleViewProgram = (program: TrainingProgram) => {
    setSelectedProgram(program);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "technical":
        return "blue";
      case "soft_skills":
        return "green";
      case "leadership":
        return "purple";
      case "compliance":
        return "orange";
      default:
        return "default";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "online":
        return "cyan";
      case "in_person":
        return "magenta";
      case "hybrid":
        return "geekblue";
      default:
        return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "green";
      case "active":
        return "blue";
      case "in_progress":
        return "orange";
      case "draft":
        return "default";
      case "cancelled":
        return "red";
      default:
        return "default";
    }
  };

  const getSessionTypeColor = (type: string) => {
    switch (type) {
      case "lecture":
        return "blue";
      case "workshop":
        return "green";
      case "assessment":
        return "orange";
      case "review":
        return "purple";
      default:
        return "default";
    }
  };

  const getCategoryText = (category: string) => {
    return t(`training.categories.${category}`);
  };

  const getTypeText = (type: string) => {
    return t(`training.types.${type}`);
  };

  const getStatusText = (status: string) => {
    return t(`training.status.${status}`);
  };

  const getSessionTypeText = (type: string) => {
    return t(`training.session_types.${type}`);
  };

  return (
    <DefaultPage>
      <DefaultHeader title={t("menus.training_development")}>
        <Button
          type="primary"
          icon={<IIonAddCircleOutline />}
          onClick={handleCreateProgram}
        >
          {t("training.create_program")}
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: t("menus.home"), href: "/" },
          { title: t("menus.performance") },
          { title: t("menus.training_development") },
        ]}
      />

      <DefaultContent>
        <div className="training-container">
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

          {/* Training Tabs */}
          <Card className="training-tabs">
            <Tabs activeKey={activeTab} onChange={setActiveTab}>
              <TabPane tab={t("training.training_programs")} key="programs">
                <List
                  dataSource={trainingPrograms}
                  renderItem={(item) => (
                    <List.Item
                      key={item.id}
                      actions={[
                        <Button
                          type="link"
                          key="view"
                          onClick={() => handleViewProgram(item)}
                        >
                          {t("common.view")}
                        </Button>,
                        <Button type="link" key="enroll">
                          {t("training.enroll")}
                        </Button>,
                        <Button type="link" key="edit">
                          {t("common.edit")}
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            style={{
                              backgroundColor: getCategoryColor(item.category),
                            }}
                            icon={<IIonSchoolOutline />}
                          />
                        }
                        title={
                          <div className="program-header">
                            <span className="program-title">{item.title}</span>
                            <div className="program-tags">
                              <Tag color={getCategoryColor(item.category)}>
                                {getCategoryText(item.category)}
                              </Tag>
                              <Tag color={getTypeColor(item.type)}>
                                {getTypeText(item.type)}
                              </Tag>
                              <Tag color={getStatusColor(item.status)}>
                                {getStatusText(item.status)}
                              </Tag>
                            </div>
                          </div>
                        }
                        description={
                          <div className="program-details">
                            <div className="program-description">
                              {item.description}
                            </div>
                            <div className="program-meta">
                              <div className="meta-item">
                                <strong>{t("training.instructor")}:</strong>{" "}
                                {item.instructor}
                              </div>
                              <div className="meta-item">
                                <strong>{t("training.duration")}:</strong>{" "}
                                {item.duration} {t("training.hours")}
                              </div>
                              <div className="meta-item">
                                <strong>{t("training.participants")}:</strong>{" "}
                                {item.enrolledParticipants}/
                                {item.maxParticipants}
                              </div>
                              <div className="meta-item">
                                <strong>{t("training.cost")}:</strong> $
                                {item.cost}
                              </div>
                              <div className="meta-item">
                                <strong>{t("training.dates")}:</strong>{" "}
                                {item.startDate} - {item.endDate}
                              </div>
                            </div>
                            <div className="enrollment-progress">
                              <div className="progress-header">
                                <span>{t("training.enrollment_progress")}</span>
                                <span>
                                  {Math.round(
                                    (item.enrolledParticipants /
                                      item.maxParticipants) *
                                      100
                                  )}
                                  %
                                </span>
                              </div>
                              <Progress
                                percent={Math.round(
                                  (item.enrolledParticipants /
                                    item.maxParticipants) *
                                    100
                                )}
                                status={
                                  item.enrolledParticipants >=
                                  item.maxParticipants
                                    ? "exception"
                                    : "active"
                                }
                                strokeColor={
                                  item.enrolledParticipants >=
                                  item.maxParticipants
                                    ? "#f5222d"
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
              </TabPane>

              <TabPane tab={t("training.my_training")} key="my-training">
                <List
                  dataSource={employeeTrainings}
                  renderItem={(item) => (
                    <List.Item
                      key={item.id}
                      actions={[
                        <Button type="link" key="continue">
                          {item.status === "in_progress"
                            ? t("training.continue")
                            : t("common.view")}
                        </Button>,
                        <Button
                          type="link"
                          key="certificate"
                          disabled={!item.certificate}
                        >
                          {t("training.certificate")}
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            style={{
                              backgroundColor: getStatusColor(item.status),
                            }}
                            icon={<IIonBookOutline />}
                          />
                        }
                        title={
                          <div className="training-header">
                            <span className="training-title">
                              {item.programTitle}
                            </span>
                            <Tag color={getStatusColor(item.status)}>
                              {t(`training.training_status.${item.status}`)}
                            </Tag>
                          </div>
                        }
                        description={
                          <div className="training-details">
                            <div className="training-meta">
                              <div className="meta-item">
                                <strong>
                                  {t("training.enrollment_date")}:
                                </strong>{" "}
                                {item.enrollmentDate}
                              </div>
                              {item.completionDate && (
                                <div className="meta-item">
                                  <strong>
                                    {t("training.completion_date")}:
                                  </strong>{" "}
                                  {item.completionDate}
                                </div>
                              )}
                              {item.score && (
                                <div className="meta-item">
                                  <strong>{t("training.score")}:</strong>{" "}
                                  {item.score}%
                                </div>
                              )}
                              {item.certificate && (
                                <div className="meta-item">
                                  <span className="certificate-badge">
                                    🏆 {t("training.certificate_earned")}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="training-progress">
                              <div className="progress-header">
                                <span>{t("training.progress")}</span>
                                <span>{item.progress}%</span>
                              </div>
                              <Progress
                                percent={item.progress}
                                status={
                                  item.status === "completed"
                                    ? "success"
                                    : "active"
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
              </TabPane>
            </Tabs>
          </Card>

          {/* Program Details Modal */}
          {selectedProgram && (
            <Modal
              title={`${t("training.program_details")} - ${
                selectedProgram.title
              }`}
              open={!!selectedProgram}
              onCancel={() => setSelectedProgram(null)}
              footer={null}
              width={800}
            >
              <div className="program-details-modal">
                <div className="program-info">
                  <div className="info-section">
                    <h4>{t("training.program_information")}</h4>
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="label">{t("training.category")}:</span>
                        <Tag color={getCategoryColor(selectedProgram.category)}>
                          {getCategoryText(selectedProgram.category)}
                        </Tag>
                      </div>
                      <div className="info-item">
                        <span className="label">{t("training.type")}:</span>
                        <Tag color={getTypeColor(selectedProgram.type)}>
                          {getTypeText(selectedProgram.type)}
                        </Tag>
                      </div>
                      <div className="info-item">
                        <span className="label">{t("training.status")}:</span>
                        <Tag color={getStatusColor(selectedProgram.status)}>
                          {getStatusText(selectedProgram.status)}
                        </Tag>
                      </div>
                      <div className="info-item">
                        <span className="label">
                          {t("training.instructor")}:
                        </span>
                        <span className="value">
                          {selectedProgram.instructor}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="label">{t("training.duration")}:</span>
                        <span className="value">
                          {selectedProgram.duration} {t("training.hours")}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="label">{t("training.cost")}:</span>
                        <span className="value">${selectedProgram.cost}</span>
                      </div>
                    </div>
                  </div>

                  <div className="enrollment-section">
                    <h4>{t("training.enrollment_information")}</h4>
                    <div className="enrollment-stats">
                      <div className="stat-item">
                        <span className="stat-label">
                          {t("training.enrolled")}:
                        </span>
                        <span className="stat-value">
                          {selectedProgram.enrolledParticipants}
                        </span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">
                          {t("training.maximum")}:
                        </span>
                        <span className="stat-value">
                          {selectedProgram.maxParticipants}
                        </span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">
                          {t("training.available_spots")}:
                        </span>
                        <span className="stat-value">
                          {selectedProgram.maxParticipants -
                            selectedProgram.enrolledParticipants}
                        </span>
                      </div>
                    </div>
                    <div className="enrollment-progress">
                      <Progress
                        percent={Math.round(
                          (selectedProgram.enrolledParticipants /
                            selectedProgram.maxParticipants) *
                            100
                        )}
                        status={
                          selectedProgram.enrolledParticipants >=
                          selectedProgram.maxParticipants
                            ? "exception"
                            : "active"
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="program-description-section">
                  <h4>{t("training.description")}</h4>
                  <div className="program-description">
                    {selectedProgram.description}
                  </div>
                </div>

                <div className="program-sessions">
                  <h4>{t("training.upcoming_sessions")}</h4>
                  <Timeline>
                    {trainingSessions
                      .filter(
                        (session) => session.programId === selectedProgram.id
                      )
                      .map((session) => (
                        <Timeline.Item
                          key={session.id}
                          color={
                            session.status === "completed" ? "green" : "blue"
                          }
                        >
                          <div className="session-item">
                            <div className="session-header">
                              <span className="session-title">
                                {session.title}
                              </span>
                              <Tag color={getSessionTypeColor(session.type)}>
                                {getSessionTypeText(session.type)}
                              </Tag>
                            </div>
                            <div className="session-details">
                              <div className="session-date">{session.date}</div>
                              <div className="session-duration">
                                {session.duration} {t("training.hours")}
                              </div>
                              <div className="session-attendees">
                                {t("training.attendees")}: {session.attendees}
                              </div>
                            </div>
                          </div>
                        </Timeline.Item>
                      ))}
                  </Timeline>
                </div>
              </div>
            </Modal>
          )}

          {/* Create Program Modal */}
          <Modal
            title={t("training.create_program")}
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            width={700}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                name="title"
                label={t("training.program_title")}
                rules={[
                  {
                    required: true,
                    message: t("training.title_required"),
                  },
                ]}
              >
                <Input placeholder={t("training.title_placeholder")} />
              </Form.Item>
              <Form.Item
                name="description"
                label={t("training.description")}
                rules={[
                  {
                    required: true,
                    message: t("training.description_required"),
                  },
                ]}
              >
                <TextArea
                  rows={3}
                  placeholder={t("training.description_placeholder")}
                />
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="category"
                    label={t("training.category")}
                    rules={[
                      {
                        required: true,
                        message: t("training.category_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("training.select_category")}>
                      <Option value="technical">
                        {t("training.categories.technical")}
                      </Option>
                      <Option value="soft_skills">
                        {t("training.categories.soft_skills")}
                      </Option>
                      <Option value="leadership">
                        {t("training.categories.leadership")}
                      </Option>
                      <Option value="compliance">
                        {t("training.categories.compliance")}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="type"
                    label={t("training.type")}
                    rules={[
                      {
                        required: true,
                        message: t("training.type_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("training.select_type")}>
                      <Option value="online">
                        {t("training.types.online")}
                      </Option>
                      <Option value="in_person">
                        {t("training.types.in_person")}
                      </Option>
                      <Option value="hybrid">
                        {t("training.types.hybrid")}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="instructor"
                    label={t("training.instructor")}
                    rules={[
                      {
                        required: true,
                        message: t("training.instructor_required"),
                      },
                    ]}
                  >
                    <Input placeholder={t("training.instructor_placeholder")} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="duration"
                    label={t("training.duration")}
                    rules={[
                      {
                        required: true,
                        message: t("training.duration_required"),
                      },
                    ]}
                  >
                    <InputNumber
                      min={1}
                      placeholder="40"
                      addonAfter={t("training.hours")}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    name="maxParticipants"
                    label={t("training.max_participants")}
                    rules={[
                      {
                        required: true,
                        message: t("training.max_participants_required"),
                      },
                    ]}
                  >
                    <InputNumber
                      min={1}
                      placeholder="25"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="cost"
                    label={t("training.cost")}
                    rules={[
                      {
                        required: true,
                        message: t("training.cost_required"),
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      placeholder="1200"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="status"
                    label={t("training.status")}
                    initialValue="draft"
                  >
                    <Select>
                      <Option value="draft">
                        {t("training.status.draft")}
                      </Option>
                      <Option value="active">
                        {t("training.status.active")}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="dateRange"
                label={t("training.program_dates")}
                rules={[
                  {
                    required: true,
                    message: t("training.dates_required"),
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
