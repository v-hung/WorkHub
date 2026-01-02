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
  Calendar,
  Badge,
  Row,
  Col,
  Statistic,
  Select,
  Timeline,
} from "antd";
import { Permission } from "@/generate-api";
import "./InterviewsPage.css";

const { Title, Text } = Typography;
const { Option } = Select;

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsUsersView
);

export function Component() {
  // Mock interviews data
  const interviews = [
    {
      id: 1,
      candidateName: "Nguyễn Văn A",
      position: "Senior Frontend Developer",
      interviewer: "Trần Thị HR",
      date: "2024-01-25",
      time: "10:00 AM",
      type: "Technical Interview",
      status: "Scheduled",
      location: "Meeting Room A",
      round: "Round 1",
      avatar: "/default-avatar.png",
    },
    {
      id: 2,
      candidateName: "Trần Thị B",
      position: "UX/UI Designer",
      interviewer: "Lê Văn Manager",
      date: "2024-01-26",
      time: "2:00 PM",
      type: "Design Portfolio Review",
      status: "Completed",
      location: "Virtual",
      round: "Round 2",
      avatar: "/default-avatar.png",
    },
    {
      id: 3,
      candidateName: "Lê Văn C",
      position: "DevOps Engineer",
      interviewer: "Phạm Thị Lead",
      date: "2024-01-28",
      time: "11:00 AM",
      type: "Technical Interview",
      status: "Scheduled",
      location: "Meeting Room B",
      round: "Round 1",
      avatar: "/default-avatar.png",
    },
    {
      id: 4,
      candidateName: "Phạm Thị D",
      position: "Senior Frontend Developer",
      interviewer: "Hoàng Văn CTO",
      date: "2024-01-30",
      time: "3:00 PM",
      type: "Final Interview",
      status: "Scheduled",
      location: "Executive Room",
      round: "Final Round",
      avatar: "/default-avatar.png",
    },
  ];

  const stats = [
    { title: "Scheduled", value: 12, color: "#1890ff" },
    { title: "Completed", value: 8, color: "#52c41a" },
    { title: "This Week", value: 5, color: "#faad14" },
    { title: "Pending Feedback", value: 3, color: "#ff4d4f" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "blue";
      case "Completed":
        return "green";
      case "Cancelled":
        return "red";
      case "Rescheduled":
        return "orange";
      default:
        return "default";
    }
  };

  const upcomingInterviews = interviews.filter(
    (interview) => interview.status === "Scheduled"
  );

  return (
    <DefaultPage>
      <DefaultHeader title="Interviews">
        <Space>
          <Button type="primary" icon={<IIonAddOutline />}>
            Schedule Interview
          </Button>
          <Button icon={<IIonCalendarOutline />}>Calendar View</Button>
        </Space>
      </DefaultHeader>
      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "HR Management", path: "/hr" },
          { title: "Recruitment", path: "/recruitment" },
          { title: "Interviews" },
        ]}
      />
      <DefaultContent>
        <div className="interviews-container">
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

          {/* Upcoming Interviews */}
          <Card className="upcoming-interviews">
            <Title level={4}>Upcoming Interviews</Title>
            <List
              dataSource={upcomingInterviews}
              renderItem={(interview) => (
                <List.Item
                  actions={[
                    <Button key="view" icon={<IIonEyeOutline />} size="small">
                      View Details
                    </Button>,
                    <Button key="reschedule" size="small">
                      Reschedule
                    </Button>,
                    <Button key="feedback" type="primary" size="small">
                      Add Feedback
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={interview.avatar}
                        icon={<IIonPeopleOutline />}
                        size="large"
                      />
                    }
                    title={
                      <div className="interview-header">
                        <span className="candidate-name">
                          {interview.candidateName}
                        </span>
                        <Tag color={getStatusColor(interview.status)}>
                          {interview.status}
                        </Tag>
                      </div>
                    }
                    description={
                      <div className="interview-details">
                        <div className="interview-position">
                          {interview.position}
                        </div>
                        <div className="interview-schedule">
                          <Space>
                            <span>
                              <IIonCalendarOutline />{" "}
                              {new Date(interview.date).toLocaleDateString()}
                            </span>
                            <span>
                              <IIonTimeOutline /> {interview.time}
                            </span>
                            <span>
                              <IIonLocationOutline /> {interview.location}
                            </span>
                          </Space>
                        </div>
                        <div className="interview-meta">
                          <Space size="small">
                            <span>Interviewer: {interview.interviewer}</span>
                            <span>Type: {interview.type}</span>
                            <span>Round: {interview.round}</span>
                          </Space>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* Interview Timeline */}
          <Card className="interview-timeline">
            <Title level={4}>Interview Process Timeline</Title>
            <Timeline mode="left">
              <Timeline.Item label="Application Review" color="blue">
                <div className="timeline-content">
                  <strong>Initial Screening</strong>
                  <p>Review resumes and conduct initial phone screening</p>
                  <Text type="secondary">1-2 days</Text>
                </div>
              </Timeline.Item>
              <Timeline.Item label="Technical Interview" color="green">
                <div className="timeline-content">
                  <strong>Round 1: Technical Assessment</strong>
                  <p>Technical skills evaluation and coding challenges</p>
                  <Text type="secondary">1 week</Text>
                </div>
              </Timeline.Item>
              <Timeline.Item label="Manager Interview" color="orange">
                <div className="timeline-content">
                  <strong>Round 2: Team Fit</strong>
                  <p>Cultural fit assessment and team interaction</p>
                  <Text type="secondary">1 week</Text>
                </div>
              </Timeline.Item>
              <Timeline.Item label="Final Interview" color="purple">
                <div className="timeline-content">
                  <strong>Round 3: Executive Review</strong>
                  <p>Final decision and offer discussion</p>
                  <Text type="secondary">3-5 days</Text>
                </div>
              </Timeline.Item>
            </Timeline>
          </Card>

          {/* Interview Calendar Preview */}
          <Card className="interview-calendar">
            <Title level={4}>Interview Calendar</Title>
            <div className="calendar-preview">
              <div className="calendar-header">
                <Text strong>January 2024</Text>
              </div>
              <div className="calendar-grid">
                {Array.from({ length: 31 }, (_, i) => {
                  const day = i + 1;
                  const hasInterview = upcomingInterviews.some(
                    (interview) => new Date(interview.date).getDate() === day
                  );
                  return (
                    <div
                      key={day}
                      className={`calendar-day ${
                        hasInterview ? "has-interview" : ""
                      }`}
                    >
                      <span className="day-number">{day}</span>
                      {hasInterview && (
                        <div className="interview-indicator"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
