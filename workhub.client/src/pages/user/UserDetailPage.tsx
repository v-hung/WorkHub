import { wrapProtectedLoader } from "@/utils/loader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import { Layout, Button } from "antd";
import { useParams, useLoaderData } from "react-router";
import { Permission } from "@/generate-api";
import { wrapPromise } from "@/utils/promise";
import { userApi } from "@/services/apiClient";
import { redirect } from "react-router";
import { ensurePermission } from "@/utils/hasPermission";

import "./UserDetailPage.css";

export const loader = wrapProtectedLoader(
  async ({ params }, { permissions }) => {
    const { id } = params;

    if (!id) {
      throw redirect("/users");
    }

    ensurePermission(permissions, Permission.PermissionsUsersView);

    const data = await wrapPromise(() => userApi.userGetById({ id }));

    if (!data) {
      throw redirect("/users");
    }

    return data;
  },
  Permission.PermissionsUsersView
);

export function Component() {
  const { id } = useParams();
  const userData = useLoaderData() as any; // Assuming UserDetailsDto

  return (
    <DefaultPage>
      <Layout className="main-layout">
        <DefaultHeader title={`${userData?.fullName || "User"} Details`} />
        <DefaultBreadcrumb
          items={[
            { title: "Home", path: "/" },
            { title: "Users Manager", path: "/users" },
            { title: "User detail" },
          ]}
        />
        <DefaultContent>
          <div className="user-detail-container">
            {/* User Profile Section */}
            <div className="user-profile-section">
              <div className="user-avatar">
                <img
                  src={userData?.image || "/default-avatar.png"}
                  alt={userData?.fullName}
                />
              </div>
              <div className="user-info">
                <h2>{userData?.fullName}</h2>
                <p className="user-position">{userData?.userPosition}</p>
                <p className="user-email">{userData?.email}</p>
                <div className="user-status">
                  <span
                    className={`status-badge ${userData?.userStatus?.toLowerCase()}`}
                  >
                    {userData?.userStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="user-stats-section">
              <div className="stat-card">
                <IIonClockOutline />
                <div className="stat-info">
                  <span className="stat-value">
                    {userData?.remainingLeaveMinutes || 0}
                  </span>
                  <span className="stat-label">Leave Minutes</span>
                </div>
              </div>
              <div className="stat-card">
                <IIonDocumentsOutline />
                <div className="stat-info">
                  <span className="stat-value">
                    {userData?.team?.activeProjects || 0}
                  </span>
                  <span className="stat-label">Active Projects</span>
                </div>
              </div>
              <div className="stat-card">
                <IIonPeopleOutline />
                <div className="stat-info">
                  <span className="stat-value">
                    {userData?.team?.name || "N/A"}
                  </span>
                  <span className="stat-label">Team</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="user-activity-section">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <div className="activity-content">
                    <p>Logged in to the system</p>
                    <span className="activity-time">2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <div className="activity-content">
                    <p>Submitted timesheet for this week</p>
                    <span className="activity-time">1 day ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <div className="activity-content">
                    <p>Joined project "WorkHub Development"</p>
                    <span className="activity-time">3 days ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="user-actions-section">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <Button type="primary" icon={<IIonPencilOutline />}>
                  Edit Profile
                </Button>
                <Button icon={<IIonMailOutline />}>Send Message</Button>
                <Button icon={<IIonDocumentTextOutline />}>
                  View Timesheets
                </Button>
                <Button icon={<IIonSettingsOutline />}>
                  Manage Permissions
                </Button>
              </div>
            </div>
          </div>
        </DefaultContent>
      </Layout>
    </DefaultPage>
  );
}
