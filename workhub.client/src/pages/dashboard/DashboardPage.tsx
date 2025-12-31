import { wrapProtectedLoader } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { Card, Row, Col, Statistic, Progress } from "antd";
import "./DashboardPage.css";

export const loader = wrapProtectedLoader();

export function Component() {
  return (
    <DefaultPage>
      <DefaultHeader title="Dashboard Overview"></DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Dashboard" }]}
      />

      <DefaultContent>
        <div className="dashboard-container">
          {/* Key Metrics Row */}
          <Row gutter={[16, 16]} className="metrics-row">
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card>
                <Statistic
                  title="Total Employees"
                  value={156}
                  prefix={<IIonPeopleOutline />}
                  valueStyle={{ color: "#3f8600" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card>
                <Statistic
                  title="Active Projects"
                  value={24}
                  prefix={<IIonDocumentsOutline />}
                  valueStyle={{ color: "#1890ff" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card>
                <Statistic
                  title="Hours This Month"
                  value={2847}
                  prefix={<IIonClock />}
                  valueStyle={{ color: "#722ed1" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card>
                <Statistic
                  title="Equipment Assets"
                  value={89}
                  prefix={<IIonCubeOutline />}
                  valueStyle={{ color: "#fa8c16" }}
                />
              </Card>
            </Col>
          </Row>

          {/* Charts and Analytics Row */}
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <Card title="Project Progress" className="dashboard-card">
                <div className="progress-list">
                  <div className="progress-item">
                    <div className="progress-header">
                      <span>Website Redesign</span>
                      <span>75%</span>
                    </div>
                    <Progress percent={75} status="active" />
                  </div>
                  <div className="progress-item">
                    <div className="progress-header">
                      <span>Mobile App Development</span>
                      <span>45%</span>
                    </div>
                    <Progress percent={45} status="active" />
                  </div>
                  <div className="progress-item">
                    <div className="progress-header">
                      <span>API Integration</span>
                      <span>90%</span>
                    </div>
                    <Progress percent={90} status="success" />
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card title="Department Overview" className="dashboard-card">
                <div className="department-list">
                  <div className="department-item">
                    <span>Development</span>
                    <div className="department-count">
                      <IIonPeopleOutline />
                      <span>42</span>
                    </div>
                  </div>
                  <div className="department-item">
                    <span>Design</span>
                    <div className="department-count">
                      <IIonPeopleOutline />
                      <span>18</span>
                    </div>
                  </div>
                  <div className="department-item">
                    <span>Marketing</span>
                    <div className="department-count">
                      <IIonPeopleOutline />
                      <span>25</span>
                    </div>
                  </div>
                  <div className="department-item">
                    <span>HR</span>
                    <div className="department-count">
                      <IIonPeopleOutline />
                      <span>12</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Recent Activities */}
          <Row gutter={[16, 16]} className="activities-row">
            <Col xs={24} lg={12}>
              <Card title="Recent Activities" className="dashboard-card">
                <div className="activities-list">
                  <div className="activity-item">
                    <div className="activity-dot primary"></div>
                    <div className="activity-content">
                      <p className="activity-title">
                        New project "E-commerce Platform" created
                      </p>
                      <p className="activity-time">2 hours ago</p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot success"></div>
                    <div className="activity-content">
                      <p className="activity-title">
                        John Doe completed task "User Authentication"
                      </p>
                      <p className="activity-time">4 hours ago</p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot warning"></div>
                    <div className="activity-content">
                      <p className="activity-title">
                        Monthly timesheet approval due
                      </p>
                      <p className="activity-time">1 day ago</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card title="Quick Actions" className="dashboard-card">
                <div className="quick-actions-grid">
                  <button className="quick-action-button">
                    <IIonDocumentsOutline className="quick-action-icon primary" />
                    <span className="quick-action-label">Create Project</span>
                  </button>
                  <button className="quick-action-button">
                    <IIonPeopleOutline className="quick-action-icon success" />
                    <span className="quick-action-label">Add Employee</span>
                  </button>
                  <button className="quick-action-button">
                    <IIonClock className="quick-action-icon secondary" />
                    <span className="quick-action-label">Log Time</span>
                  </button>
                  <button className="quick-action-button">
                    <IIonCubeOutline className="quick-action-icon warning" />
                    <span className="quick-action-label">Book Equipment</span>
                  </button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
