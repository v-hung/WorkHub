import { wrapProtectedLoader } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import {
  Card,
  Row,
  Col,
  Statistic,
  Table,
  Tag,
  Skeleton,
  Progress,
  Avatar,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  projectApi,
  timesheetApi,
  userApi,
  teamApi,
} from "@/services/apiClient";
import "./DashboardPage.css";

const { Title, Text, Paragraph } = Typography;

interface ProjectStatus {
  name: string;
  value: number;
  color: string;
}

interface TimeTrackingData {
  date: string;
  hours: number;
  overtime: number;
}

interface TeamPerformance {
  team: string;
  completed: number;
  inProgress: number;
  pending: number;
}

export const loader = wrapProtectedLoader();

export function Component() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    totalUsers: 0,
    totalHours: 0,
  });

  const [projectStatus, setProjectStatus] = useState<ProjectStatus[]>([]);
  const [timeTracking, setTimeTracking] = useState<TimeTrackingData[]>([]);
  const [teamPerformance, setTeamPerformance] = useState<TeamPerformance[]>([]);
  const [recentProjects, setRecentProjects] = useState<any[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);

      // Load data in parallel
      const [projects, users, teams] = await Promise.all([
        projectApi.projectGetAll({}).catch(() => []),
        userApi.userGetAll({}).catch(() => []),
        teamApi.teamGetAll({}).catch(() => []),
      ]);

      // Calculate stats
      const totalProjects = projects.length || 0;
      const activeProjects =
        projects.filter((p: any) => p.status === "InProgress").length || 0;
      const completedProjects =
        projects.filter((p: any) => p.status === "Completed").length || 0;
      const pendingProjects =
        projects.filter((p: any) => p.status === "Pending").length || 0;

      setStats({
        totalProjects,
        activeProjects,
        totalUsers: users.length || 0,
        totalHours: 2847, // Mock data
      });

      // Project status distribution
      setProjectStatus([
        { name: "Active", value: activeProjects, color: "#6366f1" },
        { name: "Completed", value: completedProjects, color: "#10b981" },
        { name: "Pending", value: pendingProjects, color: "#f59e0b" },
      ]);

      // Time tracking data (last 7 days)
      setTimeTracking([
        { date: "Mon", hours: 8.5, overtime: 0.5 },
        { date: "Tue", hours: 8, overtime: 0 },
        { date: "Wed", hours: 9, overtime: 1 },
        { date: "Thu", hours: 8.5, overtime: 0.5 },
        { date: "Fri", hours: 8, overtime: 0 },
        { date: "Sat", hours: 4, overtime: 0 },
        { date: "Sun", hours: 0, overtime: 0 },
      ]);

      // Team performance
      const teamPerf: TeamPerformance[] = teams
        .slice(0, 5)
        .map((team: any) => ({
          team: team.name,
          completed: Math.floor(Math.random() * 20) + 5,
          inProgress: Math.floor(Math.random() * 15) + 3,
          pending: Math.floor(Math.random() * 10) + 1,
        }));
      setTeamPerformance(teamPerf);

      // Recent projects
      setRecentProjects(projects.slice(0, 5));
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const projectColumns = [
    {
      title: "Project Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const colors: Record<string, string> = {
          InProgress: "processing",
          Completed: "success",
          Pending: "warning",
          Cancelled: "error",
        };
        return <Tag color={colors[status] || "default"}>{status}</Tag>;
      },
    },
    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      render: (_: any, record: any) => {
        const progress = Math.random() * 100;
        return <Progress percent={Math.floor(progress)} size="small" />;
      },
    },
    {
      title: "Team Members",
      dataIndex: "memberCount",
      key: "memberCount",
      render: (count: number) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IIonPeopleOutline />
          <Text>{count || 0}</Text>
        </div>
      ),
    },
  ];

  return (
    <DefaultPage>
      <DefaultHeader title="Dashboard Analytics"></DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Dashboard" }]}
      />

      <DefaultContent>
        <div className="dashboard-container">
          {/* Key Metrics */}
          <Row gutter={[20, 20]} className="metrics-section">
            <Col xs={24} sm={12} lg={6}>
              <Card className="metric-card metric-primary" hoverable>
                {loading ? (
                  <Skeleton active paragraph={{ rows: 1 }} />
                ) : (
                  <div className="metric-content">
                    <div className="metric-icon">
                      <IIonDocumentsOutline />
                    </div>
                    <div className="metric-info">
                      <Statistic
                        value={stats.activeProjects}
                        valueStyle={{
                          color: "#6366f1",
                          fontSize: "32px",
                          fontWeight: 700,
                        }}
                      />
                      <Text className="metric-label">Active Projects</Text>
                      <div className="metric-trend">
                        <IIonTrendingUpOutline style={{ color: "#10b981" }} />
                        <Text type="secondary" style={{ fontSize: "12px" }}>
                          +12% from last month
                        </Text>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <Card className="metric-card metric-success" hoverable>
                {loading ? (
                  <Skeleton active paragraph={{ rows: 1 }} />
                ) : (
                  <div className="metric-content">
                    <div className="metric-icon">
                      <IIonPeopleOutline />
                    </div>
                    <div className="metric-info">
                      <Statistic
                        value={stats.totalUsers}
                        valueStyle={{
                          color: "#10b981",
                          fontSize: "32px",
                          fontWeight: 700,
                        }}
                      />
                      <Text className="metric-label">Team Members</Text>
                      <div className="metric-trend">
                        <IIonTrendingUpOutline style={{ color: "#10b981" }} />
                        <Text type="secondary" style={{ fontSize: "12px" }}>
                          +8 new this month
                        </Text>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <Card className="metric-card metric-warning" hoverable>
                {loading ? (
                  <Skeleton active paragraph={{ rows: 1 }} />
                ) : (
                  <div className="metric-content">
                    <div className="metric-icon">
                      <IIonTimeOutline />
                    </div>
                    <div className="metric-info">
                      <Statistic
                        value={stats.totalHours}
                        suffix="h"
                        valueStyle={{
                          color: "#f59e0b",
                          fontSize: "32px",
                          fontWeight: 700,
                        }}
                      />
                      <Text className="metric-label">Hours This Month</Text>
                      <div className="metric-trend">
                        <IIonTrendingUpOutline style={{ color: "#ef4444" }} />
                        <Text type="secondary" style={{ fontSize: "12px" }}>
                          -5% from last month
                        </Text>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <Card className="metric-card metric-info" hoverable>
                {loading ? (
                  <Skeleton active paragraph={{ rows: 1 }} />
                ) : (
                  <div className="metric-content">
                    <div className="metric-icon">
                      <IIonDocumentsOutline />
                    </div>
                    <div className="metric-info">
                      <Statistic
                        value={stats.totalProjects}
                        valueStyle={{
                          color: "#3b82f6",
                          fontSize: "32px",
                          fontWeight: 700,
                        }}
                      />
                      <Text className="metric-label">Total Projects</Text>
                      <div className="metric-trend">
                        <IIonTrendingUpOutline style={{ color: "#10b981" }} />
                        <Text type="secondary" style={{ fontSize: "12px" }}>
                          +3 from last month
                        </Text>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </Col>
          </Row>

          {/* Charts Section */}
          <Row gutter={[20, 20]} className="charts-section">
            {/* Time Tracking Chart */}
            <Col xs={24} lg={16}>
              <Card
                title={
                  <div className="card-title-wrapper">
                    <IIonBarChartOutline className="card-title-icon" />
                    <span>Weekly Time Tracking</span>
                  </div>
                }
                className="chart-card"
              >
                {loading ? (
                  <Skeleton active paragraph={{ rows: 6 }} />
                ) : (
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={timeTracking}>
                      <defs>
                        <linearGradient
                          id="colorHours"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#6366f1"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#6366f1"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="colorOvertime"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#f59e0b"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#f59e0b"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="date" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="hours"
                        stroke="#6366f1"
                        fillOpacity={1}
                        fill="url(#colorHours)"
                        name="Regular Hours"
                      />
                      <Area
                        type="monotone"
                        dataKey="overtime"
                        stroke="#f59e0b"
                        fillOpacity={1}
                        fill="url(#colorOvertime)"
                        name="Overtime"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </Card>
            </Col>

            {/* Project Status Distribution */}
            <Col xs={24} lg={8}>
              <Card
                title={
                  <div className="card-title-wrapper">
                    <IIonPieChartOutline className="card-title-icon" />
                    <span>Project Status</span>
                  </div>
                }
                className="chart-card"
              >
                {loading ? (
                  <Skeleton active paragraph={{ rows: 6 }} />
                ) : (
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={projectStatus as any}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name}: ${((percent || 0) * 100).toFixed(0)}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {projectStatus.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </Card>
            </Col>

            {/* Team Performance */}
            <Col xs={24}>
              <Card
                title={
                  <div className="card-title-wrapper">
                    <IIonBarChartOutline className="card-title-icon" />
                    <span>Team Performance</span>
                  </div>
                }
                className="chart-card"
              >
                {loading ? (
                  <Skeleton active paragraph={{ rows: 6 }} />
                ) : (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={teamPerformance}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="team" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="completed"
                        fill="#10b981"
                        name="Completed"
                      />
                      <Bar
                        dataKey="inProgress"
                        fill="#6366f1"
                        name="In Progress"
                      />
                      <Bar dataKey="pending" fill="#f59e0b" name="Pending" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </Card>
            </Col>

            {/* Recent Projects Table */}
            <Col xs={24}>
              <Card
                title={
                  <div className="card-title-wrapper">
                    <IIonDocumentsOutline className="card-title-icon" />
                    <span>Recent Projects</span>
                  </div>
                }
                className="chart-card"
              >
                {loading ? (
                  <Skeleton active paragraph={{ rows: 4 }} />
                ) : (
                  <Table
                    dataSource={recentProjects}
                    columns={projectColumns}
                    rowKey="id"
                    pagination={false}
                  />
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
