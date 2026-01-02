import { wrapProtectedLoader } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import {
  Card,
  Row,
  Col,
  Typography,
  Skeleton,
  Tag,
  List,
  Progress,
  Empty,
  Badge,
  Tooltip,
} from "antd";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { projectApi, notificationApi } from "@/services/apiClient";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  subMonths,
} from "date-fns";
import { useNavigate } from "react-router";

import "./HomePage.css";

const { Title, Text } = Typography;

interface AttendanceData {
  date: string;
  hours: number;
  status: "present" | "absent" | "late" | "leave";
}

interface TaskItem {
  id: string;
  title: string;
  project: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  status: "todo" | "inProgress" | "completed";
}

export const loader = wrapProtectedLoader();

export function Component() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);
  const [myTasks, setMyTasks] = useState<TaskItem[]>([]);
  const [stats, setStats] = useState({
    todayHours: 0,
    weekHours: 0,
    monthHours: 0,
    tasksTotal: 0,
    tasksUrgent: 0,
    tasksCompleted: 0,
  });

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      setLoading(true);

      // Load data
      const [projects, notifications] = await Promise.all([
        projectApi.projectGetAll({}).catch(() => []),
        notificationApi.notificationSearch({}).catch(() => ({ data: [] })),
      ]);

      // Mock attendance data (replace with real API)
      const mockAttendance = generateMockAttendance();
      setAttendanceData(mockAttendance);

      // Mock tasks (replace with real API)
      const mockTasks: TaskItem[] = [
        {
          id: "1",
          title: "Complete authentication module",
          project: "E-commerce Platform",
          priority: "high",
          dueDate: format(new Date(), "yyyy-MM-dd"),
          status: "inProgress",
        },
        {
          id: "2",
          title: "Review pull requests",
          project: "Mobile App",
          priority: "medium",
          dueDate: format(new Date(Date.now() + 86400000), "yyyy-MM-dd"),
          status: "todo",
        },
        {
          id: "3",
          title: "Update documentation",
          project: "API Service",
          priority: "low",
          dueDate: format(new Date(Date.now() + 172800000), "yyyy-MM-dd"),
          status: "todo",
        },
      ];
      setMyTasks(mockTasks);

      // Calculate stats
      const todayAttendance = mockAttendance.find(
        (a) => a.date === format(new Date(), "yyyy-MM-dd")
      );
      setStats({
        todayHours: todayAttendance?.hours || 0,
        weekHours: 42,
        monthHours: 168,
        tasksTotal: mockTasks.length,
        tasksUrgent: mockTasks.filter((t) => t.priority === "high").length,
        tasksCompleted: mockTasks.filter((t) => t.status === "completed")
          .length,
      });
    } catch (error) {
      console.error("Failed to load home data:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateMockAttendance = (): AttendanceData[] => {
    const start = startOfMonth(subMonths(new Date(), 2));
    const end = endOfMonth(new Date());
    const days = eachDayOfInterval({ start, end });

    return days.map((day) => {
      const dayOfWeek = day.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      if (isWeekend) {
        return {
          date: format(day, "yyyy-MM-dd"),
          hours: 0,
          status: "absent" as const,
        };
      }

      const random = Math.random();
      if (random < 0.1) {
        return {
          date: format(day, "yyyy-MM-dd"),
          hours: 0,
          status: "leave" as const,
        };
      } else if (random < 0.2) {
        return {
          date: format(day, "yyyy-MM-dd"),
          hours: 6,
          status: "late" as const,
        };
      } else {
        return {
          date: format(day, "yyyy-MM-dd"),
          hours: 8 + Math.random() * 2,
          status: "present" as const,
        };
      }
    });
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "error";
      case "medium":
        return "warning";
      case "low":
        return "default";
      default:
        return "default";
    }
  };

  const getAttendanceColor = (hours: number) => {
    if (hours === 0) return "#e5e7eb";
    if (hours < 4) return "#fecaca";
    if (hours < 8) return "#fed7aa";
    if (hours < 9) return "#a5f3fc";
    return "#86efac";
  };

  const renderAttendanceHeatmap = () => {
    const months = [
      subMonths(new Date(), 2),
      subMonths(new Date(), 1),
      new Date(),
    ];

    return (
      <div className="heatmap-container">
        {months.map((month, idx) => (
          <div key={idx} className="heatmap-month">
            <div className="heatmap-month-title">
              {format(month, "MMMM yyyy")}
            </div>
            <div className="heatmap-grid">
              <div className="heatmap-days-header">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <div key={day} className="heatmap-day-label">
                      {day}
                    </div>
                  )
                )}
              </div>
              <div className="heatmap-cells">
                {attendanceData
                  .filter((a) => {
                    const date = new Date(a.date);
                    return (
                      date.getMonth() === month.getMonth() &&
                      date.getFullYear() === month.getFullYear()
                    );
                  })
                  .map((attendance) => (
                    <Tooltip
                      key={attendance.date}
                      title={`${format(
                        new Date(attendance.date),
                        "MMM dd, yyyy"
                      )}: ${attendance.hours.toFixed(1)}h - ${
                        attendance.status
                      }`}
                    >
                      <div
                        className="heatmap-cell"
                        style={{
                          backgroundColor: getAttendanceColor(attendance.hours),
                        }}
                      />
                    </Tooltip>
                  ))}
              </div>
            </div>
          </div>
        ))}
        <div className="heatmap-legend">
          <span>Less</span>
          <div
            className="heatmap-legend-cell"
            style={{ backgroundColor: "#e5e7eb" }}
          />
          <div
            className="heatmap-legend-cell"
            style={{ backgroundColor: "#fecaca" }}
          />
          <div
            className="heatmap-legend-cell"
            style={{ backgroundColor: "#fed7aa" }}
          />
          <div
            className="heatmap-legend-cell"
            style={{ backgroundColor: "#a5f3fc" }}
          />
          <div
            className="heatmap-legend-cell"
            style={{ backgroundColor: "#86efac" }}
          />
          <span>More</span>
        </div>
      </div>
    );
  };

  return (
    <DefaultPage>
      <DefaultHeader title="Dashboard"></DefaultHeader>

      <DefaultContent>
        <div className="home-container">
          {/* Welcome Section */}
          <div className="welcome-banner">
            <div>
              <Title level={3} className="welcome-title">
                {getGreeting()}, {user?.fullName}!
              </Title>
              <Text className="welcome-subtitle">
                {format(new Date(), "EEEE, MMMM dd, yyyy")}
              </Text>
            </div>
          </div>

          {/* Quick Stats */}
          <Row gutter={[16, 16]} className="stats-row">
            <Col xs={12} sm={6}>
              <Card className="stat-card" hoverable>
                <div className="stat-value">{stats.todayHours.toFixed(1)}h</div>
                <div className="stat-label">Today</div>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="stat-card" hoverable>
                <div className="stat-value">{stats.weekHours}h</div>
                <div className="stat-label">This Week</div>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="stat-card" hoverable>
                <div className="stat-value">{stats.monthHours}h</div>
                <div className="stat-label">This Month</div>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="stat-card" hoverable>
                <div className="stat-value">
                  {stats.tasksCompleted}/{stats.tasksTotal}
                </div>
                <div className="stat-label">Tasks</div>
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            {/* My Tasks */}
            <Col xs={24} lg={14}>
              <Card
                title={
                  <div className="card-title">
                    <span>My Tasks</span>
                    {stats.tasksUrgent > 0 && (
                      <Badge count={stats.tasksUrgent} offset={[10, 0]}>
                        <Tag color="error">Urgent</Tag>
                      </Badge>
                    )}
                  </div>
                }
                className="tasks-card"
                extra={
                  <a onClick={() => navigate("/my-timesheet")}>View All</a>
                }
              >
                {loading ? (
                  <Skeleton active paragraph={{ rows: 3 }} />
                ) : myTasks.length > 0 ? (
                  <List
                    dataSource={myTasks}
                    renderItem={(task) => (
                      <List.Item
                        className="task-item"
                        actions={[
                          <Tag color={getPriorityColor(task.priority)}>
                            {task.priority}
                          </Tag>,
                        ]}
                      >
                        <List.Item.Meta
                          avatar={
                            <div
                              className={`task-status task-status-${task.status}`}
                            >
                              {task.status === "completed" ? (
                                <IIonCheckmarkCircleOutline />
                              ) : (
                                <IIonTimeOutline />
                              )}
                            </div>
                          }
                          title={
                            <span className="task-title">{task.title}</span>
                          }
                          description={
                            <div className="task-meta">
                              <Text type="secondary">{task.project}</Text>
                              <Text type="secondary">•</Text>
                              <Text type="secondary">
                                Due: {format(new Date(task.dueDate), "MMM dd")}
                              </Text>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                ) : (
                  <Empty description="No tasks assigned" />
                )}
              </Card>
            </Col>

            {/* Attendance Heatmap */}
            <Col xs={24} lg={10}>
              <Card title="Attendance Overview" className="attendance-card">
                {loading ? (
                  <Skeleton active paragraph={{ rows: 4 }} />
                ) : (
                  renderAttendanceHeatmap()
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
