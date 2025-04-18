// components/PermissionMatrixForm.tsx
import {
  getPermissionMatrix,
  getPermissionValue,
} from "@/common/utils/permission.utils";
import { RoleCreateUpdateRequest } from "@/generate-api";
import { Checkbox, Form, Row, Col } from "antd";
import { FormInstance } from "antd/lib";
import React, { ComponentProps, useMemo, useState } from "react";

type State = ComponentProps<typeof Row> & {
  form: FormInstance<RoleCreateUpdateRequest>;
};

export const PermissionMatrixForm: React.FC<State> = (props) => {
  const { form, ...rest } = props;
  const matrix = useMemo(() => getPermissionMatrix(), []);
  const [value, setValue] = useState<string[]>([]);

  const allPermissions = useMemo(
    () =>
      Object.entries(matrix).flatMap(([group, actions]) =>
        actions.map((action) => getPermissionValue(group, action))
      ),
    [matrix]
  );

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

  return (
    <Row gutter={24} align="top" {...rest}>
      {Object.entries(matrix).map(([group, actions]) => (
        <Col key={group}>
          <div style={{ fontWeight: "bold", marginBottom: 8 }}>
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
            <Row>
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
