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
  Rate,
  Progress,
} from "antd";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { useTranslation } from "react-i18next";
import "./PerformanceReviewsPage.css";

const { Option } = Select;
const { TextArea } = Input;

interface PerformanceReview {
  id: string;
  employeeName: string;
  position: string;
  department: string;
  reviewPeriod: string;
  overallRating: number;
  status: "draft" | "submitted" | "approved" | "completed";
  reviewer: string;
  reviewDate: string;
  nextReviewDate: string;
}

interface ReviewCriteria {
  id: string;
  name: string;
  weight: number;
  rating: number;
  comments: string;
}

export function Component() {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] =
    useState<PerformanceReview | null>(null);
  const [form] = Form.useForm();

  // Mock data
  const [performanceReviews] = useState<PerformanceReview[]>([
    {
      id: "1",
      employeeName: "John Doe",
      position: "Software Developer",
      department: "IT",
      reviewPeriod: "Q4 2024",
      overallRating: 4.5,
      status: "completed",
      reviewer: "Jane Smith",
      reviewDate: "2024-12-15",
      nextReviewDate: "2025-03-15",
    },
    {
      id: "2",
      employeeName: "Alice Johnson",
      position: "Senior Developer",
      department: "IT",
      reviewPeriod: "Q4 2024",
      overallRating: 4.2,
      status: "submitted",
      reviewer: "Bob Wilson",
      reviewDate: "2024-12-10",
      nextReviewDate: "2025-03-10",
    },
    {
      id: "3",
      employeeName: "Charlie Brown",
      position: "Project Manager",
      department: "Management",
      reviewPeriod: "Q4 2024",
      overallRating: 3.8,
      status: "draft",
      reviewer: "Diana Prince",
      reviewDate: "",
      nextReviewDate: "2025-03-15",
    },
  ]);

  const [reviewCriteria] = useState<ReviewCriteria[]>([
    {
      id: "1",
      name: "Technical Skills",
      weight: 30,
      rating: 4,
      comments: "Excellent coding skills and problem-solving abilities",
    },
    {
      id: "2",
      name: "Communication",
      weight: 20,
      rating: 4.5,
      comments: "Clear and effective communication with team members",
    },
    {
      id: "3",
      name: "Leadership",
      weight: 25,
      rating: 3.5,
      comments: "Good leadership potential, needs more experience",
    },
    {
      id: "4",
      name: "Productivity",
      weight: 25,
      rating: 4.2,
      comments: "Consistently meets deadlines and exceeds expectations",
    },
  ]);

  const statistics = [
    {
      title: t("performance_reviews.total_reviews"),
      value: performanceReviews.length,
      icon: <IIonDocumentTextOutline />,
      color: "#1890ff",
    },
    {
      title: t("performance_reviews.completed_reviews"),
      value: performanceReviews.filter((r) => r.status === "completed").length,
      icon: <IIonStarOutline />,
      color: "#52c41a",
    },
    {
      title: t("performance_reviews.average_rating"),
      value: (
        performanceReviews.reduce((sum, r) => sum + r.overallRating, 0) /
        performanceReviews.length
      ).toFixed(1),
      suffix: "/5",
      icon: <IIonTrendingUpOutline />,
      color: "#faad14",
    },
    {
      title: t("performance_reviews.pending_reviews"),
      value: performanceReviews.filter((r) => r.status === "draft").length,
      icon: <IIonCalendarOutline />,
      color: "#f5222d",
    },
  ];

  const handleCreateReview = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      message.success(t("performance_reviews.create_success"));
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleViewReview = (review: PerformanceReview) => {
    setSelectedReview(review);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "green";
      case "submitted":
        return "blue";
      case "approved":
        return "orange";
      case "draft":
        return "default";
      default:
        return "default";
    }
  };

  const getStatusText = (status: string) => {
    return t(`performance_reviews.status.${status}`);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "#52c41a";
    if (rating >= 4.0) return "#1890ff";
    if (rating >= 3.5) return "#faad14";
    return "#f5222d";
  };

  const breadcrumbItems = [
    { title: t("menus.home"), href: "/" },
    { title: t("menus.performance") },
    { title: t("menus.performance_reviews") },
  ];

  return (
    <DefaultPage>
      <DefaultHeader title={t("menus.performance_reviews")}>
        <Button
          type="primary"
          icon={<IIonAddCircleOutline />}
          onClick={handleCreateReview}
        >
          {t("performance_reviews.create_review")}
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: t("menus.home"), href: "/" },
          { title: t("menus.performance") },
          { title: t("menus.performance_reviews") },
        ]}
      />

      <DefaultContent>
        <div className="performance-reviews-container">
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

          {/* Performance Reviews List */}
          <Card
            title={t("performance_reviews.reviews_list")}
            className="reviews-list"
          >
            <List
              dataSource={performanceReviews}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  actions={[
                    <Button
                      type="link"
                      key="view"
                      onClick={() => handleViewReview(item)}
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
                      <Avatar
                        style={{
                          backgroundColor: getRatingColor(item.overallRating),
                        }}
                      >
                        {item.employeeName.charAt(0)}
                      </Avatar>
                    }
                    title={
                      <div className="review-header">
                        <span className="employee-name">
                          {item.employeeName}
                        </span>
                        <div className="rating-status">
                          <Rate
                            disabled
                            defaultValue={item.overallRating}
                            style={{ fontSize: "14px" }}
                          />
                          <Tag color={getStatusColor(item.status)}>
                            {getStatusText(item.status)}
                          </Tag>
                        </div>
                      </div>
                    }
                    description={
                      <div className="review-details">
                        <div className="review-info">
                          <div className="info-item">
                            <strong>
                              {t("performance_reviews.position")}:
                            </strong>{" "}
                            {item.position}
                          </div>
                          <div className="info-item">
                            <strong>
                              {t("performance_reviews.department")}:
                            </strong>{" "}
                            {item.department}
                          </div>
                          <div className="info-item">
                            <strong>
                              {t("performance_reviews.review_period")}:
                            </strong>{" "}
                            {item.reviewPeriod}
                          </div>
                          <div className="info-item">
                            <strong>
                              {t("performance_reviews.reviewer")}:
                            </strong>{" "}
                            {item.reviewer}
                          </div>
                        </div>
                        <div className="review-dates">
                          {item.reviewDate && (
                            <div className="date-item">
                              <IIonCalendarOutline />{" "}
                              {t("performance_reviews.review_date")}:{" "}
                              {item.reviewDate}
                            </div>
                          )}
                          <div className="date-item">
                            <IIonCalendarOutline />{" "}
                            {t("performance_reviews.next_review")}:{" "}
                            {item.nextReviewDate}
                          </div>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* Review Details Modal */}
          {selectedReview && (
            <Modal
              title={`${t("performance_reviews.review_details")} - ${
                selectedReview.employeeName
              }`}
              open={!!selectedReview}
              onCancel={() => setSelectedReview(null)}
              footer={null}
              width={800}
            >
              <div className="review-details-modal">
                <div className="review-summary">
                  <div className="summary-item">
                    <span className="label">
                      {t("performance_reviews.overall_rating")}:
                    </span>
                    <div className="rating-display">
                      <Rate
                        disabled
                        defaultValue={selectedReview.overallRating}
                      />
                      <span className="rating-number">
                        {selectedReview.overallRating}/5
                      </span>
                    </div>
                  </div>
                  <div className="summary-item">
                    <span className="label">
                      {t("performance_reviews.status")}:
                    </span>
                    <Tag color={getStatusColor(selectedReview.status)}>
                      {getStatusText(selectedReview.status)}
                    </Tag>
                  </div>
                </div>

                <div className="criteria-section">
                  <h4>{t("performance_reviews.review_criteria")}</h4>
                  {reviewCriteria.map((criteria) => (
                    <div key={criteria.id} className="criteria-item">
                      <div className="criteria-header">
                        <span className="criteria-name">{criteria.name}</span>
                        <div className="criteria-rating">
                          <Rate disabled defaultValue={criteria.rating} />
                          <span className="weight">({criteria.weight}%)</span>
                        </div>
                      </div>
                      <div className="criteria-comments">
                        {criteria.comments}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Modal>
          )}

          {/* Create Review Modal */}
          <Modal
            title={t("performance_reviews.create_review")}
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            width={600}
          >
            <Form form={form} layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="employeeId"
                    label={t("performance_reviews.employee")}
                    rules={[
                      {
                        required: true,
                        message: t("performance_reviews.employee_required"),
                      },
                    ]}
                  >
                    <Select
                      placeholder={t("performance_reviews.select_employee")}
                    >
                      <Option value="1">John Doe</Option>
                      <Option value="2">Jane Smith</Option>
                      <Option value="3">Bob Johnson</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="reviewPeriod"
                    label={t("performance_reviews.review_period")}
                    rules={[
                      {
                        required: true,
                        message: t("performance_reviews.period_required"),
                      },
                    ]}
                  >
                    <Select
                      placeholder={t("performance_reviews.select_period")}
                    >
                      <Option value="Q4 2024">Q4 2024</Option>
                      <Option value="Q1 2025">Q1 2025</Option>
                      <Option value="Annual 2024">Annual 2024</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="reviewerId"
                    label={t("performance_reviews.reviewer")}
                    rules={[
                      {
                        required: true,
                        message: t("performance_reviews.reviewer_required"),
                      },
                    ]}
                  >
                    <Select
                      placeholder={t("performance_reviews.select_reviewer")}
                    >
                      <Option value="1">Jane Smith</Option>
                      <Option value="2">Bob Wilson</Option>
                      <Option value="3">Diana Prince</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="reviewDate"
                    label={t("performance_reviews.review_date")}
                    rules={[
                      {
                        required: true,
                        message: t("performance_reviews.date_required"),
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
