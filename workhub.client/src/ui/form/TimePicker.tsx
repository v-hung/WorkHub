import * as React from "react";
import type { PickerProps } from "antd/es/date-picker/generatePicker";
import styles from "./TimePicker.module.css";

import DatePicker from "./DatePicker";

export type TimePickerProps = Omit<PickerProps<Date>, "picker">;

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  const { popupClassName, ...rest } = props;
  return (
    <DatePicker
      popupClassName={`${styles.customPopupTimePicker} ${popupClassName ?? ""}`}
      {...rest}
      picker="time"
      mode={undefined}
      ref={ref}
    />
  );
});

TimePicker.displayName = "TimePicker";

export default TimePicker;
