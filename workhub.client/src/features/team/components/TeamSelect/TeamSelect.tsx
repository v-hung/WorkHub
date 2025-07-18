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
import { useTeams } from "../../hooks/useTeams";
import { isEmpty } from "@/utils/validate.utils";

type State = ComponentProps<typeof Select>;

const TeamSelect: FC<State> = (props) => {
  const { className, value, ...rest } = props;

  const { teamPaginated, loading, request, updateRequest, fetchTeams } =
    useTeams();
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    if (!isEmpty(value)) {
      fetchTeams(Array.isArray(value) ? value : [value]).then((data) => {
        setOptions(data.map((v) => ({ label: v.name, value: v.id })));
      });
    }
  }, []);

  useEffect(() => {
    setOptions((prev) => {
      const newOptions = teamPaginated.data.map((item) => ({
        label: item.name,
        value: item.id,
      }));

      return teamPaginated.currentPage === 1
        ? newOptions
        : Array.from(
            new Map(
              [...(prev ?? []), ...newOptions].map((item) => [item.value, item])
            ).values()
          );
    });
  }, [teamPaginated.data]);

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
    if (teamPaginated.hasNextPage) {
      updateRequest((request) => ({
        ...request,
        pageNumber: request.pageNumber + 1,
      }));
    }
  }, [request, teamPaginated.hasNextPage]);

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

export default TeamSelect;

export const TeamSelectMemo = memo(TeamSelect);
