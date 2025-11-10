import { Col, Form, Input, Row, Select, Spin } from "antd";
import {
  Dispatch,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  CreateProjectCommand,
  ProjectDto,
  ProjectStatus,
} from "@/generate-api";
import {
  CreateProjectCommandCustomType,
  useProjectAction,
} from "../../hooks/useProjectAction";
import { useNavigate } from "react-router";
import { TeamSelectMemo } from "@/features/organization/team/components/TeamSelect/TeamSelect";
import { UserSelectMemo } from "@/features/organization/user/components/UserSelect/UserSelect";
import RangePicker from "@/ui/form/RangePicker";

type State = HTMLAttributes<HTMLDivElement> & {
  record?: ProjectDto;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type ProjectFormCreateRefState = {
  handelUpsert: () => void;
};

const ProjectFormCreate = forwardRef<ProjectFormCreateRefState, State>(
  (props, ref) => {
    const { className, record, setLoading, ...rest } = props;

    const navigate = useNavigate();
    const { loading, create, update, formDefault } = useProjectAction();

    useEffect(() => {
      if (setLoading) {
        setLoading(loading);
      }
    }, [loading, setLoading]);

    const [form] = Form.useForm<CreateProjectCommandCustomType>();
    const [formState] = useState<CreateProjectCommandCustomType>(
      formDefault(record)
    );

    useImperativeHandle(ref, () => ({
      handelUpsert() {
        form.validateFields().then(async () => {
          const formValues = form.getFieldsValue();

          const body: CreateProjectCommand = {
            ...formValues,
            startDate: formValues.completionTime?.[0] || null,
            endDate: formValues.completionTime?.[1] || null,
          };

          if (!record) {
            await create(body, () => navigate("/projects"));
          } else {
            await update(record.id, body, () => navigate("/projects"));
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
                label="Project name"
                name="name"
                rules={[{ required: true }]}
              >
                <Input placeholder="name" />
              </Form.Item>
            </Col>

            <Col xs={24}>
              <Form.Item label="Description" name="description">
                <Input placeholder="description" />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item label="Completion Time" name="completionTime">
                <RangePicker />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="Status" name="status">
                <Select
                  options={Object.entries(ProjectStatus).map(
                    ([key, value]) => ({
                      value,
                      label: key,
                    })
                  )}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="Team" name="teamId">
                <TeamSelectMemo />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item
                label="Manager"
                name="managerId"
                rules={[{ required: true }]}
              >
                <UserSelectMemo />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12} xl={8}>
              <Form.Item label="Members" name="memberIds">
                <UserSelectMemo mode="multiple" />
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

export default ProjectFormCreate;
