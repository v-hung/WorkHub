import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import type { FC, HTMLAttributes } from "react";

type State = HTMLAttributes<HTMLDivElement>;

const ProfileTabs: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <div {...rest} className={`${className}`}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Thông tin cá nhân" key="1">
          {/* <PersonalInfoTab user={user} /> */}
        </TabPane>
        <TabPane tab="Team" key="2">
          {/* <TeamTab teams={teams} /> */}
        </TabPane>
        <TabPane tab="Dự án" key="3">
          {/* <ProjectsTab projects={projects} /> */}
        </TabPane>
        <TabPane tab="Công việc" key="4">
          {/* <TasksTab tasks={tasks} /> */}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
