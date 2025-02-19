import { Col, Form, Row } from "antd";
import { FC, forwardRef, HTMLAttributes, useImperativeHandle } from "react";
import { useUserAction } from "../../hooks/useUserAction";

type State = HTMLAttributes<HTMLDivElement>;

const UserFormCreate: FC<State> = forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const { createUser, updateUser } = useUserAction();

  useImperativeHandle(ref, () => ({
    handelUpsert() {},
  }));

  return (
    <div {...rest} className={`form-container ${className}`}>
      <Form>
        <Row>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
});

export default UserFormCreate;
