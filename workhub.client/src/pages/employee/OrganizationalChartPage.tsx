import { wrapProtectedLoader } from "@/utils/loader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import { Card, Tree, Avatar, Typography, Button, Select, Space } from "antd";
import { Permission } from "@/generate-api";
import "./OrganizationalChartPage.css";

const { Title, Text } = Typography;
const { Option } = Select;

export const loader = wrapProtectedLoader(
  undefined,
  Permission.PermissionsUsersView
);

// Mock organizational data
const organizationalData = [
  {
    title: "CEO - Nguyễn Văn Tổng",
    key: "ceo",
    icon: <IIonPersonOutline />,
    children: [
      {
        title: "CTO - Trần Thị Công nghệ",
        key: "cto",
        icon: <IIonPersonOutline />,
        children: [
          {
            title: "IT Department",
            key: "it-dept",
            icon: <IIonPeopleOutline />,
            children: [
              {
                title: "Senior Developer - Phạm Văn Dev",
                key: "dev1",
                icon: <IIonPersonOutline />,
              },
              {
                title: "UI/UX Designer - Lê Thị Design",
                key: "design1",
                icon: <IIonPersonOutline />,
              },
              {
                title: "QA Engineer - Hoàng Văn Test",
                key: "qa1",
                icon: <IIonPersonOutline />,
              },
            ],
          },
          {
            title: "DevOps Team",
            key: "devops",
            icon: <IIonPeopleOutline />,
            children: [
              {
                title: "DevOps Engineer - Vũ Văn Ops",
                key: "ops1",
                icon: <IIonPersonOutline />,
              },
              {
                title: "System Admin - Đặng Thị Admin",
                key: "admin1",
                icon: <IIonPersonOutline />,
              },
            ],
          },
        ],
      },
      {
        title: "CFO - Bùi Văn Tài chính",
        key: "cfo",
        icon: <IIonPersonOutline />,
        children: [
          {
            title: "Finance Department",
            key: "finance",
            icon: <IIonPeopleOutline />,
            children: [
              {
                title: "Accountant - Mai Thị Kế toán",
                key: "acc1",
                icon: <IIonPersonOutline />,
              },
              {
                title: "Financial Analyst - Đỗ Văn Phân tích",
                key: "analyst1",
                icon: <IIonPersonOutline />,
              },
            ],
          },
        ],
      },
      {
        title: "CMO - Ngô Thị Marketing",
        key: "cmo",
        icon: <IIonPersonOutline />,
        children: [
          {
            title: "Marketing Department",
            key: "marketing",
            icon: <IIonPeopleOutline />,
            children: [
              {
                title: "Marketing Manager - Phan Văn MKT",
                key: "mkt1",
                icon: <IIonPersonOutline />,
              },
              {
                title: "Content Creator - Lý Thị Content",
                key: "content1",
                icon: <IIonPersonOutline />,
              },
            ],
          },
        ],
      },
      {
        title: "COO - Tạ Văn Vận hành",
        key: "coo",
        icon: <IIonPersonOutline />,
        children: [
          {
            title: "Operations Department",
            key: "operations",
            icon: <IIonPeopleOutline />,
            children: [
              {
                title: "Operations Manager - Trịnh Văn Ops",
                key: "opsmgr1",
                icon: <IIonPersonOutline />,
              },
              {
                title: "HR Specialist - Cao Thị Nhân sự",
                key: "hr1",
                icon: <IIonPersonOutline />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export function Component() {
  const onSelect = (selectedKeys: any, info: any) => {
    console.log("selected", selectedKeys, info);
  };

  const onExpand = (expandedKeys: any, info: any) => {
    console.log("expanded", expandedKeys, info);
  };

  return (
    <DefaultPage>
      <DefaultHeader title="Organizational Chart">
        <Space>
          <Select defaultValue="all" style={{ width: 120 }}>
            <Option value="all">All Departments</Option>
            <Option value="it">IT Department</Option>
            <Option value="finance">Finance</Option>
            <Option value="marketing">Marketing</Option>
            <Option value="operations">Operations</Option>
          </Select>
          <Button type="primary" icon={<IIonChevronDownOutline />}>
            Export Chart
          </Button>
        </Space>
      </DefaultHeader>
      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "HR Management", path: "/hr" },
          { title: "Employees", path: "/employees" },
          { title: "Organizational Chart" },
        ]}
      />
      <DefaultContent>
        <div className="org-chart-container">
          <Card className="org-chart-card">
            <div className="org-chart-header">
              <Title level={3}>Company Organizational Structure</Title>
              <Text type="secondary">
                Click on any node to view employee details or expand/collapse
                departments
              </Text>
            </div>

            <div className="org-chart-tree">
              <Tree
                showIcon
                defaultExpandAll
                defaultSelectedKeys={["ceo"]}
                switcherIcon={<IIonChevronForward />}
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={organizationalData}
                className="custom-org-tree"
              />
            </div>

            <div className="org-chart-legend">
              <div className="legend-item">
                <IIonPersonOutline />
                <Text>Individual Employee</Text>
              </div>
              <div className="legend-item">
                <IIonPeopleOutline />
                <Text>Department/Team</Text>
              </div>
            </div>
          </Card>

          <Card className="org-chart-stats">
            <Title level={4}>Organization Statistics</Title>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">15</div>
                <div className="stat-label">Total Employees</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Departments</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">Executive Team</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6</div>
                <div className="stat-label">Teams</div>
              </div>
            </div>
          </Card>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
