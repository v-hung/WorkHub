import { getGroupedPermissions } from "@/common/utils/permission.utils";
import { RoleCreateUpdateRequest } from "@/generate-api";
import { Checkbox, CollapseProps, Form } from "antd";
import { FormInstance } from "antd/lib";

export const getPermissionsFormItems = (
  form: FormInstance<RoleCreateUpdateRequest>
): CollapseProps["items"] =>
  Object.entries(getGroupedPermissions()).map(([group, perms]) => ({
    key: "1",
    label: group,
    children: (
      <Form.Item noStyle shouldUpdate>
        {({ getFieldValue }) => {
          const selected: string[] = getFieldValue("permissions") || [];
          const onChange = (checked: string[]) => {
            const others = selected.filter((val) => !perms.includes(val));
            form.setFieldsValue({
              permissions: [...others, ...checked],
            });
          };

          return (
            <Checkbox.Group
              options={perms.map((p: string) => ({
                label: p.split(".")[2], // chỉ hiển thị action (View, Create,...)
                value: p,
              }))}
              value={selected.filter((val) => perms.includes(val))}
              onChange={onChange}
            />
          );
        }}
      </Form.Item>
    ),
  }));
