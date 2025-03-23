import MainHeader from "@/layouts/main/components/MainHeader";
import { Button, Popconfirm, Skeleton, Tag } from "antd";
import styles from "./TimesheetHeader.module.css";
import { useTimesheet } from "../../hooks/useTimesheet";
import { formatDate } from "@/common/utils/date.util";
import { useTimesheetStore } from "@/stores/timesheet.store";
import { blueDark, red } from "@ant-design/colors";
import { useMemo } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { isAfter, isBefore } from "date-fns";

const TImesheetHeader = () => {
  const { loading, timeString } = useTimesheet();

  const { startTime, endTime, checkIn, checkOut } = useTimesheetStore();
  const workTime = useAuthStore((state) => state.user?.workTime!);

  const is_paid_time = useMemo(
    () =>
      !!startTime &&
      !endTime &&
      (isBefore(workTime.startTimeMorning, Date.now()) ||
        isAfter(workTime.endTimeAfternoon, Date.now())),
    [startTime, endTime, workTime]
  );

  return (
    <MainHeader title="Timesheet">
      <div className={styles.headerContainer}>
        {startTime && <Tag color="blue">{formatDate(startTime)}</Tag>}
        <div className="action">
          {loading ? (
            <Skeleton.Input active />
          ) : (
            <>
              <Button key="3">Edit</Button>
              <Button key="2">Leave</Button>

              <Button
                icon={
                  <IIonClock
                    width={20}
                    style={{ color: endTime ? red.primary : blueDark.primary }}
                  />
                }
                danger={is_paid_time}
                style={{ pointerEvents: "none" }}
              >
                {timeString}
              </Button>

              {!startTime ? (
                <Button onClick={() => checkIn()}>
                  <IIonPlay />
                </Button>
              ) : (
                <Popconfirm
                  title="Are you sure you want to checkout?"
                  okText="Yes"
                  cancelText="No"
                  placement="bottomRight"
                  onConfirm={() => checkOut()}
                >
                  <Button danger disabled={!!endTime}>
                    <IIonPause />
                  </Button>
                </Popconfirm>
              )}
            </>
          )}
        </div>
      </div>
    </MainHeader>
  );
};

export default TImesheetHeader;
