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
  List,
  Avatar,
  Input,
  Button,
  Badge,
  Divider,
  Typography,
} from "antd";

const { Text, Title } = Typography;
const { TextArea } = Input;

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
}

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  isMine: boolean;
}

export const loader = wrapProtectedLoader();

export function Component() {
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >(null);
  const [newMessage, setNewMessage] = useState("");

  const conversations: Conversation[] = [
    {
      id: "1",
      name: "John Doe",
      avatar: "JD",
      lastMessage: "Hey, can we discuss the project timeline?",
      timestamp: "2 min ago",
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: "2",
      name: "Sarah Wilson",
      avatar: "SW",
      lastMessage: "The design mockups are ready for review",
      timestamp: "15 min ago",
      unreadCount: 0,
      isOnline: true,
    },
    {
      id: "3",
      name: "Mike Johnson",
      avatar: "MJ",
      lastMessage: "Thanks for the feedback!",
      timestamp: "1 hour ago",
      unreadCount: 1,
      isOnline: false,
    },
    {
      id: "4",
      name: "Development Team",
      avatar: "DT",
      lastMessage: "New deployment scheduled for tomorrow",
      timestamp: "2 hours ago",
      unreadCount: 0,
      isOnline: true,
    },
  ];

  const messages: Message[] = [
    {
      id: "1",
      senderId: "1",
      senderName: "John Doe",
      content: "Hi! How are you doing?",
      timestamp: "10:30 AM",
      isMine: false,
    },
    {
      id: "2",
      senderId: "me",
      senderName: "You",
      content: "I'm good, thanks! How about you?",
      timestamp: "10:32 AM",
      isMine: true,
    },
    {
      id: "3",
      senderId: "1",
      senderName: "John Doe",
      content:
        "Doing well! I wanted to discuss the project timeline for the new feature.",
      timestamp: "10:33 AM",
      isMine: false,
    },
    {
      id: "4",
      senderId: "1",
      senderName: "John Doe",
      content: "Can we schedule a meeting for tomorrow?",
      timestamp: "10:35 AM",
      isMine: false,
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <DefaultPage>
      <DefaultHeader title="Messages">
        <Button icon={<IIonPeopleOutline />} type="primary">
          New Conversation
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[{ title: "Home", path: "/" }, { title: "Messages" }]}
      />

      <DefaultContent>
        <div className="messages-container">
          <Row gutter={[16, 16]}>
            {/* Conversations List */}
            <Col xs={24} md={8} lg={6}>
              <Card className="h-full" bodyStyle={{ padding: 0 }}>
                <div className="p-4 border-b">
                  <Input
                    placeholder="Search conversations..."
                    prefix={<IIonSearchOutline />}
                    className="mb-4"
                  />
                  <Title level={5} className="mb-0">
                    Conversations
                  </Title>
                </div>

                <List
                  className="conversations-list"
                  dataSource={conversations}
                  renderItem={(conversation) => (
                    <List.Item
                      className={
                        selectedConversation === conversation.id
                          ? "conversation-item selected"
                          : "conversation-item"
                      }
                      onClick={() => setSelectedConversation(conversation.id)}
                    >
                      <List.Item.Meta
                        avatar={
                          <Badge dot={conversation.isOnline} color="green">
                            <Avatar className="bg-blue-500">
                              {conversation.avatar}
                            </Avatar>
                          </Badge>
                        }
                        title={
                          <div className="flex justify-between items-center">
                            <span className="font-medium">
                              {conversation.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              {conversation.timestamp}
                            </span>
                          </div>
                        }
                        description={
                          <div className="flex justify-between items-center">
                            <Text ellipsis className="text-sm">
                              {conversation.lastMessage}
                            </Text>
                            {conversation.unreadCount > 0 && (
                              <Badge
                                count={conversation.unreadCount}
                                size="small"
                              />
                            )}
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>

            {/* Chat Area */}
            <Col xs={24} md={16} lg={18}>
              <Card className="chat-card">
                {selectedConversation ? (
                  <>
                    {/* Chat Header */}
                    <div className="chat-header">
                      <div className="chat-header-info">
                        <Avatar className="chat-avatar">
                          {
                            conversations.find(
                              (c) => c.id === selectedConversation
                            )?.avatar
                          }
                        </Avatar>
                        <div>
                          <Title level={5} className="mb-0">
                            {
                              conversations.find(
                                (c) => c.id === selectedConversation
                              )?.name
                            }
                          </Title>
                          <Text type="secondary" className="text-xs">
                            {conversations.find(
                              (c) => c.id === selectedConversation
                            )?.isOnline
                              ? "Online"
                              : "Offline"}
                          </Text>
                        </div>
                      </div>
                      <Button icon={<IIonChatbubbleOutline />}>Call</Button>
                    </div>

                    {/* Messages */}
                    <div className="chat-messages">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={
                            message.isMine
                              ? "message-container sent"
                              : "message-container received"
                          }
                        >
                          <div
                            className={
                              message.isMine
                                ? "message-bubble sent"
                                : "message-bubble received"
                            }
                          >
                            <p className="message-content">{message.content}</p>
                            <span
                              className={
                                message.isMine
                                  ? "message-time sent"
                                  : "message-time received"
                              }
                            >
                              {message.timestamp}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="chat-input">
                      <div className="chat-input-group">
                        <TextArea
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Type your message..."
                          autoSize={{ minRows: 1, maxRows: 4 }}
                          onPressEnter={(e) => {
                            if (!e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                        />
                        <Button
                          type="primary"
                          icon={<IIonSendOutline />}
                          onClick={handleSendMessage}
                          disabled={!newMessage.trim()}
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="empty-state">
                    <div>
                      <IIonChatbubbleOutline className="empty-icon" />
                      <Title level={4} className="empty-title">
                        Select a conversation
                      </Title>
                      <Text type="secondary" className="empty-text">
                        Choose a conversation from the list to start messaging
                      </Text>
                    </div>
                  </div>
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </DefaultContent>
    </DefaultPage>
  );
}
