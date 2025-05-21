import { ComponentProps } from "react";
import DatePicker from "./DatePicker";
import styles from "./TimePicker.module.css";

const { RangePicker: AntdRangePicker } = DatePicker;

export type RangeTimePickerType = ComponentProps<typeof AntdRangePicker>;

const RangeTimePicker = (props: RangeTimePickerType) => {
  const { popupClassName, ...rest } = props;
  return (
    <AntdRangePicker
      popupClassName={`${styles.customPopupTimePicker} ${popupClassName ?? ""}`}
      picker="time"
      format="HH:mm:ss"
      {...rest}
    />
  );
};

export default RangeTimePicker;
