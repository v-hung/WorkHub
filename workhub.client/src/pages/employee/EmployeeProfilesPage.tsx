import { wrapProtectedLoader } from "@/utils/loader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import {
  Card,
  Row,
  Col,
  Avatar,
  Typography,
  Button,
  Tag,
  Space,
  Statistic,
} from "antd";
import { Permission } from "@/generate-api";
import "./EmployeeProfilesPage.css";

const { Title, Text, Paragraph } = Typography;

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsUsersView
);

export function Component() {
  // Mock data - in real app, this would come from API
  const employeeProfiles = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      position: "Senior Developer",
      department: "IT Department",
      email: "nguyenvana@company.com",
      phone: "+84 123 456 789",
      location: "Hanoi, Vietnam",
      joinDate: "2022-01-15",
      manager: "Trần Thị B",
      skills: ["React", "TypeScript", "Node.js", "Python"],
      projects: 5,
      experience: "5 years",
      avatar: "/default-avatar.png",
    },
    {
      id: 2,
      name: "Trần Thị C",
      position: "Project Manager",
      department: "Project Management",
      email: "tranthic@company.com",
      phone: "+84 987 654 321",
      location: "Ho Chi Minh City, Vietnam",
      joinDate: "2021-06-01",
      manager: "Lê Văn D",
      skills: ["Agile", "Scrum", "Jira", "Risk Management"],
      projects: 8,
      experience: "7 years",
      avatar: "/default-avatar.png",
    },
    {
      id: 3,
      name: "Phạm Văn E",
      position: "UI/UX Designer",
      department: "Design Team",
      email: "phamvane@company.com",
      phone: "+84 555 666 777",
      location: "Da Nang, Vietnam",
      joinDate: "2023-03-10",
      manager: "Nguyễn Thị F",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      projects: 3,
      experience: "3 years",
      avatar: "/default-avatar.png",
    },
  ];

  return (
    <DefaultPage>
      <DefaultHeader title="Employee Profiles" />
      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "HR Management", path: "/hr" },
          { title: "Employees", path: "/employees" },
          { title: "Employee Profiles" },
        ]}
      />
      <DefaultContent>
        <div className="employee-profiles-container">
          <Row gutter={[24, 24]}>
            {employeeProfiles.map((employee) => (
              <Col xs={24} sm={12} lg={8} key={employee.id}>
                <Card className="employee-profile-card" hoverable>
                  <div className="employee-profile-header">
                    <Avatar
                      size={64}
                      src={employee.avatar}
                      icon={<IIonPersonOutline />}
                    />
                    <div className="employee-basic-info">
                      <Title level={4} className="employee-name">
                        {employee.name}
                      </Title>
                      <Text className="employee-position">
                        {employee.position}
                      </Text>
                      <Text className="employee-department">
                        {employee.department}
                      </Text>
                    </div>
                  </div>

                  <div className="employee-contact-info">
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: "100%" }}
                    >
                      <div className="contact-item">
                        <IIonMailOutline />
                        <Text>{employee.email}</Text>
                      </div>
                      <div className="contact-item">
                        <IIonCallOutline />
                        <Text>{employee.phone}</Text>
                      </div>
                      <div className="contact-item">
                        <IIonLocationOutline />
                        <Text>{employee.location}</Text>
                      </div>
                    </Space>
                  </div>

                  <div className="employee-details">
                    <Row gutter={16}>
                      <Col span={12}>
                        <Statistic
                          title="Projects"
                          value={employee.projects}
                          prefix={<IIonDocumentTextOutline />}
                          valueStyle={{ fontSize: "18px" }}
                        />
                      </Col>
                      <Col span={12}>
                        <Statistic
                          title="Experience"
                          value={employee.experience}
                          prefix={<IIonBriefcaseOutline />}
                          valueStyle={{ fontSize: "18px" }}
                        />
                      </Col>
                    </Row>

                    <div className="employee-manager">
                      <Text strong>Manager: </Text>
                      <Text>{employee.manager}</Text>
                    </div>

                    <div className="employee-join-date">
                      <IIonCalendarOutline />
                      <Text>
                        Joined:{" "}
                        {new Date(employee.joinDate).toLocaleDateString()}
                      </Text>
                    </div>
                  </div>

                  <div className="employee-skills">
                    <Text strong>Skills:</Text>
                    <div className="skills-tags">
                      {employee.skills.map((skill, index) => (
                        <Tag key={index} color="blue">
                          {skill}
                        </Tag>
                      ))}
                    </div>
                  </div>

                  <div className="employee-actions">
                    <Button type="primary" size="small">
                      View Details
                    </Button>
                    <Button size="small">Edit Profile</Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
