import MainHeader from "@/layouts/main/components/MainHeader";
import { Button, Popconfirm, Skeleton, Tag } from "antd";
import styles from "./TimesheetHeader.module.css";

const TImesheetHeader = () => {
  return (
    <MainHeader title="Timesshet">
      <div className={styles.headerContainer}>
        <Tag color="blue">{"--:-- <> --:--:--"}</Tag>
        <div className="action">
          <Skeleton.Input active className="w-52" />
          <>
            <Button key="3">Correction</Button>
            <Button key="2">Leave</Button>
            <div className="flex items-center gap-2">
              <Button
                icon={<IClockCircleOutlined className="text-cyan-600" />}
                className="pointer-events-none flex items-center gap-2"
              >
                --:--:--
              </Button>
              <Button className="flex items-center">
                <IPlayCircleOutlined className="text-cyan-600" />
              </Button>
              <Popconfirm
                title="Are you sure you want to checkout?"
                okText="Yes"
                cancelText="No"
                placement="bottomRight"
              >
                <Button danger className="flex items-center">
                  <PauseCircleOutlined />
                </Button>
              </Popconfirm>
            </div>
          </>
        </div>
      </div>
    </MainHeader>
  );
};

export default TImesheetHeader;
