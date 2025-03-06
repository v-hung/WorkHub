import { Select, SelectProps } from "antd";
import { ComponentProps, FC, useCallback, useEffect, useState } from "react";
import SelectAsyncScroll from "@/ui/form/SelectAsyncScroll";
import { debounce } from "@/common/utils/common.utils";
import { useProjects } from "../../hooks/useProjects";

type State = ComponentProps<typeof Select>;

const ProjectSelect: FC<State> = (props) => {
  const { className, ...rest } = props;

  const { projectPaginated, loading, request, setRequest } = useProjects();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    setRequest((request) => ({
      ...request,
      pageNumber: 1,
    }));
  }, []);

  useEffect(() => {
    setOptions((prev) => {
      const newOptions = projectPaginated.data.map((item) => ({
        label: item.name,
        value: item.id,
      }));

      return projectPaginated.currentPage === 1
        ? newOptions
        : Array.from(
            new Map(
              [...(prev ?? []), ...newOptions].map((item) => [item.value, item])
            ).values()
          );
    });
  }, [projectPaginated.data]);

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
    if (projectPaginated.hasNextPage) {
      setRequest((request) => ({
        ...request,
        pageNumber: request.pageNumber + 1,
      }));
    }
  }, [request, projectPaginated.hasNextPage]);

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

export default ProjectSelect;
