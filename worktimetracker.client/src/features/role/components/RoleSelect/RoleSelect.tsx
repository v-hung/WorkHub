import { Select } from "antd";
import { ComponentProps, FC, memo, useEffect, useMemo } from "react";
import { useRoles } from "../../hooks/useRoles";

type State = ComponentProps<typeof Select>;

const RoleSelect: FC<State> = (props) => {
  const { ...rest } = props;

  const { roles, loading, fetchRoles } = useRoles();

  useEffect(() => {
    fetchRoles();
  }, []);

  const options = useMemo(
    () => roles.map((role) => ({ label: role.name, value: role.name })),
    [roles]
  );

  return (
    <Select {...rest} options={options} loading={loading} mode="multiple" />
  );
};

export default RoleSelect;

export const RoleSelectMemo = memo(RoleSelect);
