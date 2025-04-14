import * as React from "react";
import type { PickerProps } from "antd/es/date-picker/generatePicker";
import styles from "./MyTimePicker.module.css";

import MyDatePicker from "./MyDatePicker";

export type MyTimePickerProps = Omit<PickerProps<Date>, "picker">;

const MyTimePicker = React.forwardRef<any, MyTimePickerProps>((props, ref) => {
  const { popupClassName, ...rest } = props;
  return (
    <MyDatePicker
      popupClassName={`${styles.customPopupTimePicker} ${popupClassName ?? ""}`}
      {...rest}
      picker="time"
      mode={undefined}
      ref={ref}
    />
  );
});

MyTimePicker.displayName = "MyTimePicker";

export default MyTimePicker;
