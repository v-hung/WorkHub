import { ComponentProps } from "react";
import MyDatePicker from "./MyDatePicker";
import styles from "./MyTimePicker.module.css";

const { RangePicker } = MyDatePicker;

export type MyRangeTimePickerType = ComponentProps<typeof RangePicker>;

const MyRangeTimePicker = (props: MyRangeTimePickerType) => {
  const { popupClassName, ...rest } = props;
  return (
    <RangePicker
      popupClassName={`${styles.customPopupTimePicker} ${popupClassName ?? ""}`}
      picker="time"
      format="HH:mm:ss"
      {...rest}
    />
  );
};

export default MyRangeTimePicker;
