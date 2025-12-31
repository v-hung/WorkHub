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
  Button,
  Table,
  Tag,
  Space,
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Tabs,
  Avatar,
  List,
  Typography,
  Badge,
  Tooltip,
  Dropdown,
} from "antd";

import { format, isAfter, isBefore, isToday } from "date-fns";

const { Title, Text, Paragraph } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TabPane } = Tabs;

interface Meeting {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  organizer: string;
  attendees: string[];
  location?: string;
  meetingType: "in-person" | "virtual" | "hybrid";
  status: "scheduled" | "ongoing" | "completed" | "cancelled";
  projectId?: string;
  meetingLink?: string;
  agenda?: string[];
  minutes?: string;
  recordings?: string[];
}

export const loader = wrapProtectedLoader();

export function Component() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [form] = Form.useForm();

  // Mock meetings data
  const meetings: Meeting[] = [
    {
      id: "1",
      title: "Weekly Team Standup",
      description: "Daily standup meeting for development team",
      startDate: new Date(2024, 11, 31, 9, 0),
      endDate: new Date(2024, 11, 31, 9, 30),
      organizer: "John Doe",
      attendees: ["John Doe", "Sarah Wilson", "Mike Johnson", "Emma Davis"],
      location: "Conference Room A",
      meetingType: "in-person",
      status: "scheduled",
      agenda: ["Sprint progress", "Blockers", "Next steps"],
    },
    {
      id: "2",
      title: "Client Presentation - Q4 Results",
      description: "Present quarterly results to key client",
      startDate: new Date(2024, 12, 2, 14, 0),
      endDate: new Date(2024, 12, 2, 15, 30),
      organizer: "Sarah Wilson",
      attendees: ["Sarah Wilson", "John Doe", "Client Team"],
      location: "Virtual Meeting",
      meetingType: "virtual",
      status: "scheduled",
      meetingLink: "https://meet.google.com/abc-defg-hij",
      projectId: "client-q4-2024",
      agenda: [
        "Q4 Performance Review",
        "Key Achievements",
        "Future Plans",
        "Q&A",
      ],
    },
    {
      id: "3",
      title: "Project Alpha Review",
      description: "Review progress and next milestones for Project Alpha",
      startDate: new Date(2024, 11, 30, 10, 0),
      endDate: new Date(2024, 11, 30, 11, 30),
      organizer: "Mike Johnson",
      attendees: ["Mike Johnson", "John Doe", "Sarah Wilson", "Emma Davis"],
      location: "Conference Room B",
      meetingType: "hybrid",
      status: "completed",
      projectId: "alpha-001",
      agenda: [
        "Current Status",
        "Milestone Review",
        "Risk Assessment",
        "Action Items",
      ],
      minutes:
        "Meeting completed successfully. All milestones on track. Next review in 2 weeks.",
      recordings: ["recording-2024-11-30.mp4"],
    },
    {
      id: "4",
      title: "Design Review Session",
      description: "Review latest UI/UX designs for mobile app",
      startDate: new Date(2024, 12, 1, 15, 0),
      endDate: new Date(2024, 12, 1, 16, 0),
      organizer: "Emma Davis",
      attendees: ["Emma Davis", "Design Team", "Development Team"],
      location: "Virtual Meeting",
      meetingType: "virtual",
      status: "ongoing",
      meetingLink: "https://zoom.us/j/123456789",
      agenda: ["New Design Concepts", "User Feedback", "Implementation Plan"],
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      scheduled: "blue",
      ongoing: "green",
      completed: "gray",
      cancelled: "red",
    };
    return colors[status as keyof typeof colors] || "default";
  };

  const getMeetingTypeIcon = (type: string) => {
    switch (type) {
      case "virtual":
        return <IIonVideocamOutline />;
      case "in-person":
        return <IIonLocationOutline />;
      case "hybrid":
        return <IIonPeopleOutline />;
      default:
        return <IIonTimeOutline />;
    }
  };

  const filterMeetings = (status: string) => {
    const now = new Date();
    switch (status) {
      case "upcoming":
        return meetings.filter(
          (m) => isAfter(m.startDate, now) && m.status === "scheduled"
        );
      case "ongoing":
        return meetings.filter((m) => m.status === "ongoing");
      case "completed":
        return meetings.filter((m) => m.status === "completed");
      case "today":
        return meetings.filter((m) => isToday(m.startDate));
      default:
        return meetings;
    }
  };

  const handleCreateMeeting = () => {
    form.validateFields().then((values) => {
      console.log("Creating meeting:", values);
      setIsCreateModalVisible(false);
      form.resetFields();
    });
  };

  const handleJoinMeeting = (meeting: Meeting) => {
    if (meeting.meetingLink) {
      window.open(meeting.meetingLink, "_blank");
    }
  };

  const meetingColumns = [
    {
      title: "Meeting",
      dataIndex: "title",
      key: "title",
      render: (title: string, record: Meeting) => (
        <div className="meeting-info">
          <div className="meeting-title">{title}</div>
          <div className="meeting-type">
            {getMeetingTypeIcon(record.meetingType)}
            <span>{record.meetingType}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Date & Time",
      dataIndex: "startDate",
      key: "startDate",
      render: (startDate: Date, record: Meeting) => (
        <div className="meeting-datetime">
          <div className="date">{format(startDate, "MMM d, yyyy")}</div>
          <div className="time">
            {format(startDate, "HH:mm")} - {format(record.endDate, "HH:mm")}
          </div>
        </div>
      ),
    },
    {
      title: "Organizer",
      dataIndex: "organizer",
      key: "organizer",
    },
    {
      title: "Attendees",
      dataIndex: "attendees",
      key: "attendees",
      render: (attendees: string[]) => (
        <div className="meeting-attendees">
          <Avatar.Group maxCount={3} size="small" className="attendee-avatars">
            {attendees.map((attendee, index) => (
              <Avatar key={index} style={{ backgroundColor: "#1890ff" }}>
                {attendee
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </Avatar>
            ))}
          </Avatar.Group>
          <div className="attendee-list" title={attendees.join(", ")}>
            {attendees.slice(0, 2).join(", ")}
            {attendees.length > 2 && ` +${attendees.length - 2} more`}
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={getStatusColor(status)} className="meeting-status">
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: Meeting) => (
        <div className="meeting-actions">
          {record.status === "ongoing" && record.meetingLink && (
            <Button
              type="primary"
              size="small"
              icon={<IIonVideocamOutline />}
              onClick={() => handleJoinMeeting(record)}
            >
              Join
            </Button>
          )}
          {record.status === "scheduled" && isToday(record.startDate) && (
            <Button
              type="default"
              size="small"
              icon={<IIonPlayOutline />}
              onClick={() => handleJoinMeeting(record)}
            >
              Start
            </Button>
          )}
          <Dropdown
            menu={{
              items: [
                {
                  key: "view",
                  label: "View Details",
                  onClick: () => setSelectedMeeting(record),
                },
                {
                  key: "edit",
                  label: "Edit Meeting",
                },
                {
                  key: "cancel",
                  label: "Cancel Meeting",
                  danger: true,
                },
              ],
            }}
          >
            <Button size="small" icon={<IIonEllipsisVerticalOutline />} />
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <DefaultPage>
      <DefaultHeader title="Meeting Management">
        <Button
          type="primary"
          icon={<IIonAddOutline />}
          onClick={() => setIsCreateModalVisible(true)}
        >
          Schedule Meeting
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Meeting Management" }]}
      />

      <DefaultContent>
        <div className="meetings-container">
          <Row gutter={[16, 16]}>
            {/* Meeting Stats */}
            <Col xs={24}>
              <Row gutter={[16, 16]} className="meeting-stats">
                <Col xs={24} sm={6}>
                  <Card className="meeting-stats-card">
                    <div className="meeting-stats-content">
                      <div className="meeting-stats-number">
                        {filterMeetings("upcoming").length}
                      </div>
                      <div className="meeting-stats-label">
                        Upcoming Meetings
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={6}>
                  <Card className="meeting-stats-card">
                    <div className="meeting-stats-content">
                      <div className="meeting-stats-number">
                        {filterMeetings("ongoing").length}
                      </div>
                      <div className="meeting-stats-label">
                        Ongoing Meetings
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={6}>
                  <Card className="meeting-stats-card">
                    <div className="meeting-stats-content">
                      <div className="meeting-stats-number">
                        {filterMeetings("completed").length}
                      </div>
                      <div className="meeting-stats-label">
                        Completed Meetings
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={6}>
                  <Card className="meeting-stats-card">
                    <div className="meeting-stats-content">
                      <div className="meeting-stats-number">
                        {filterMeetings("today").length}
                      </div>
                      <div className="meeting-stats-label">
                        Today's Meetings
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>

            {/* Meetings List */}
            <Col xs={24}>
              <Card className="meetings-table-card">
                <Tabs
                  activeKey={activeTab}
                  onChange={setActiveTab}
                  className="tabs-content"
                >
                  <TabPane tab="Upcoming" key="upcoming">
                    <Table
                      columns={meetingColumns}
                      dataSource={filterMeetings("upcoming")}
                      rowKey="id"
                      pagination={false}
                      className="meetings-table"
                    />
                  </TabPane>
                  <TabPane tab="Ongoing" key="ongoing">
                    <Table
                      columns={meetingColumns}
                      dataSource={filterMeetings("ongoing")}
                      rowKey="id"
                      pagination={false}
                      className="meetings-table"
                    />
                  </TabPane>
                  <TabPane tab="Completed" key="completed">
                    <Table
                      columns={meetingColumns}
                      dataSource={filterMeetings("completed")}
                      rowKey="id"
                      pagination={false}
                      className="meetings-table"
                    />
                  </TabPane>
                  <TabPane tab="Today" key="today">
                    <Table
                      columns={meetingColumns}
                      dataSource={filterMeetings("today")}
                      rowKey="id"
                      pagination={false}
                      className="meetings-table"
                    />
                  </TabPane>
                </Tabs>
              </Card>
            </Col>
          </Row>

          {/* Meeting Details Modal */}
          <Modal
            title={selectedMeeting?.title}
            open={!!selectedMeeting}
            onCancel={() => setSelectedMeeting(null)}
            footer={[
              selectedMeeting?.meetingLink && (
                <Button
                  key="join"
                  type="primary"
                  icon={<IIonVideocamOutline />}
                  onClick={() => handleJoinMeeting(selectedMeeting)}
                >
                  Join Meeting
                </Button>
              ),
              <Button key="close" onClick={() => setSelectedMeeting(null)}>
                Close
              </Button>,
            ]}
            width={800}
            className="meeting-detail-modal"
          >
            {selectedMeeting && (
              <div className="meeting-detail-content">
                <div className="meeting-detail-section">
                  <div className="meeting-detail-label">Description:</div>
                  <Paragraph className="meeting-detail-content">
                    {selectedMeeting.description}
                  </Paragraph>
                </div>

                <Row gutter={16}>
                  <Col span={12}>
                    <div className="meeting-detail-section">
                      <div className="meeting-detail-label">Date & Time:</div>
                      <div>
                        {format(
                          selectedMeeting.startDate,
                          "EEEE, MMMM d, yyyy"
                        )}
                      </div>
                      <div>
                        {format(selectedMeeting.startDate, "HH:mm")} -{" "}
                        {format(selectedMeeting.endDate, "HH:mm")}
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="meeting-detail-section">
                      <div className="meeting-detail-label">Location:</div>
                      <div className="meeting-detail-content">
                        {getMeetingTypeIcon(selectedMeeting.meetingType)}
                        <span>{selectedMeeting.location || "TBD"}</span>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="meeting-detail-section">
                  <div className="meeting-detail-label">Organizer:</div>
                  <div className="meeting-detail-content">
                    {selectedMeeting.organizer}
                  </div>
                </div>

                <div className="meeting-detail-section">
                  <div className="meeting-detail-label">Attendees:</div>
                  <div className="meeting-detail-content">
                    <Avatar.Group maxCount={5}>
                      {selectedMeeting.attendees.map((attendee, index) => (
                        <Avatar
                          key={index}
                          style={{ backgroundColor: "#1890ff" }}
                        >
                          {attendee
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </Avatar>
                      ))}
                    </Avatar.Group>
                    <div className="meeting-attendees-list">
                      {selectedMeeting.attendees.join(", ")}
                    </div>
                  </div>
                </div>

                {selectedMeeting.agenda && (
                  <div className="meeting-detail-section">
                    <div className="meeting-detail-label">Agenda:</div>
                    <ul className="meeting-agenda">
                      {selectedMeeting.agenda.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedMeeting.minutes && (
                  <div className="meeting-detail-section">
                    <div className="meeting-detail-label">Meeting Minutes:</div>
                    <Paragraph className="meeting-detail-content">
                      {selectedMeeting.minutes}
                    </Paragraph>
                  </div>
                )}

                {selectedMeeting.recordings &&
                  selectedMeeting.recordings.length > 0 && (
                    <div className="meeting-detail-section">
                      <div className="meeting-detail-label">Recordings:</div>
                      <div className="meeting-recordings">
                        {selectedMeeting.recordings.map((recording, index) => (
                          <Button
                            key={index}
                            icon={<IIonVideocamOutline />}
                            size="small"
                          >
                            {recording}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            )}
          </Modal>

          {/* Create Meeting Modal */}
          <Modal
            title="Schedule New Meeting"
            open={isCreateModalVisible}
            onOk={handleCreateMeeting}
            onCancel={() => {
              setIsCreateModalVisible(false);
              form.resetFields();
            }}
            width={600}
          >
            <Form form={form} layout="vertical" className="create-meeting-form">
              <Form.Item
                name="title"
                label="Meeting Title"
                rules={[
                  { required: true, message: "Please enter meeting title" },
                ]}
              >
                <Input placeholder="Enter meeting title" />
              </Form.Item>

              <Form.Item name="description" label="Description">
                <Input.TextArea
                  rows={3}
                  placeholder="Enter meeting description"
                />
              </Form.Item>

              <Form.Item
                name="meetingType"
                label="Meeting Type"
                rules={[
                  { required: true, message: "Please select meeting type" },
                ]}
              >
                <Select
                  placeholder="Select meeting type"
                  className="meeting-type-selector"
                >
                  <Option value="in-person">In-Person</Option>
                  <Option value="virtual">Virtual</Option>
                  <Option value="hybrid">Hybrid</Option>
                </Select>
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="startDate"
                    label="Start Date & Time"
                    rules={[
                      {
                        required: true,
                        message: "Please select start date and time",
                      },
                    ]}
                  >
                    <DatePicker showTime className="w-full" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="endDate"
                    label="End Date & Time"
                    rules={[
                      {
                        required: true,
                        message: "Please select end date and time",
                      },
                    ]}
                  >
                    <DatePicker showTime className="w-full" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item name="location" label="Location">
                <Input placeholder="Enter location or meeting link" />
              </Form.Item>

              <Form.Item name="attendees" label="Attendees">
                <Select
                  mode="tags"
                  placeholder="Add attendees"
                  className="attendee-selector"
                />
              </Form.Item>

              <Form.Item name="agenda" label="Agenda Items">
                <Select
                  mode="tags"
                  placeholder="Add agenda items"
                  className="agenda-selector"
                />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
