import { Select, SelectProps } from "antd";
import {
  ComponentProps,
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useRoles } from "../../hooks/useRoles";
import SelectAsyncScroll from "@/ui/form/SelectAsyncScroll";
import { debounce } from "@/utils/common.utils";
import { isEmpty } from "@/utils/validate.utils";

type State = ComponentProps<typeof Select>;

const RoleSelect: FC<State> = (props) => {
  const { className, value, ...rest } = props;

  const { rolePaginated, loading, request, updateRequest, fetchRoles } =
    useRoles();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    if (!isEmpty(value)) {
      fetchRoles(Array.isArray(value) ? value : [value]).then((data) => {
        setOptions(data.map((v) => ({ label: v.name, value: v.id })));
      });
    }
  }, []);

  useEffect(() => {
    setOptions((prev) => {
      const newOptions = rolePaginated.data.map((item) => ({
        label: item.name,
        value: item.name,
      }));

      return rolePaginated.currentPage === 1
        ? newOptions
        : Array.from(
            new Map(
              [...(prev ?? []), ...newOptions].map((item) => [item.value, item])
            ).values()
          );
    });
  }, [rolePaginated.data]);

  const handleSearch = useCallback(
    debounce((value: string) => {
      updateRequest((request) => ({
        ...request,
        pageNumber: 1,
        where: {
          conditions: [
            {
              column: "name",
              operator: "Contains",
              values: [value],
            },
          ],
        },
      }));
    }, 300),
    [request]
  );

  const handlePopupScroll = useCallback(() => {
    if (rolePaginated.hasNextPage) {
      updateRequest((request) => ({
        ...request,
        pageNumber: request.pageNumber + 1,
      }));
    }
  }, [request, rolePaginated.hasNextPage]);

  const firstOpenDropdown = () => {
    updateRequest((request) => ({
      ...request,
      pageNumber: 1,
    }));
  };

  return (
    <SelectAsyncScroll
      value={value}
      className={className}
      options={options}
      loading={loading}
      onSearch={handleSearch}
      scrollInfiniteCb={handlePopupScroll}
      firstOpenDropdown={firstOpenDropdown}
      mode="multiple"
      {...rest}
    />
  );
};

export default RoleSelect;

export const RoleSelectMemo = memo(RoleSelect);
