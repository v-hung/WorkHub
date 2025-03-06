import { Select, SelectProps } from "antd";
import { ComponentProps, FC, useCallback, useEffect, useState } from "react";
import SelectAsyncScroll from "@/ui/form/SelectAsyncScroll";
import { debounce } from "@/common/utils/common.utils";
import { useUsers } from "../../hooks/useUsers";

type State = ComponentProps<typeof Select> & {
  withoutIds: string[];
};

const UserSelect: FC<State> = (props) => {
  const { className, withoutIds, ...rest } = props;

  const { userPaginated, loading, request, setRequest } = useUsers();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    setRequest((request) => ({
      ...request,
      pageNumber: 1,
    }));
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
      setRequest((request) => ({
        ...request,
        pageNumber: 1,
        searchString: value,
      }));
    }, 300),
    [request]
  );

  const handlePopupScroll = useCallback(() => {
    if (userPaginated.hasNextPage) {
      setRequest((request) => ({
        ...request,
        pageNumber: request.pageNumber + 1,
      }));
    }
  }, [request, userPaginated.hasNextPage]);

  return (
    <SelectAsyncScroll
      {...rest}
      className={className}
      options={options}
      loading={loading}
      onSearch={handleSearch}
      scrollInfiniteCb={handlePopupScroll}
    />
  );
};

export default UserSelect;
