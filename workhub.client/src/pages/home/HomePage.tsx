import { wrapProtectedLoader } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { Card, Row, Col, Button, Typography, Space, Avatar, Badge } from "antd";

import "./HomePage.css";

const { Title, Text } = Typography;

export const loader = wrapProtectedLoader();

export function Component() {
  return (
    <DefaultPage>
      <DefaultHeader title="Welcome to WorkHub"></DefaultHeader>

      <DefaultContent>
        <div className="home-container">
          {/* Welcome Section */}
          <div className="welcome-section">
            <div className="welcome-content">
              <Title level={2} className="welcome-title">
                Good morning, Welcome back! 👋
              </Title>
              <Text className="welcome-subtitle">
                Here's what's happening with your team today
              </Text>
            </div>
            <div className="welcome-avatar">
              <Avatar size={64} style={{ backgroundColor: "#1890ff" }}>
                <IIonPeopleOutline style={{ fontSize: "32px" }} />
              </Avatar>
            </div>
          </div>

          {/* Quick Stats */}
          <Row gutter={[16, 16]} className="quick-stats-row">
            <Col xs={24} sm={12} md={6}>
              <Card className="quick-stat-card">
                <div className="stat-content">
                  <div className="stat-icon primary">
                    <IIonPeopleOutline />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">156</div>
                    <div className="stat-label">Team Members</div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="quick-stat-card">
                <div className="stat-content">
                  <div className="stat-icon success">
                    <IIonDocumentsOutline />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">24</div>
                    <div className="stat-label">Active Projects</div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="quick-stat-card">
                <div className="stat-content">
                  <div className="stat-icon secondary">
                    <IIonClock />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">2,847</div>
                    <div className="stat-label">Hours This Month</div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="quick-stat-card">
                <div className="stat-content">
                  <div className="stat-icon warning">
                    <IIonCubeOutline />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">89</div>
                    <div className="stat-label">Equipment Assets</div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Main Content Grid */}
          <Row gutter={[24, 24]}>
            {/* Quick Actions */}
            <Col xs={24} lg={12}>
              <Card title="Quick Actions" className="home-card">
                <div className="quick-actions-grid">
                  <Button
                    type="primary"
                    icon={<IIonDocumentsOutline />}
                    className="quick-action-btn"
                  >
                    Start New Project
                  </Button>
                  <Button
                    icon={<IIonPeopleOutline />}
                    className="quick-action-btn secondary"
                  >
                    Add Team Member
                  </Button>
                  <Button
                    icon={<IIonClock />}
                    className="quick-action-btn secondary"
                  >
                    Log Time
                  </Button>
                  <Button
                    icon={<IIonCubeOutline />}
                    className="quick-action-btn secondary"
                  >
                    Book Equipment
                  </Button>
                  <Button
                    icon={<IIonCalendarOutline />}
                    className="quick-action-btn secondary"
                  >
                    Schedule Meeting
                  </Button>
                  <Button
                    icon={<IIonBarChartOutline />}
                    className="quick-action-btn secondary"
                  >
                    View Reports
                  </Button>
                </div>
              </Card>
            </Col>

            {/* Recent Activity */}
            <Col xs={24} lg={12}>
              <Card title="Recent Activity" className="home-card">
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-dot success"></div>
                    <div className="activity-content">
                      <Text strong>
                        New project "E-commerce Platform" was created
                      </Text>
                      <Text type="secondary" className="activity-time">
                        2 hours ago
                      </Text>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot primary"></div>
                    <div className="activity-content">
                      <Text strong>
                        John Doe completed task "User Authentication"
                      </Text>
                      <Text type="secondary" className="activity-time">
                        4 hours ago
                      </Text>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot warning"></div>
                    <div className="activity-content">
                      <Text strong>Monthly timesheet approval is due</Text>
                      <Text type="secondary" className="activity-time">
                        1 day ago
                      </Text>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot secondary"></div>
                    <div className="activity-content">
                      <Text strong>Sarah Wilson joined the Design team</Text>
                      <Text type="secondary" className="activity-time">
                        2 days ago
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Quick Access Modules */}
          <div className="modules-section">
            <Title level={4} className="section-title">
              Quick Access
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Card
                  className="module-card"
                  onClick={() => (window.location.href = "/messages")}
                >
                  <div className="module-content">
                    <div className="module-icon primary">
                      <IIonChatbubbleOutline />
                    </div>
                    <div className="module-info">
                      <Text strong>Messages</Text>
                      <Text type="secondary">Team communication</Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Card
                  className="module-card"
                  onClick={() => (window.location.href = "/calendar")}
                >
                  <div className="module-content">
                    <div className="module-icon success">
                      <IIonCalendarOutline />
                    </div>
                    <div className="module-info">
                      <Text strong>Calendar</Text>
                      <Text type="secondary">Schedule & events</Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Card
                  className="module-card"
                  onClick={() => (window.location.href = "/meeting")}
                >
                  <div className="module-content">
                    <div className="module-icon secondary">
                      <IIonPeopleCircleOutline />
                    </div>
                    <div className="module-info">
                      <Text strong>Meetings</Text>
                      <Text type="secondary">Video conferences</Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Card
                  className="module-card"
                  onClick={() => (window.location.href = "/analytics")}
                >
                  <div className="module-content">
                    <div className="module-icon warning">
                      <IIonBarChartOutline />
                    </div>
                    <div className="module-info">
                      <Text strong>Analytics</Text>
                      <Text type="secondary">Reports & insights</Text>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
