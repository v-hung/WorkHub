import { Calendar as AntdCalendar } from "antd";
import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";

const Calendar = AntdCalendar.generateCalendar<Date>(dateFnsGenerateConfig);

export default Calendar;
