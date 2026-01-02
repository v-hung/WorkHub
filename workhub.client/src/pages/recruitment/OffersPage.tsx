import { wrapProtectedLoader } from "@/utils/loader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import {
  Card,
  Button,
  List,
  Typography,
  Tag,
  Space,
  Avatar,
  Progress,
  Row,
  Col,
  Statistic,
  Select,
  Modal,
  Form,
  Input,
  DatePicker,
} from "antd";
import { Permission } from "@/generate-api";

import { useState } from "react";
import "./OffersPage.css";

const { Title, Text } = Typography;
const { Option } = Select;

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsUsersView
);

export function Component() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Mock offers data
  const offers = [
    {
      id: 1,
      candidateName: "Nguyễn Văn A",
      position: "Senior Frontend Developer",
      salary: "$2800",
      status: "Pending",
      offeredDate: "2024-01-20",
      responseDeadline: "2024-01-27",
      avatar: "/default-avatar.png",
      benefits: ["Health Insurance", "13th Month Salary", "Annual Leave"],
      manager: "Trần Thị HR",
    },
    {
      id: 2,
      candidateName: "Trần Thị B",
      position: "UX/UI Designer",
      salary: "$2200",
      status: "Accepted",
      offeredDate: "2024-01-18",
      responseDeadline: "2024-01-25",
      avatar: "/default-avatar.png",
      benefits: ["Health Insurance", "Flexible Hours", "Learning Budget"],
      manager: "Lê Văn Manager",
    },
    {
      id: 3,
      candidateName: "Lê Văn C",
      position: "DevOps Engineer",
      salary: "$2600",
      status: "Rejected",
      offeredDate: "2024-01-15",
      responseDeadline: "2024-01-22",
      avatar: "/default-avatar.png",
      benefits: ["Health Insurance", "Remote Work", "Equipment Allowance"],
      manager: "Phạm Thị Lead",
    },
    {
      id: 4,
      candidateName: "Phạm Thị D",
      position: "Senior Frontend Developer",
      salary: "$3000",
      status: "Pending",
      offeredDate: "2024-01-22",
      responseDeadline: "2024-01-29",
      avatar: "/default-avatar.png",
      benefits: [
        "Health Insurance",
        "Stock Options",
        "Professional Development",
      ],
      manager: "Hoàng Văn CTO",
    },
  ];

  const stats = [
    { title: "Offers Made", value: 12, color: "#1890ff" },
    { title: "Accepted", value: 8, color: "#52c41a" },
    { title: "Pending", value: 3, color: "#faad14" },
    { title: "Rejected", value: 1, color: "#ff4d4f" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted":
        return "green";
      case "Pending":
        return "orange";
      case "Rejected":
        return "red";
      case "Expired":
        return "gray";
      default:
        return "default";
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = (values: any) => {
    console.log("Offer values:", values);
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <DefaultPage>
      <DefaultHeader title="Job Offers">
        <Button type="primary" icon={<IIonAddOutline />} onClick={showModal}>
          Create Offer
        </Button>
      </DefaultHeader>
      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "HR Management", path: "/hr" },
          { title: "Recruitment", path: "/recruitment" },
          { title: "Offers" },
        ]}
      />
      <DefaultContent>
        <div className="offers-container">
          {/* Statistics Overview */}
          <Row gutter={[16, 16]} className="stats-row">
            {stats.map((stat, index) => (
              <Col xs={12} sm={6} key={index}>
                <Card
                  className="stat-card"
                  style={{ borderLeft: `4px solid ${stat.color}` }}
                >
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    valueStyle={{ color: stat.color, fontSize: "24px" }}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {/* Offers List */}
          <Card className="offers-list">
            <Title level={4}>Job Offers</Title>
            <List
              dataSource={offers}
              renderItem={(offer) => (
                <List.Item
                  actions={[
                    <Button key="view" icon={<IIonEyeOutline />} size="small">
                      View Details
                    </Button>,
                    <Button key="followup" size="small">
                      Send Follow-up
                    </Button>,
                    <Button
                      key="withdraw"
                      danger
                      size="small"
                      style={{
                        display:
                          offer.status === "Pending" ? "inline-block" : "none",
                      }}
                    >
                      Withdraw
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={offer.avatar}
                        icon={<IIonPeopleOutline />}
                        size="large"
                      />
                    }
                    title={
                      <div className="offer-header">
                        <span className="candidate-name">
                          {offer.candidateName}
                        </span>
                        <Tag color={getStatusColor(offer.status)}>
                          {offer.status}
                        </Tag>
                      </div>
                    }
                    description={
                      <div className="offer-details">
                        <div className="offer-position">{offer.position}</div>
                        <div className="offer-salary">
                          <Text
                            strong
                            style={{ fontSize: "16px", color: "#059669" }}
                          >
                            {offer.salary}/month
                          </Text>
                        </div>
                        <div className="offer-timeline">
                          <Space size="small">
                            <span>
                              Offered:{" "}
                              {new Date(offer.offeredDate).toLocaleDateString()}
                            </span>
                            <span>
                              Deadline:{" "}
                              {new Date(
                                offer.responseDeadline
                              ).toLocaleDateString()}
                            </span>
                          </Space>
                        </div>
                        <div className="offer-benefits">
                          <Text strong>Benefits: </Text>
                          {offer.benefits.map((benefit, index) => (
                            <Tag key={index} color="blue">
                              {benefit}
                            </Tag>
                          ))}
                        </div>
                        <div className="offer-manager">
                          <Text type="secondary">
                            Offered by: {offer.manager}
                          </Text>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* Create Offer Modal */}
          <Modal
            title="Create Job Offer"
            open={isModalVisible}
            onCancel={handleCancel}
            footer={[
              <Button key="cancel" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button key="submit" type="primary" onClick={() => form.submit()}>
                Create Offer
              </Button>,
            ]}
            width={600}
          >
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                name="candidateId"
                label="Candidate"
                rules={[
                  { required: true, message: "Please select a candidate" },
                ]}
              >
                <Select placeholder="Select candidate">
                  <Option value="1">
                    Nguyễn Văn A - Senior Frontend Developer
                  </Option>
                  <Option value="2">Trần Thị B - UX/UI Designer</Option>
                  <Option value="3">Lê Văn C - DevOps Engineer</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="position"
                label="Position"
                rules={[{ required: true, message: "Please enter position" }]}
              >
                <Input placeholder="Job position" />
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="salary"
                    label="Monthly Salary ($)"
                    rules={[{ required: true, message: "Please enter salary" }]}
                  >
                    <Input type="number" placeholder="2500" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="deadline"
                    label="Response Deadline"
                    rules={[
                      { required: true, message: "Please select deadline" },
                    ]}
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item name="benefits" label="Benefits">
                <Select mode="multiple" placeholder="Select benefits">
                  <Option value="health">Health Insurance</Option>
                  <Option value="dental">Dental Insurance</Option>
                  <Option value="remote">Remote Work</Option>
                  <Option value="bonus">Performance Bonus</Option>
                  <Option value="learning">Learning Budget</Option>
                </Select>
              </Form.Item>

              <Form.Item name="notes" label="Additional Notes">
                <Input.TextArea
                  rows={3}
                  placeholder="Any additional terms or notes..."
                />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
