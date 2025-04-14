import { Button, Popconfirm, Skeleton, Tag } from "antd";
import styles from "./TimesheetHeader.module.css";
import { useTimesheet } from "../../hooks/useTimesheet";
import { format } from "@/common/utils/date.util";
import { useTimesheetStore } from "@/stores/timesheet.store";
import { blueDark, red } from "@ant-design/colors";
import { useTimesheetContext } from "../../context/TimesheetContext";
import { useRequestContext } from "@/features/request/contexts/RequestContext";
import { RequestType } from "@/generate-api";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";

const TImesheetHeader = () => {
  const { loading, timeString } = useTimesheet();

  const { startTime, endTime, checkIn, checkOut } = useTimesheetStore();
  const { getTimesheets, isCurrentMonth } = useTimesheetContext();
  const { openRequest } = useRequestContext();

  const handleTimeAction = async (cb: () => Promise<void>) => {
    await cb();

    if (isCurrentMonth) {
      await getTimesheets();
    }
  };

  return (
    <DefaultHeader title="Timesheet">
      <div className={styles.headerContainer}>
        {startTime && <Tag color="blue">{format(startTime)}</Tag>}
        <div className="action">
          {loading ? (
            <Skeleton.Input active />
          ) : (
            <>
              <Button
                onClick={() =>
                  openRequest(RequestType.TimesheetAdjustmentRequest)
                }
              >
                Edit
              </Button>
              <Button onClick={() => openRequest(RequestType.LeaveRequest)}>
                Leave
              </Button>

              <Button
                icon={
                  <IIonClock
                    width={20}
                    style={{ color: endTime ? red.primary : blueDark.primary }}
                  />
                }
                style={{ pointerEvents: "none" }}
              >
                {timeString}
              </Button>

              {!startTime ? (
                <Button onClick={() => handleTimeAction(checkIn)}>
                  <IIonPlay />
                </Button>
              ) : (
                <Popconfirm
                  title="Are you sure you want to checkout?"
                  okText="Yes"
                  cancelText="No"
                  placement="bottomRight"
                  onConfirm={() => handleTimeAction(checkOut)}
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
    </DefaultHeader>
  );
};

export default TImesheetHeader;
