import { Col, Form, Input, Row, Spin } from "antd";
import {
  Dispatch,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { CreateTeamCommand, TeamFullDto } from "@/generate-api";
import { useTeamAction } from "../../hooks/useTeamAction";
import { useNavigate } from "react-router";
import { UserSelectMemo } from "@/features/user/components/UserSelect/UserSelect";
import { ProjectSelectMemo } from "@/features/project/components/ProjectSelect/ProjectSelect";

type State = HTMLAttributes<HTMLDivElement> & {
  record?: TeamFullDto;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type TeamFormCreateRefState = {
  handelUpsert: () => void;
};

const TeamFormCreate = forwardRef<TeamFormCreateRefState, State>(
  (props, ref) => {
    const { className, record, setLoading, ...rest } = props;

    const navigate = useNavigate();
    const { loading, create, update, formDefault } = useTeamAction();

    useEffect(() => {
      if (setLoading) {
        setLoading(loading);
      }
    }, [loading, setLoading]);

    const [form] = Form.useForm();
    const [formState] = useState<CreateTeamCommand>(formDefault(record));

    useImperativeHandle(ref, () => ({
      handelUpsert() {
        form.validateFields().then(async () => {
          const formValues = form.getFieldsValue();

          if (!record) {
            await create(formValues, () => navigate("/teams"));
          } else {
            await update(record.id, formValues, () => navigate("/teams"));
          }
        });
      },
    }));

    return (
      <div {...rest} className={`form-container ${className}`}>
        <Form
          layout="vertical"
          form={form}
          initialValues={formState}
          validateTrigger="onSubmit"
        >
          <Row wrap gutter={{ sm: 8, md: 16 }}>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Team name"
                name="name"
                rules={[{ required: true }]}
              >
                <Input placeholder="name" />
              </Form.Item>
            </Col>

            <Col span={24} />

            <Col xs={24} lg={12}>
              <Form.Item label="Description" name="description">
                <Input placeholder="description" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Completed Projects" name="completedProjects">
                <Input type="number" placeholder="completedProjects" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Active Projects" name="activeProjects">
                <Input type="number" placeholder="activeProjects" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Manager" name="managerId">
                <UserSelectMemo />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Members" name="memberIds">
                <UserSelectMemo mode="multiple" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Projects" name="projectIds">
                <ProjectSelectMemo mode="multiple" />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        {loading && (
          <div className="loading-container">
            <Spin />
          </div>
        )}
      </div>
    );
  }
);

export default TeamFormCreate;
