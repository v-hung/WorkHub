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
} from "antd";
import { Permission } from "@/generate-api";
import "./CandidatesPage.css";

const { Title, Text } = Typography;
const { Option } = Select;

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsUsersView
);

export function Component() {
  // Mock candidates data
  const candidates = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      position: "Senior Frontend Developer",
      email: "nguyenvana@email.com",
      phone: "+84 123 456 789",
      appliedDate: "2024-01-20",
      status: "Under Review",
      experience: "4 years",
      skills: ["React", "TypeScript", "Node.js"],
      score: 85,
      avatar: "/default-avatar.png",
      source: "LinkedIn",
    },
    {
      id: 2,
      name: "Trần Thị B",
      position: "UX/UI Designer",
      email: "tranthib@email.com",
      phone: "+84 987 654 321",
      appliedDate: "2024-01-18",
      status: "Interview Scheduled",
      experience: "3 years",
      skills: ["Figma", "Adobe XD", "Sketch"],
      score: 78,
      avatar: "/default-avatar.png",
      source: "Company Website",
    },
    {
      id: 3,
      name: "Lê Văn C",
      position: "DevOps Engineer",
      email: "levanc@email.com",
      phone: "+84 555 666 777",
      appliedDate: "2024-01-15",
      status: "Rejected",
      experience: "2 years",
      skills: ["AWS", "Docker", "Jenkins"],
      score: 65,
      avatar: "/default-avatar.png",
      source: "Referral",
    },
    {
      id: 4,
      name: "Phạm Thị D",
      position: "Senior Frontend Developer",
      email: "phamthid@email.com",
      phone: "+84 111 222 333",
      appliedDate: "2024-01-22",
      status: "Shortlisted",
      experience: "5 years",
      skills: ["React", "Vue.js", "Angular"],
      score: 92,
      avatar: "/default-avatar.png",
      source: "Indeed",
    },
  ];

  const stats = [
    { title: "Total Candidates", value: 47, color: "#1890ff" },
    { title: "Under Review", value: 18, color: "#faad14" },
    { title: "Interview Scheduled", value: 8, color: "#52c41a" },
    { title: "Offers Made", value: 3, color: "#722ed1" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review":
        return "orange";
      case "Interview Scheduled":
        return "blue";
      case "Shortlisted":
        return "green";
      case "Rejected":
        return "red";
      case "Hired":
        return "purple";
      default:
        return "default";
    }
  };

  return (
    <DefaultPage>
      <DefaultHeader title="Candidates">
        <Space>
          <Select defaultValue="all" style={{ width: 120 }}>
            <Option value="all">All Status</Option>
            <Option value="review">Under Review</Option>
            <Option value="interview">Interview</Option>
            <Option value="shortlisted">Shortlisted</Option>
          </Select>
          <Button type="primary" icon={<IIonPeopleOutline />}>
            Add Candidate
          </Button>
        </Space>
      </DefaultHeader>
      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "HR Management", path: "/hr" },
          { title: "Recruitment", path: "/recruitment" },
          { title: "Candidates" },
        ]}
      />
      <DefaultContent>
        <div className="candidates-container">
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

          {/* Candidates List */}
          <Card className="candidates-list">
            <Title level={4}>Candidate Pipeline</Title>
            <List
              dataSource={candidates}
              renderItem={(candidate) => (
                <List.Item
                  actions={[
                    <Button key="view" icon={<IIonEyeOutline />} size="small">
                      View Profile
                    </Button>,
                    <Button
                      key="contact"
                      icon={<IIonMailOutline />}
                      size="small"
                    >
                      Contact
                    </Button>,
                    <Button key="schedule" type="primary" size="small">
                      Schedule Interview
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <div className="candidate-avatar">
                        <Avatar
                          src={candidate.avatar}
                          icon={<IIonPeopleOutline />}
                          size="large"
                        />
                        <div className="candidate-score">
                          <Progress
                            type="circle"
                            percent={candidate.score}
                            width={40}
                            strokeColor={
                              candidate.score >= 80
                                ? "#52c41a"
                                : candidate.score >= 70
                                ? "#faad14"
                                : "#ff4d4f"
                            }
                            showInfo={false}
                          />
                          <span className="score-text">{candidate.score}</span>
                        </div>
                      </div>
                    }
                    title={
                      <div className="candidate-header">
                        <span className="candidate-name">{candidate.name}</span>
                        <Tag color={getStatusColor(candidate.status)}>
                          {candidate.status}
                        </Tag>
                      </div>
                    }
                    description={
                      <div className="candidate-details">
                        <div className="candidate-position">
                          {candidate.position}
                        </div>
                        <div className="candidate-contact">
                          <Space size="small">
                            <span>
                              <IIonMailOutline /> {candidate.email}
                            </span>
                            <span>
                              <IIonCallOutline /> {candidate.phone}
                            </span>
                          </Space>
                        </div>
                        <div className="candidate-meta">
                          <Space size="small">
                            <span>Experience: {candidate.experience}</span>
                            <span>Source: {candidate.source}</span>
                            <span>
                              Applied:{" "}
                              {new Date(
                                candidate.appliedDate
                              ).toLocaleDateString()}
                            </span>
                          </Space>
                        </div>
                        <div className="candidate-skills">
                          {candidate.skills.map((skill, index) => (
                            <Tag key={index} color="blue">
                              {skill}
                            </Tag>
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
