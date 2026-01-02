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
  Statistic,
  Row,
  Col,
} from "antd";
import { Permission } from "@/generate-api";
import "./JobPostingsPage.css";

const { Title, Text, Paragraph } = Typography;

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsUsersView
);

export function Component() {
  // Mock job postings data
  const jobPostings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "IT Department",
      location: "Hanoi, Vietnam",
      type: "Full-time",
      experience: "3-5 years",
      salary: "$2000 - $3500",
      postedDate: "2024-01-15",
      deadline: "2024-02-15",
      status: "Active",
      applicants: 12,
      description:
        "We are looking for a Senior Frontend Developer to join our dynamic team...",
      requirements: ["React", "TypeScript", "Node.js", "3+ years experience"],
      avatar: "/default-avatar.png",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design Team",
      location: "Ho Chi Minh City, Vietnam",
      type: "Full-time",
      experience: "2-4 years",
      salary: "$1500 - $2500",
      postedDate: "2024-01-10",
      deadline: "2024-02-10",
      status: "Active",
      applicants: 8,
      description: "Join our creative design team as a UX/UI Designer...",
      requirements: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      avatar: "/default-avatar.png",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "IT Department",
      location: "Da Nang, Vietnam",
      type: "Full-time",
      experience: "2-3 years",
      salary: "$1800 - $3000",
      postedDate: "2024-01-05",
      deadline: "2024-02-05",
      status: "Closed",
      applicants: 15,
      description:
        "We need a skilled DevOps Engineer to manage our infrastructure...",
      requirements: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      avatar: "/default-avatar.png",
    },
  ];

  const stats = [
    { title: "Active Jobs", value: 8, color: "#1890ff" },
    { title: "Total Applications", value: 156, color: "#52c41a" },
    { title: "This Month", value: 23, color: "#faad14" },
    { title: "Filled Positions", value: 12, color: "#722ed1" },
  ];

  return (
    <DefaultPage>
      <DefaultHeader title="Job Postings">
        <Button type="primary" icon={<IIonAddOutline />}>
          Create New Job Posting
        </Button>
      </DefaultHeader>
      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "HR Management", path: "/hr" },
          { title: "Recruitment", path: "/recruitment" },
          { title: "Job Postings" },
        ]}
      />
      <DefaultContent>
        <div className="job-postings-container">
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

          {/* Job Postings List */}
          <Card className="job-postings-list">
            <Title level={4}>Current Job Postings</Title>
            <List
              dataSource={jobPostings}
              renderItem={(job) => (
                <List.Item
                  actions={[
                    <Button key="view" icon={<IIonEyeOutline />} size="small">
                      View
                    </Button>,
                    <Button
                      key="edit"
                      icon={<IIonPencilOutline />}
                      size="small"
                    >
                      Edit
                    </Button>,
                    <Button
                      key="applicants"
                      icon={<IIonPeopleOutline />}
                      size="small"
                    >
                      {job.applicants} Applicants
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={job.avatar}
                        icon={<IIonDocumentTextOutline />}
                        size="large"
                      />
                    }
                    title={
                      <div className="job-title-section">
                        <span className="job-title">{job.title}</span>
                        <Tag color={job.status === "Active" ? "green" : "red"}>
                          {job.status}
                        </Tag>
                      </div>
                    }
                    description={
                      <div className="job-details">
                        <div className="job-meta">
                          <Space>
                            <span>
                              <IIonLocationOutline /> {job.location}
                            </span>
                            <span>{job.type}</span>
                            <span>{job.experience}</span>
                          </Space>
                        </div>
                        <div className="job-salary-deadline">
                          <Text strong>{job.salary}</Text>
                          <Text type="secondary">
                            <IIonTimeOutline /> Deadline:{" "}
                            {new Date(job.deadline).toLocaleDateString()}
                          </Text>
                        </div>
                        <Paragraph
                          ellipsis={{ rows: 2 }}
                          className="job-description"
                        >
                          {job.description}
                        </Paragraph>
                        <div className="job-requirements">
                          {job.requirements.map((req, index) => (
                            <Tag key={index}>{req}</Tag>
                          ))}
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
