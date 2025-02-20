import * as React from "react";
import type { PickerProps } from "antd/es/date-picker/generatePicker";

import MyDatePicker from "./MyDatePicker";

export type MyTimePickerProps = Omit<PickerProps<Date>, "picker">;

const MyTimePicker = React.forwardRef<any, MyTimePickerProps>((props, ref) => (
  <MyDatePicker {...props} picker="time" mode={undefined} ref={ref} />
));

MyTimePicker.displayName = "MyTimePicker";

export default MyTimePicker;
