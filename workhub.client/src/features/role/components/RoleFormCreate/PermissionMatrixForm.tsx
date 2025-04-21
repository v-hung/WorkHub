// components/PermissionMatrixForm.tsx
import {
  getPermissionMatrix,
  getPermissionValue,
} from "@/utils/permission.utils";
import { RoleCreateUpdateRequest } from "@/generate-api";
import { Checkbox, Row, Col, Form } from "antd";
import { FormInstance } from "antd/lib";
import React, { ComponentProps, useEffect, useMemo, useState } from "react";

type State = ComponentProps<typeof Row> & {
  form: FormInstance<RoleCreateUpdateRequest>;
};

export const PermissionMatrixForm: React.FC<State> = (props) => {
  const { form, ...rest } = props;
  const matrix = useMemo(() => getPermissionMatrix(), []);
  const [value, setValue] = useState<string[]>([]);

  // const allPermissions = useMemo(
  //   () =>
  //     Object.entries(matrix).flatMap(([group, actions]) =>
  //       actions.map((action) => getPermissionValue(group, action))
  //     ),
  //   [matrix]
  // );

  const handleGroupChange = (group: string, checkedValues: string[]) => {
    const updated = [
      ...value.filter((p) => !p.startsWith(`Permissions.${group}.`)),
      ...checkedValues,
    ];
    setValue(updated);
  };

  const isAllChecked = (group: string) =>
    matrix[group].every((action) =>
      value.includes(getPermissionValue(group, action))
    );

  const toggleGroupAll = (group: string, checked: boolean) => {
    const groupPermissions = matrix[group].map((action) =>
      getPermissionValue(group, action)
    );
    const updated = checked
      ? Array.from(new Set([...value, ...groupPermissions]))
      : value.filter((p) => !groupPermissions.includes(p));
    setValue(updated);
  };

  useEffect(() => {
    const defaultPermissions = form.getFieldValue("permissions") || [];
    setValue(defaultPermissions);
  }, [form]);

  useEffect(() => {
    form.setFieldsValue({ permissions: value });
    console.log({ value });
  }, [value, form]);

  return (
    <Row align="top" {...rest} wrap gutter={[16, 16]}>
      <Col span={24} style={{ marginBottom: "-.5rem" }}>
        <Form.Item name="permissions" noStyle />
        <label>Permissions</label>
      </Col>

      {Object.entries(matrix).map(([group, actions]) => (
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          key={group}
          style={{ paddingLeft: ".5rem" }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: 8,
              paddingLeft: ".5rem",
            }}
          >
            <Checkbox
              checked={isAllChecked(group)}
              onChange={(e) => toggleGroupAll(group, e.target.checked)}
            >
              {group}
            </Checkbox>
          </div>
          <Checkbox.Group
            value={value.filter((p) => p.startsWith(`Permissions.${group}.`))}
            onChange={(checked: any) =>
              handleGroupChange(group, checked as string[])
            }
          >
            <Row style={{ paddingLeft: "1rem" }}>
              {actions.map((action) => {
                const permValue = getPermissionValue(group, action);
                return (
                  <Col key={permValue} span={24}>
                    <Checkbox value={permValue}>{action}</Checkbox>
                  </Col>
                );
              })}
            </Row>
          </Checkbox.Group>
        </Col>
      ))}
    </Row>
  );
};
