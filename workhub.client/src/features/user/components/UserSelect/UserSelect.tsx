import { Select, SelectProps } from "antd";
import {
  ComponentProps,
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import SelectAsyncScroll from "@/ui/form/SelectAsyncScroll";
import { debounce } from "@/utils/common.utils";
import { useUsers } from "../../hooks/useUsers";
import { isEmpty } from "@/utils/validate.utils";

type State = ComponentProps<typeof Select> & {
  withoutIds?: string[];
};

const UserSelect: FC<State> = (props) => {
  const { className, withoutIds = [], value, ...rest } = props;

  const { userPaginated, loading, request, updateRequest, fetchUsers } =
    useUsers();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    if (!isEmpty(value)) {
      fetchUsers(Array.isArray(value) ? value : [value]).then((data) => {
        setOptions(data.map((v) => ({ label: v.email, value: v.id })));
      });
    }
  }, []);

  useEffect(() => {
    setOptions((prev) => {
      const newOptions = userPaginated.data.map((item) => ({
        label: item.email,
        value: item.id,
      }));

      return userPaginated.currentPage === 1
        ? newOptions
        : Array.from(
            new Map(
              [...(prev ?? []), ...newOptions]
                .filter((item) => !withoutIds.includes(item.value!.toString()))
                .map((item) => [item.value, item])
            ).values()
          );
    });
  }, [userPaginated.data]);

  const handleSearch = useCallback(
    debounce((value: string) => {
      updateRequest((request) => ({
        ...request,
        pageNumber: 1,
        searchString: value,
      }));
    }, 300),
    [request]
  );

  const handlePopupScroll = useCallback(() => {
    if (userPaginated.hasNextPage) {
      updateRequest((request) => ({
        ...request,
        pageNumber: request.pageNumber + 1,
      }));
    }
  }, [request, userPaginated.hasNextPage]);

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
      {...rest}
    />
  );
};

export default UserSelect;

export const UserSelectMemo = memo(UserSelect);
