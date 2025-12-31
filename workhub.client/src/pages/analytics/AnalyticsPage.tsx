import { useState } from "react";
import { wrapProtectedLoader } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import {
  Card,
  Row,
  Col,
  Select,
  DatePicker,
  Button,
  Table,
  Tabs,
  Space,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import "./AnalyticsPage.css";

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

interface AnalyticsData {
  key: string;
  metric: string;
  value: number;
  change: number;
  trend: "up" | "down" | "stable";
}

export const loader = wrapProtectedLoader();

export function Component() {
  const [dateRange, setDateRange] = useState<[string, string]>([
    "2024-01-01",
    "2024-12-31",
  ]);
  const [selectedMetric, setSelectedMetric] = useState("all");

  const analyticsData: AnalyticsData[] = [
    {
      key: "1",
      metric: "Total Hours Logged",
      value: 15420,
      change: 12.5,
      trend: "up",
    },
    {
      key: "2",
      metric: "Projects Completed",
      value: 28,
      change: 8.3,
      trend: "up",
    },
    {
      key: "3",
      metric: "Employee Productivity",
      value: 87.5,
      change: -2.1,
      trend: "down",
    },
    {
      key: "4",
      metric: "Equipment Utilization",
      value: 73.2,
      change: 5.7,
      trend: "up",
    },
    {
      key: "5",
      metric: "Budget Variance",
      value: -3.2,
      change: 1.8,
      trend: "up",
    },
  ];

  const columns: ColumnsType<AnalyticsData> = [
    {
      title: "Metric",
      dataIndex: "metric",
      key: "metric",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (value, record) => {
        if (record.metric.includes("Hours"))
          return `${value.toLocaleString()} hours`;
        if (record.metric.includes("Projects")) return value;
        if (record.metric.includes("%")) return `${value}%`;
        if (record.metric.includes("Budget")) return `${value}%`;
        return value;
      },
    },
    {
      title: "Change",
      dataIndex: "change",
      key: "change",
      render: (change, record) => (
        <span
          className={`trend-indicator ${
            record.trend === "up"
              ? "positive"
              : record.trend === "down"
              ? "negative"
              : "neutral"
          }`}
        >
          <IIonTrendingUpOutline
            className={`trend-icon ${record.trend === "down" ? "down" : ""}`}
          />
          {change > 0 ? "+" : ""}
          {change}%
        </span>
      ),
    },
  ];

  return (
    <DefaultPage>
      <DefaultHeader title="Analytics & Reports">
        <Space>
          <Button icon={<IIonDownloadOutline />} type="primary">
            Export Report
          </Button>
        </Space>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Dashboard", path: "/dashboard" },
          { title: "Analytics" },
        ]}
      />

      <DefaultContent>
        <div className="analytics-container">
          {/* Filters */}
          <Card className="analytics-filters">
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} sm={12} md={6}>
                <div className="filter-group">
                  <label>Date Range</label>
                  <RangePicker
                    className="w-full"
                    onChange={(dates) => {
                      if (dates) {
                        setDateRange([
                          dates[0]?.format("YYYY-MM-DD") || "",
                          dates[1]?.format("YYYY-MM-DD") || "",
                        ]);
                      }
                    }}
                  />
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="filter-group">
                  <label>Metric Category</label>
                  <Select
                    className="w-full"
                    value={selectedMetric}
                    onChange={setSelectedMetric}
                    options={[
                      { value: "all", label: "All Metrics" },
                      { value: "hr", label: "Human Resources" },
                      { value: "project", label: "Project Management" },
                      { value: "finance", label: "Finance" },
                      { value: "operations", label: "Operations" },
                    ]}
                  />
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="filter-group">
                  <label>Department</label>
                  <Select
                    className="w-full"
                    placeholder="All Departments"
                    options={[
                      { value: "all", label: "All Departments" },
                      { value: "development", label: "Development" },
                      { value: "design", label: "Design" },
                      { value: "marketing", label: "Marketing" },
                      { value: "hr", label: "HR" },
                    ]}
                  />
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Button type="primary" className="apply-button">
                  Apply Filters
                </Button>
              </Col>
            </Row>
          </Card>

          {/* Analytics Tabs */}
          <Tabs defaultActiveKey="overview" className="analytics-tabs">
            <TabPane tab="Overview" key="overview">
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={16}>
                  <Card
                    title="Key Performance Indicators"
                    className="analytics-card"
                  >
                    <Table
                      columns={columns}
                      dataSource={analyticsData}
                      pagination={false}
                      size="small"
                      className="analytics-table"
                    />
                  </Card>
                </Col>
                <Col xs={24} lg={8}>
                  <Card title="Quick Stats" className="analytics-card">
                    <div className="quick-stats">
                      <div className="quick-stats-item">
                        <div className="quick-stats-number primary">94.2%</div>
                        <div className="quick-stats-label">
                          On-Time Delivery
                        </div>
                      </div>
                      <div className="quick-stats-item">
                        <div className="quick-stats-number success">87.5%</div>
                        <div className="quick-stats-label">
                          Resource Utilization
                        </div>
                      </div>
                      <div className="quick-stats-item">
                        <div className="quick-stats-number secondary">
                          4.8/5
                        </div>
                        <div className="quick-stats-label">
                          Employee Satisfaction
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="HR Analytics" key="hr">
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Card
                    title="Employee Distribution"
                    className="analytics-card"
                  >
                    <div className="analytics-list">
                      <div className="analytics-list-item">
                        <span>Development</span>
                        <span className="analytics-list-value">42 (26.9%)</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Design</span>
                        <span className="analytics-list-value">18 (11.5%)</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Marketing</span>
                        <span className="analytics-list-value">25 (16.0%)</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Operations</span>
                        <span className="analytics-list-value">35 (22.4%)</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Management</span>
                        <span className="analytics-list-value">36 (23.1%)</span>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={12}>
                  <Card title="Attendance Overview" className="analytics-card">
                    <div className="analytics-list">
                      <div className="analytics-list-item">
                        <span>Average Working Hours</span>
                        <span className="analytics-list-value">
                          8.2 hrs/day
                        </span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Absenteeism Rate</span>
                        <span className="analytics-list-value">3.2%</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Overtime Hours</span>
                        <span className="analytics-list-value">245 hrs</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Leave Balance</span>
                        <span className="analytics-list-value">1,420 days</span>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Project Analytics" key="projects">
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <Card title="Project Status" className="analytics-card">
                    <div className="analytics-list">
                      <div className="analytics-list-item">
                        <span>On Track</span>
                        <span className="analytics-list-value success">18</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>At Risk</span>
                        <span className="analytics-list-value warning">4</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Delayed</span>
                        <span className="analytics-list-value error">2</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Completed</span>
                        <span className="analytics-list-value primary">28</span>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card title="Resource Allocation" className="analytics-card">
                    <div className="analytics-list">
                      <div className="analytics-list-item">
                        <span>Utilized</span>
                        <span className="analytics-list-value">87.5%</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Available</span>
                        <span className="analytics-list-value">12.5%</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Overallocated</span>
                        <span className="analytics-list-value error">2.1%</span>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card title="Budget Performance" className="analytics-card">
                    <div className="analytics-list">
                      <div className="analytics-list-item">
                        <span>On Budget</span>
                        <span className="analytics-list-value success">21</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Over Budget</span>
                        <span className="analytics-list-value error">3</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Under Budget</span>
                        <span className="analytics-list-value primary">8</span>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Financial Analytics" key="finance">
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Card title="Revenue vs Expenses" className="analytics-card">
                    <div className="analytics-list">
                      <div className="analytics-list-item">
                        <span>Total Revenue</span>
                        <span className="analytics-list-value success">
                          $2,450,000
                        </span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Total Expenses</span>
                        <span className="analytics-list-value error">
                          $1,890,000
                        </span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Net Profit</span>
                        <span className="analytics-list-value primary">
                          $560,000
                        </span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Profit Margin</span>
                        <span className="analytics-list-value">22.9%</span>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={12}>
                  <Card title="Cost Breakdown" className="analytics-card">
                    <div className="analytics-list">
                      <div className="analytics-list-item">
                        <span>Personnel Costs</span>
                        <span className="analytics-list-value">65.2%</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Equipment & Assets</span>
                        <span className="analytics-list-value">18.7%</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Facilities</span>
                        <span className="analytics-list-value">8.1%</span>
                      </div>
                      <div className="analytics-list-item">
                        <span>Other Expenses</span>
                        <span className="analytics-list-value">8.0%</span>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
