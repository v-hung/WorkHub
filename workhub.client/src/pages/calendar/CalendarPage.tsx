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
  Badge,
  Button,
  Select,
  Space,
  Tag,
  List,
  Avatar,
  Typography,
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Radio,
} from "antd";

import {
  format,
  isSameDay,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";
import "./CalendarPage.css";
import Calendar from "@/ui/form/Calendar";

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  type: "meeting" | "project" | "deadline" | "personal" | "holiday";
  priority: "low" | "medium" | "high" | "urgent";
  attendees?: string[];
  location?: string;
  projectId?: string;
  color: string;
}

export const loader = wrapProtectedLoader();

export function Component() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"month" | "week" | "day">("month");
  const [filterType, setFilterType] = useState<string>("all");
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Mock events data
  const events: CalendarEvent[] = [
    {
      id: "1",
      title: "Team Standup Meeting",
      description: "Daily standup with development team",
      startDate: new Date(2024, 11, 31, 9, 0),
      endDate: new Date(2024, 11, 31, 9, 30),
      type: "meeting",
      priority: "medium",
      attendees: ["John Doe", "Sarah Wilson", "Mike Johnson"],
      location: "Conference Room A",
      color: "#1890ff",
    },
    {
      id: "2",
      title: "Project Alpha Deadline",
      description: "Final delivery of Project Alpha",
      startDate: new Date(2024, 11, 31, 17, 0),
      endDate: new Date(2024, 11, 31, 17, 0),
      type: "deadline",
      priority: "high",
      projectId: "alpha-001",
      color: "#ff4d4f",
    },
    {
      id: "3",
      title: "Client Presentation",
      description: "Present Q4 results to client",
      startDate: new Date(2024, 12, 2, 14, 0),
      endDate: new Date(2024, 12, 2, 15, 30),
      type: "meeting",
      priority: "high",
      attendees: ["John Doe", "Client Team"],
      location: "Virtual Meeting",
      color: "#52c41a",
    },
    {
      id: "4",
      title: "Code Review Session",
      description: "Review pull requests for sprint",
      startDate: new Date(2024, 12, 1, 10, 0),
      endDate: new Date(2024, 12, 1, 11, 0),
      type: "project",
      priority: "medium",
      attendees: ["Development Team"],
      projectId: "beta-002",
      color: "#faad14",
    },
  ];

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        isSameDay(event.startDate, date) ||
        (event.startDate <= date && event.endDate >= date)
    );
  };

  const getFilteredEvents = () => {
    if (filterType === "all") return events;
    return events.filter((event) => event.type === filterType);
  };

  const getEventTypeColor = (type: string) => {
    const colors = {
      meeting: "#1890ff",
      project: "#faad14",
      deadline: "#ff4d4f",
      personal: "#722ed1",
      holiday: "#13c2c2",
    };
    return colors[type as keyof typeof colors] || "#d9d9d9";
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      low: "green",
      medium: "orange",
      high: "red",
      urgent: "purple",
    };
    return colors[priority as keyof typeof colors] || "default";
  };

  const dateCellRender = (date: Date) => {
    const dayEvents = getEventsForDate(date);
    const filteredEvents = dayEvents.filter(
      (event) => filterType === "all" || event.type === filterType
    );

    return (
      <div className="calendar-date-cell">
        {filteredEvents.slice(0, 3).map((event) => (
          <div
            key={event.id}
            className="event-item"
            style={{
              backgroundColor: event.color,
              color: "white",
              padding: "2px 4px",
              margin: "1px 0",
              borderRadius: "2px",
              fontSize: "12px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {event.title}
          </div>
        ))}
        {filteredEvents.length > 3 && (
          <div className="more-events">+{filteredEvents.length - 3} more</div>
        )}
      </div>
    );
  };

  const handleCreateEvent = () => {
    form.validateFields().then((values) => {
      console.log("Creating event:", values);
      setIsCreateModalVisible(false);
      form.resetFields();
    });
  };

  const selectedDateEvents = getEventsForDate(selectedDate);

  return (
    <DefaultPage>
      <DefaultHeader title="Calendar">
        <div className="calendar-header">
          <div className="calendar-filters">
            <Select
              value={viewMode}
              onChange={setViewMode}
              className="calendar-view-select"
            >
              <Option value="month">Month</Option>
              <Option value="week">Week</Option>
              <Option value="day">Day</Option>
            </Select>
            <Select
              value={filterType}
              onChange={setFilterType}
              className="calendar-filter-select"
            >
              <Option value="all">All Events</Option>
              <Option value="meeting">Meetings</Option>
              <Option value="project">Projects</Option>
              <Option value="deadline">Deadlines</Option>
              <Option value="personal">Personal</Option>
            </Select>
          </div>
          <Button
            type="primary"
            icon={<IIonAddOutline />}
            onClick={() => setIsCreateModalVisible(true)}
            className="calendar-add-button"
          >
            New Event
          </Button>
        </div>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Calendar" }]}
      />

      <DefaultContent>
        <div className="calendar-container">
          <Row gutter={[16, 16]}>
            {/* Calendar View */}
            <Col xs={24} lg={16}>
              <Card className="calendar-card">
                <Calendar
                  value={selectedDate}
                  mode="month"
                  className="custom-calendar"
                />
              </Card>
            </Col>

            {/* Events Sidebar */}
            <Col xs={24} lg={8}>
              <Card
                title={
                  <div className="calendar-sidebar-title">
                    <IIonCalendarOutline />
                    <span>{format(selectedDate, "EEEE, MMMM d, yyyy")}</span>
                  </div>
                }
                className="events-sidebar"
              >
                <List
                  dataSource={selectedDateEvents}
                  renderItem={(event) => (
                    <List.Item className="event-list-item">
                      <Card size="small" className="event-card">
                        <div className="event-details">
                          <div
                            className="event-indicator"
                            style={{ backgroundColor: event.color }}
                          />
                          <div className="event-content">
                            <div className="event-header">
                              <Text strong className="event-title">
                                {event.title}
                              </Text>
                              <Tag
                                color={getPriorityColor(event.priority)}
                                className="event-priority"
                              >
                                {event.priority}
                              </Tag>
                            </div>

                            <div className="event-details">
                              <div className="event-time">
                                <IIonTimeOutline className="event-icon" />
                                <span>
                                  {format(event.startDate, "HH:mm")} -{" "}
                                  {format(event.endDate, "HH:mm")}
                                </span>
                              </div>

                              {event.location && (
                                <div className="event-location">
                                  <IIonLocationOutline className="event-icon" />
                                  <span className="event-location-text">
                                    {event.location}
                                  </span>
                                </div>
                              )}

                              {event.attendees &&
                                event.attendees.length > 0 && (
                                  <div className="event-attendees">
                                    <IIonPeopleOutline className="event-icon" />
                                    <span>
                                      {event.attendees.length} attendees
                                    </span>
                                  </div>
                                )}

                              {event.description && (
                                <Text
                                  type="secondary"
                                  className="event-description"
                                >
                                  {event.description}
                                </Text>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </List.Item>
                  )}
                  locale={{ emptyText: "No events for this date" }}
                />
              </Card>

              {/* Upcoming Events */}
              <Card title="Upcoming Events" className="upcoming-events-card">
                <List
                  size="small"
                  dataSource={getFilteredEvents()
                    .filter((event) => event.startDate >= new Date())
                    .sort(
                      (a, b) => a.startDate.getTime() - b.startDate.getTime()
                    )
                    .slice(0, 5)}
                  renderItem={(event) => (
                    <List.Item className="upcoming-event-item">
                      <div className="upcoming-event-content">
                        <div
                          className="upcoming-event-indicator"
                          style={{ backgroundColor: event.color }}
                        />
                        <div className="upcoming-event-details">
                          <Text strong className="upcoming-event-title">
                            {event.title}
                          </Text>
                          <Text
                            type="secondary"
                            className="upcoming-event-time"
                          >
                            {format(event.startDate, "MMM d, HH:mm")}
                          </Text>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>

          {/* Create Event Modal */}
          <Modal
            title="Create New Event"
            open={isCreateModalVisible}
            onOk={handleCreateEvent}
            onCancel={() => {
              setIsCreateModalVisible(false);
              form.resetFields();
            }}
            width={600}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                name="title"
                label="Event Title"
                rules={[
                  { required: true, message: "Please enter event title" },
                ]}
              >
                <Input placeholder="Enter event title" />
              </Form.Item>

              <Form.Item
                name="type"
                label="Event Type"
                rules={[
                  { required: true, message: "Please select event type" },
                ]}
              >
                <Radio.Group>
                  <Radio value="meeting">Meeting</Radio>
                  <Radio value="project">Project</Radio>
                  <Radio value="deadline">Deadline</Radio>
                  <Radio value="personal">Personal</Radio>
                </Radio.Group>
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="startDate"
                    label="Start Date"
                    rules={[
                      { required: true, message: "Please select start date" },
                    ]}
                  >
                    <DatePicker showTime className="w-full" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="endDate"
                    label="End Date"
                    rules={[
                      { required: true, message: "Please select end date" },
                    ]}
                  >
                    <DatePicker showTime className="w-full" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item name="location" label="Location">
                <Input placeholder="Enter location (optional)" />
              </Form.Item>

              <Form.Item name="attendees" label="Attendees">
                <Select
                  mode="tags"
                  placeholder="Add attendees"
                  className="w-full"
                />
              </Form.Item>

              <Form.Item name="description" label="Description">
                <Input.TextArea
                  rows={3}
                  placeholder="Enter event description"
                />
              </Form.Item>

              <Form.Item name="priority" label="Priority">
                <Radio.Group>
                  <Radio value="low">Low</Radio>
                  <Radio value="medium">Medium</Radio>
                  <Radio value="high">High</Radio>
                  <Radio value="urgent">Urgent</Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
