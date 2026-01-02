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
  Tabs,
  Rate,
} from "antd";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { useTranslation } from "react-i18next";
import "./FeedbackPage.css";

const { Option } = Select;
const { TextArea } = Input;
const { TabPane } = Tabs;

interface Feedback {
  id: string;
  fromEmployee: string;
  toEmployee: string;
  type: "peer" | "manager" | "subordinate" | "self";
  category: "positive" | "constructive" | "general";
  subject: string;
  message: string;
  rating?: number;
  isAnonymous: boolean;
  status: "pending" | "reviewed" | "responded";
  createdDate: string;
  response?: string;
  responseDate?: string;
}

interface FeedbackTemplate {
  id: string;
  name: string;
  category: string;
  questions: string[];
  isActive: boolean;
}

export function Component() {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("received");
  const [form] = Form.useForm();

  // Mock data
  const [feedbacks] = useState<Feedback[]>([
    {
      id: "1",
      fromEmployee: "Jane Smith",
      toEmployee: "John Doe",
      type: "manager",
      category: "positive",
      subject: "Great work on the React project",
      message:
        "John has shown excellent leadership and technical skills in the recent React project. His ability to mentor junior developers and deliver high-quality code is commendable.",
      rating: 5,
      isAnonymous: false,
      status: "responded",
      createdDate: "2024-12-10",
      response:
        "Thank you for the feedback! I'm glad the team found the mentoring helpful.",
      responseDate: "2024-12-11",
    },
    {
      id: "2",
      fromEmployee: "Bob Wilson",
      toEmployee: "John Doe",
      type: "peer",
      category: "constructive",
      subject: "Communication improvement opportunity",
      message:
        "John is technically very strong, but could improve communication during standup meetings. More detailed updates would help the team coordinate better.",
      rating: 3,
      isAnonymous: false,
      status: "reviewed",
      createdDate: "2024-12-08",
    },
    {
      id: "3",
      fromEmployee: "Anonymous",
      toEmployee: "John Doe",
      type: "peer",
      category: "general",
      subject: "Team collaboration",
      message: "The team works well together. Keep up the good work!",
      isAnonymous: true,
      status: "pending",
      createdDate: "2024-12-05",
    },
  ]);

  const [feedbackTemplates] = useState<FeedbackTemplate[]>([
    {
      id: "1",
      name: "Performance Review Template",
      category: "Performance",
      questions: [
        "How would you rate their overall performance?",
        "What are their key strengths?",
        "What areas need improvement?",
        "Any specific achievements to highlight?",
      ],
      isActive: true,
    },
    {
      id: "2",
      name: "360 Degree Feedback",
      category: "Development",
      questions: [
        "How effectively do they communicate?",
        "How do they handle challenges?",
        "How well do they collaborate with others?",
        "What leadership qualities do they demonstrate?",
      ],
      isActive: true,
    },
  ]);

  const statistics = [
    {
      title: t("feedback.total_feedback"),
      value: feedbacks.length,
      icon: <IIonDocumentTextOutline />,
      color: "#1890ff",
    },
    {
      title: t("feedback.positive_feedback"),
      value: feedbacks.filter((f) => f.category === "positive").length,
      icon: <IIonThumbsUpOutline />,
      color: "#52c41a",
    },
    {
      title: t("feedback.constructive_feedback"),
      value: feedbacks.filter((f) => f.category === "constructive").length,
      icon: <IIonThumbsDownOutline />,
      color: "#faad14",
    },
    {
      title: t("feedback.average_rating"),
      value: (
        feedbacks
          .filter((f) => f.rating)
          .reduce((sum, f) => sum + (f.rating || 0), 0) /
        feedbacks.filter((f) => f.rating).length
      ).toFixed(1),
      suffix: "/5",
      icon: <IIonChatbubbleOutline />,
      color: "#f5222d",
    },
  ];

  const handleGiveFeedback = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      message.success(t("feedback.submit_success"));
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleViewFeedback = (feedback: Feedback) => {
    setSelectedFeedback(feedback);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "manager":
        return "red";
      case "peer":
        return "blue";
      case "subordinate":
        return "green";
      case "self":
        return "orange";
      default:
        return "default";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "positive":
        return "green";
      case "constructive":
        return "orange";
      case "general":
        return "blue";
      default:
        return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "responded":
        return "green";
      case "reviewed":
        return "blue";
      case "pending":
        return "default";
      default:
        return "default";
    }
  };

  const getTypeText = (type: string) => {
    return t(`feedback.types.${type}`);
  };

  const getCategoryText = (category: string) => {
    return t(`feedback.categories.${category}`);
  };

  const getStatusText = (status: string) => {
    return t(`feedback.status.${status}`);
  };

  const filteredFeedbacks = feedbacks.filter((feedback) => {
    if (activeTab === "received") {
      return feedback.toEmployee === "John Doe"; // Current user
    } else {
      return feedback.fromEmployee === "John Doe"; // Current user
    }
  });

  return (
    <DefaultPage>
      <DefaultHeader title={t("menus.feedback")}>
        <Button
          type="primary"
          icon={<IIonAddCircleOutline />}
          onClick={handleGiveFeedback}
        >
          {t("feedback.give_feedback")}
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
        <div className="feedback-container">
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

          {/* Feedback Tabs */}
          <Card className="feedback-tabs">
            <Tabs activeKey={activeTab} onChange={setActiveTab}>
              <TabPane tab={t("feedback.received_feedback")} key="received">
                <List
                  dataSource={filteredFeedbacks}
                  renderItem={(item) => (
                    <List.Item
                      key={item.id}
                      actions={[
                        <Button
                          type="link"
                          key="view"
                          onClick={() => handleViewFeedback(item)}
                        >
                          {t("common.view")}
                        </Button>,
                        <Button type="link" key="respond">
                          {t("feedback.respond")}
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            style={{
                              backgroundColor: item.isAnonymous
                                ? "#d9d9d9"
                                : "#1890ff",
                            }}
                          >
                            {item.isAnonymous
                              ? "?"
                              : item.fromEmployee.charAt(0)}
                          </Avatar>
                        }
                        title={
                          <div className="feedback-header">
                            <span className="feedback-subject">
                              {item.subject}
                            </span>
                            <div className="feedback-tags">
                              <Tag color={getTypeColor(item.type)}>
                                {getTypeText(item.type)}
                              </Tag>
                              <Tag color={getCategoryColor(item.category)}>
                                {getCategoryText(item.category)}
                              </Tag>
                              <Tag color={getStatusColor(item.status)}>
                                {getStatusText(item.status)}
                              </Tag>
                            </div>
                          </div>
                        }
                        description={
                          <div className="feedback-details">
                            <div className="feedback-from">
                              <strong>{t("feedback.from")}:</strong>{" "}
                              {item.isAnonymous
                                ? t("feedback.anonymous")
                                : item.fromEmployee}
                            </div>
                            <div className="feedback-message-preview">
                              {item.message.length > 100
                                ? `${item.message.substring(0, 100)}...`
                                : item.message}
                            </div>
                            {item.rating && (
                              <div className="feedback-rating">
                                <span>{t("feedback.rating")}:</span>
                                <Rate disabled defaultValue={item.rating} />
                              </div>
                            )}
                            <div className="feedback-date">
                              {t("feedback.date")}: {item.createdDate}
                            </div>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </TabPane>

              <TabPane tab={t("feedback.given_feedback")} key="given">
                <List
                  dataSource={filteredFeedbacks}
                  renderItem={(item) => (
                    <List.Item
                      key={item.id}
                      actions={[
                        <Button
                          type="link"
                          key="view"
                          onClick={() => handleViewFeedback(item)}
                        >
                          {t("common.view")}
                        </Button>,
                        <Button type="link" key="edit">
                          {t("common.edit")}
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar style={{ backgroundColor: "#52c41a" }}>
                            {item.toEmployee.charAt(0)}
                          </Avatar>
                        }
                        title={
                          <div className="feedback-header">
                            <span className="feedback-subject">
                              {item.subject}
                            </span>
                            <div className="feedback-tags">
                              <Tag color={getTypeColor(item.type)}>
                                {getTypeText(item.type)}
                              </Tag>
                              <Tag color={getCategoryColor(item.category)}>
                                {getCategoryText(item.category)}
                              </Tag>
                              <Tag color={getStatusColor(item.status)}>
                                {getStatusText(item.status)}
                              </Tag>
                            </div>
                          </div>
                        }
                        description={
                          <div className="feedback-details">
                            <div className="feedback-to">
                              <strong>{t("feedback.to")}:</strong>{" "}
                              {item.toEmployee}
                            </div>
                            <div className="feedback-message-preview">
                              {item.message.length > 100
                                ? `${item.message.substring(0, 100)}...`
                                : item.message}
                            </div>
                            {item.rating && (
                              <div className="feedback-rating">
                                <span>{t("feedback.rating")}:</span>
                                <Rate disabled defaultValue={item.rating} />
                              </div>
                            )}
                            <div className="feedback-date">
                              {t("feedback.date")}: {item.createdDate}
                            </div>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </TabPane>

              <TabPane tab={t("feedback.templates")} key="templates">
                <List
                  dataSource={feedbackTemplates}
                  renderItem={(item) => (
                    <List.Item
                      key={item.id}
                      actions={[
                        <Button type="link" key="use">
                          {t("feedback.use_template")}
                        </Button>,
                        <Button type="link" key="edit">
                          {t("common.edit")}
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar style={{ backgroundColor: "#faad14" }}>
                            <IIonDocumentTextOutline />
                          </Avatar>
                        }
                        title={
                          <div className="template-header">
                            <span className="template-name">{item.name}</span>
                            <Tag color={item.isActive ? "green" : "default"}>
                              {item.isActive
                                ? t("common.active")
                                : t("common.inactive")}
                            </Tag>
                          </div>
                        }
                        description={
                          <div className="template-details">
                            <div className="template-category">
                              <strong>{t("feedback.category")}:</strong>{" "}
                              {item.category}
                            </div>
                            <div className="template-questions">
                              <strong>{t("feedback.questions")}:</strong>{" "}
                              {item.questions.length} questions
                            </div>
                            <div className="template-preview">
                              {item.questions
                                .slice(0, 2)
                                .map((question, index) => (
                                  <div key={index} className="question-preview">
                                    • {question}
                                  </div>
                                ))}
                              {item.questions.length > 2 && (
                                <div className="more-questions">
                                  ...and {item.questions.length - 2} more
                                  questions
                                </div>
                              )}
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

          {/* Feedback Details Modal */}
          {selectedFeedback && (
            <Modal
              title={`${t("feedback.feedback_details")} - ${
                selectedFeedback.subject
              }`}
              open={!!selectedFeedback}
              onCancel={() => setSelectedFeedback(null)}
              footer={null}
              width={700}
            >
              <div className="feedback-details-modal">
                <div className="feedback-info">
                  <div className="info-row">
                    <span className="label">{t("feedback.from")}:</span>
                    <span className="value">
                      {selectedFeedback.isAnonymous
                        ? t("feedback.anonymous")
                        : selectedFeedback.fromEmployee}
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="label">{t("feedback.to")}:</span>
                    <span className="value">{selectedFeedback.toEmployee}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">{t("feedback.type")}:</span>
                    <Tag color={getTypeColor(selectedFeedback.type)}>
                      {getTypeText(selectedFeedback.type)}
                    </Tag>
                  </div>
                  <div className="info-row">
                    <span className="label">{t("feedback.category")}:</span>
                    <Tag color={getCategoryColor(selectedFeedback.category)}>
                      {getCategoryText(selectedFeedback.category)}
                    </Tag>
                  </div>
                  <div className="info-row">
                    <span className="label">{t("feedback.status")}:</span>
                    <Tag color={getStatusColor(selectedFeedback.status)}>
                      {getStatusText(selectedFeedback.status)}
                    </Tag>
                  </div>
                  <div className="info-row">
                    <span className="label">{t("feedback.date")}:</span>
                    <span className="value">
                      {selectedFeedback.createdDate}
                    </span>
                  </div>
                </div>

                <div className="feedback-content">
                  <h4>{t("feedback.message")}</h4>
                  <div className="feedback-message">
                    {selectedFeedback.message}
                  </div>

                  {selectedFeedback.rating && (
                    <div className="feedback-rating-section">
                      <h4>{t("feedback.rating")}</h4>
                      <Rate disabled defaultValue={selectedFeedback.rating} />
                      <span className="rating-text">
                        {selectedFeedback.rating}/5
                      </span>
                    </div>
                  )}

                  {selectedFeedback.response && (
                    <div className="feedback-response">
                      <h4>{t("feedback.response")}</h4>
                      <div className="response-message">
                        {selectedFeedback.response}
                      </div>
                      <div className="response-date">
                        {t("feedback.responded_on")}:{" "}
                        {selectedFeedback.responseDate}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Modal>
          )}

          {/* Give Feedback Modal */}
          <Modal
            title={t("feedback.give_feedback")}
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            width={600}
          >
            <Form form={form} layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="toEmployee"
                    label={t("feedback.to_employee")}
                    rules={[
                      {
                        required: true,
                        message: t("feedback.to_employee_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("feedback.select_employee")}>
                      <Option value="1">Jane Smith</Option>
                      <Option value="2">Bob Wilson</Option>
                      <Option value="3">Alice Johnson</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="type"
                    label={t("feedback.feedback_type")}
                    rules={[
                      {
                        required: true,
                        message: t("feedback.type_required"),
                      },
                    ]}
                  >
                    <Select placeholder={t("feedback.select_type")}>
                      <Option value="peer">{t("feedback.types.peer")}</Option>
                      <Option value="manager">
                        {t("feedback.types.manager")}
                      </Option>
                      <Option value="subordinate">
                        {t("feedback.types.subordinate")}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="subject"
                label={t("feedback.subject")}
                rules={[
                  {
                    required: true,
                    message: t("feedback.subject_required"),
                  },
                ]}
              >
                <Input placeholder={t("feedback.subject_placeholder")} />
              </Form.Item>
              <Form.Item
                name="category"
                label={t("feedback.category")}
                rules={[
                  {
                    required: true,
                    message: t("feedback.category_required"),
                  },
                ]}
              >
                <Select placeholder={t("feedback.select_category")}>
                  <Option value="positive">
                    {t("feedback.categories.positive")}
                  </Option>
                  <Option value="constructive">
                    {t("feedback.categories.constructive")}
                  </Option>
                  <Option value="general">
                    {t("feedback.categories.general")}
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="message"
                label={t("feedback.message")}
                rules={[
                  {
                    required: true,
                    message: t("feedback.message_required"),
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder={t("feedback.message_placeholder")}
                />
              </Form.Item>
              <Form.Item name="rating" label={t("feedback.rating")}>
                <Rate />
              </Form.Item>
              <Form.Item name="isAnonymous" valuePropName="checked">
                <label>
                  <input type="checkbox" /> {t("feedback.make_anonymous")}
                </label>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
