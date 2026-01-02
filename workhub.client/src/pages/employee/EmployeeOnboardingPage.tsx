import { wrapProtectedLoader } from "@/utils/loader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import {
  Card,
  Steps,
  Button,
  List,
  Typography,
  Progress,
  Avatar,
  Tag,
  Space,
  Timeline,
} from "antd";
import { Permission } from "@/generate-api";
import "./EmployeeOnboardingPage.css";

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsUsersView
);

export function Component() {
  // Mock onboarding data
  const onboardingSteps = [
    {
      title: "HR Documentation",
      description: "Complete employment contract and paperwork",
      status: "finish" as const,
      icon: <IIonDocumentTextOutline />,
    },
    {
      title: "IT Setup",
      description: "Email, computer, and software access setup",
      status: "finish" as const,
      icon: <IIonSettingsOutline />,
    },
    {
      title: "Team Introduction",
      description: "Meet team members and manager",
      status: "process" as const,
      icon: <IIonPeopleOutline />,
    },
    {
      title: "Training Sessions",
      description: "Company policies and role-specific training",
      status: "wait" as const,
      icon: <IIonCheckmarkCircleOutline />,
    },
    {
      title: "First Week Review",
      description: "Feedback session and goal setting",
      status: "wait" as const,
      icon: <IIonTimeOutline />,
    },
  ];

  const newEmployees = [
    {
      id: 1,
      name: "Nguyễn Thị G",
      position: "Junior Developer",
      startDate: "2024-01-15",
      progress: 60,
      avatar: "/default-avatar.png",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Trần Văn H",
      position: "Marketing Coordinator",
      startDate: "2024-01-20",
      progress: 30,
      avatar: "/default-avatar.png",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Lê Thị I",
      position: "HR Assistant",
      startDate: "2024-01-10",
      progress: 100,
      avatar: "/default-avatar.png",
      status: "Completed",
    },
  ];

  const onboardingTasks = [
    "Complete employment contract",
    "Set up email account",
    "Configure computer and software",
    "Create employee ID badge",
    "Schedule team introduction meeting",
    "Assign workspace",
    "Provide company handbook",
    "Set up payroll information",
    "Complete background check",
    "Schedule orientation session",
  ];

  return (
    <DefaultPage>
      <DefaultHeader title="Employee Onboarding">
        <Button type="primary" icon={<IIonPersonAddOutline />}>
          Start New Onboarding
        </Button>
      </DefaultHeader>
      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "HR Management", path: "/hr" },
          { title: "Employees", path: "/employees" },
          { title: "Employee Onboarding" },
        ]}
      />
      <DefaultContent>
        <div className="onboarding-container">
          {/* Onboarding Overview */}
          <Card className="onboarding-overview">
            <Title level={3}>Onboarding Overview</Title>
            <div className="overview-stats">
              <div className="stat-box">
                <div className="stat-number">3</div>
                <div className="stat-label">Active Onboardings</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">1</div>
                <div className="stat-label">Completed This Month</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">95%</div>
                <div className="stat-label">Average Completion Rate</div>
              </div>
            </div>
          </Card>

          {/* Onboarding Process Steps */}
          <Card className="onboarding-process">
            <Title level={4}>Standard Onboarding Process</Title>
            <Steps current={2} size="small">
              {onboardingSteps.map((step, index) => (
                <Step
                  key={index}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  status={step.status}
                />
              ))}
            </Steps>
          </Card>

          {/* Current Onboardings */}
          <Card className="current-onboardings">
            <Title level={4}>Current Onboardings</Title>
            <List
              dataSource={newEmployees}
              renderItem={(employee) => (
                <List.Item
                  actions={[
                    <Button key="view" size="small">
                      View Details
                    </Button>,
                    <Button key="edit" size="small" type="primary">
                      Update Progress
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={employee.avatar}
                        icon={<IIonPersonAddOutline />}
                      />
                    }
                    title={
                      <div className="employee-item-title">
                        <span>{employee.name}</span>
                        <Tag
                          color={
                            employee.status === "Completed" ? "green" : "blue"
                          }
                        >
                          {employee.status}
                        </Tag>
                      </div>
                    }
                    description={
                      <div className="employee-item-desc">
                        <div>{employee.position}</div>
                        <div>
                          Start Date:{" "}
                          {new Date(employee.startDate).toLocaleDateString()}
                        </div>
                        <Progress
                          percent={employee.progress}
                          size="small"
                          status={
                            employee.progress === 100 ? "success" : "active"
                          }
                        />
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* Onboarding Checklist */}
          <Card className="onboarding-checklist">
            <Title level={4}>Onboarding Checklist</Title>
            <Paragraph>
              Use this checklist to ensure all necessary steps are completed for
              new employees.
            </Paragraph>
            <div className="checklist-items">
              {onboardingTasks.map((task, index) => (
                <div key={index} className="checklist-item">
                  <input type="checkbox" id={`task-${index}`} />
                  <label htmlFor={`task-${index}`}>{task}</label>
                </div>
              ))}
            </div>
          </Card>

          {/* Onboarding Timeline */}
          <Card className="onboarding-timeline">
            <Title level={4}>Sample Onboarding Timeline</Title>
            <Timeline mode="left">
              <Timeline.Item label="Day 1" color="green">
                <div className="timeline-content">
                  <strong>Welcome & Orientation</strong>
                  <p>Company tour, meet the team, HR paperwork</p>
                </div>
              </Timeline.Item>
              <Timeline.Item label="Week 1" color="blue">
                <div className="timeline-content">
                  <strong>Setup & Training</strong>
                  <p>IT setup, role-specific training, policy review</p>
                </div>
              </Timeline.Item>
              <Timeline.Item label="Week 2-4" color="orange">
                <div className="timeline-content">
                  <strong>Integration & Development</strong>
                  <p>Project assignments, mentorship, performance goals</p>
                </div>
              </Timeline.Item>
              <Timeline.Item label="Month 1" color="purple">
                <div className="timeline-content">
                  <strong>Review & Feedback</strong>
                  <p>First month review, feedback session, goal adjustment</p>
                </div>
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
