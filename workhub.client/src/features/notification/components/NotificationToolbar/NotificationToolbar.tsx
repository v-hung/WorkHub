import { Checkbox } from "antd";
import type { FC, HTMLAttributes } from "react";
import "./NotificationToolbar.css";

type State = HTMLAttributes<HTMLDivElement>;

const NotificationToolbar: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <div {...rest} className={`notification-toolbar ${className}`}>
      <div className="toolbar__left">
        <label className="toolbar__button">
          <Checkbox id="check-all" />
        </label>
        <button className="toolbar__button">
          <IIonRefresh />
        </button>
        <button v-show="selectedKeys.length > 0" className="toolbar__button">
          <IIonTrashOutline className="text-red-600" />
        </button>
      </div>

      <div className="toolbar__right">
        <span className="toolbar__summary">1-50 of 62</span>
        <button className="toolbar__button">
          <IIonChevronBack />
        </button>
        <button className="toolbar__button">
          <IIonChevronForward />
        </button>
      </div>
    </div>
  );
};

export default NotificationToolbar;
