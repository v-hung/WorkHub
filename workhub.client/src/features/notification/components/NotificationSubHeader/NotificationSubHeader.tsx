import { type FC, type HTMLAttributes } from "react";
import "./NotificationSubHeader.css";
import IconButton from "@/ui/elements/IconButton/IconButton";
import { useNavigate } from "react-router";
import { useStickyHeight } from "../../../../layouts/default/hooks/useStickyHeight";

type State = HTMLAttributes<HTMLDivElement> & {
  title?: string;
};

const NotificationSubHeader: FC<State> = (props) => {
  const { className = "", title, ...rest } = props;
  const navigate = useNavigate();

  useStickyHeight("--sub-header-height", 48);

  const handelBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/notifications");
    }
  };

  return (
    <div {...rest} className={`notification-sub-header ${className}`}>
      <IconButton onClick={handelBack}>
        <IIonChevronBack />
      </IconButton>
      <p style={{ margin: 0 }}>{title}</p>
    </div>
  );
};

export default NotificationSubHeader;
