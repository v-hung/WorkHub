import { Checkbox } from "antd";
import { Key, type FC, type HTMLAttributes } from "react";
import "./NotificationToolbar.css";
import { red } from "@ant-design/colors";

type State = HTMLAttributes<HTMLDivElement> & {
  selected: Key[];
  onCheckAllChange: (checked: boolean) => void;
  isCheckAll: boolean;
};

const NotificationToolbar: FC<State> = (props) => {
  const {
    className = "",
    selected,
    onCheckAllChange,
    isCheckAll,
    ...rest
  } = props;

  return (
    <div {...rest} className={`notification-toolbar ${className}`}>
      <div className="toolbar__left">
        <label className="toolbar__button">
          <Checkbox
            id="check-all"
            checked={isCheckAll}
            onChange={(e) => onCheckAllChange(e.target.checked)}
          />
        </label>
        <button className="toolbar__button">
          <IIonRefresh />
        </button>

        {selected.length > 0 && (
          <>
            <button className="toolbar__button">
              <IIonTrashOutline style={{ color: red[5] }} />
            </button>

            <button className="toolbar__button">
              <IIonMailUnreadOutline />
            </button>
          </>
        )}
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
