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
  Form,
  Input,
  DatePicker,
  Select,
  Checkbox,
} from "antd";
import { Permission } from "@/generate-api";
import "./EmployeeOffboardingPage.css";

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsUsersView
);

export function Component() {
  // Mock offboarding data
  const offboardingSteps = [
    {
      title: "Exit Interview",
      description: "Conduct exit interview and feedback collection",
      status: "finish" as const,
      icon: <IIonPeopleOutline />,
    },
    {
      title: "Knowledge Transfer",
      description: "Transfer knowledge and hand over responsibilities",
      status: "process" as const,
      icon: <IIonDocumentTextOutline />,
    },
    {
      title: "Asset Return",
      description: "Collect company property and equipment",
      status: "wait" as const,
      icon: <IIonSettingsOutline />,
    },
    {
      title: "Account Deactivation",
      description: "Disable access to systems and accounts",
      status: "wait" as const,
      icon: <IIonWarningOutline />,
    },
    {
      title: "Final Settlement",
      description: "Process final paycheck and benefits",
      status: "wait" as const,
      icon: <IIonCheckmarkCircleOutline />,
    },
  ];

  const departingEmployees = [
    {
      id: 1,
      name: "Hoàng Văn K",
      position: "Senior Developer",
      lastDay: "2024-01-31",
      progress: 75,
      avatar: "/default-avatar.png",
      status: "In Progress",
      reason: "Career Change",
    },
    {
      id: 2,
      name: "Đặng Thị L",
      position: "Marketing Manager",
      lastDay: "2024-02-15",
      progress: 40,
      avatar: "/default-avatar.png",
      status: "In Progress",
      reason: "Relocation",
    },
  ];

  const offboardingTasks = [
    "Schedule exit interview",
    "Notify team members",
    "Collect company assets (laptop, phone, etc.)",
    "Disable email and system access",
    "Transfer project responsibilities",
    "Update organizational charts",
    "Process final paycheck",
    "Cancel benefits and insurance",
    "Return employee ID badge",
    "Send farewell email",
  ];

  return (
    <DefaultPage>
      <DefaultHeader title="Employee Offboarding">
        <Space>
          <Button type="primary" icon={<IIonPersonRemoveOutline />}>
            Initiate Offboarding
          </Button>
          <Button icon={<IIonDocumentTextOutline />}>Generate Report</Button>
        </Space>
      </DefaultHeader>
      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "HR Management", path: "/hr" },
          { title: "Employees", path: "/employees" },
          { title: "Employee Offboarding" },
        ]}
      />
      <DefaultContent>
        <div className="offboarding-container">
          {/* Offboarding Overview */}
          <Card className="offboarding-overview">
            <Title level={3}>Offboarding Overview</Title>
            <div className="overview-stats">
              <div className="stat-box">
                <div className="stat-number">2</div>
                <div className="stat-label">Active Offboardings</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">3</div>
                <div className="stat-label">Completed This Quarter</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">88%</div>
                <div className="stat-label">Task Completion Rate</div>
              </div>
            </div>
          </Card>

          {/* Offboarding Process Steps */}
          <Card className="offboarding-process">
            <Title level={4}>Standard Offboarding Process</Title>
            <Steps current={1} size="small">
              {offboardingSteps.map((step, index) => (
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

          {/* Current Offboardings */}
          <Card className="current-offboardings">
            <Title level={4}>Current Offboardings</Title>
            <List
              dataSource={departingEmployees}
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
                        icon={<IIonPersonRemoveOutline />}
                      />
                    }
                    title={
                      <div className="employee-item-title">
                        <span>{employee.name}</span>
                        <Tag
                          color={
                            employee.status === "Completed" ? "green" : "orange"
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
                          Last Day:{" "}
                          {new Date(employee.lastDay).toLocaleDateString()}
                        </div>
                        <div>Reason: {employee.reason}</div>
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

          {/* Offboarding Checklist */}
          <Card className="offboarding-checklist">
            <Title level={4}>Offboarding Checklist</Title>
            <Paragraph>
              Ensure all necessary steps are completed before the employee's
              last day.
            </Paragraph>
            <div className="checklist-items">
              {offboardingTasks.map((task, index) => (
                <div key={index} className="checklist-item">
                  <input type="checkbox" id={`off-task-${index}`} />
                  <label htmlFor={`off-task-${index}`}>{task}</label>
                </div>
              ))}
            </div>
          </Card>

          {/* Initiate Offboarding Form */}
          <Card className="initiate-offboarding">
            <Title level={4}>Initiate New Offboarding</Title>
            <Form layout="vertical">
              <Form.Item label="Employee Name" required>
                <Select placeholder="Select employee">
                  <Option value="emp1">Nguyễn Văn A</Option>
                  <Option value="emp2">Trần Thị B</Option>
                  <Option value="emp3">Lê Văn C</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Last Working Day" required>
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item label="Reason for Leaving" required>
                <Select placeholder="Select reason">
                  <Option value="resignation">Resignation</Option>
                  <Option value="termination">Termination</Option>
                  <Option value="retirement">Retirement</Option>
                  <Option value="layoff">Layoff</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Additional Notes">
                <TextArea
                  rows={3}
                  placeholder="Any additional information..."
                />
              </Form.Item>

              <Form.Item>
                <Checkbox>Notify team members about the departure</Checkbox>
              </Form.Item>

              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Initiate Offboarding Process
                  </Button>
                  <Button>Cancel</Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>

          {/* Offboarding Timeline */}
          <Card className="offboarding-timeline">
            <Title level={4}>Sample Offboarding Timeline</Title>
            <Timeline mode="left">
              <Timeline.Item label="2 Weeks Before" color="blue">
                <div className="timeline-content">
                  <strong>Preparation Phase</strong>
                  <p>
                    Schedule exit interview, notify stakeholders, begin
                    knowledge transfer
                  </p>
                </div>
              </Timeline.Item>
              <Timeline.Item label="Last Week" color="orange">
                <div className="timeline-content">
                  <strong>Transition Phase</strong>
                  <p>
                    Complete handover, collect assets, conduct exit interview
                  </p>
                </div>
              </Timeline.Item>
              <Timeline.Item label="Last Day" color="red">
                <div className="timeline-content">
                  <strong>Departure</strong>
                  <p>
                    Final paperwork, farewell activities, account deactivation
                  </p>
                </div>
              </Timeline.Item>
              <Timeline.Item label="Post-Departure" color="green">
                <div className="timeline-content">
                  <strong>Follow-up</strong>
                  <p>
                    Process final compensation, send farewell communications
                  </p>
                </div>
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
