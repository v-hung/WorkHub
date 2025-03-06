import { Select } from "antd";
import { ComponentProps, FC, useEffect, useMemo } from "react";
import { useRoles } from "../../hooks/useRoles";

type State = ComponentProps<typeof Select>;

const RoleSelect: FC<State> = (props) => {
  const { ...rest } = props;

  const { roles, loading, fetchRoles } = useRoles();

  useEffect(() => {
    fetchRoles();
  }, []);

  const options = useMemo(
    () => roles.map((role) => ({ label: role.name, value: role.id })),
    [roles]
  );

  return (
    <Select {...rest} options={options} loading={loading} mode="multiple" />
  );
};

export default RoleSelect;
