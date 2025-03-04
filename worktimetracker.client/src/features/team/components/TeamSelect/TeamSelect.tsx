import { Select, SelectProps } from "antd";
import { ComponentProps, FC, useCallback, useEffect, useState } from "react";
import { useTeams } from "../../hooks/useTeams";
import { debounce } from "@/common/utils/common.utils";

type State = ComponentProps<typeof Select>;

const TeamSelect: FC<State> = (props) => {
  const { className, ...rest } = props;

  const { teams, fetchTeams, loading, setRequest } = useTeams();
  const [options, setOptions] = useState<SelectProps["options"]>([]);
  const [requestType, setRequestType] = useState<"search" | "scroll">("search");

  useEffect(() => {
    fetchTeams();
  }, []);

  useEffect(() => {
    if (requestType === "search") {
      setOptions(
        teams?.data.map((team) => ({
          label: team.name,
          value: team.id,
        }))
      );
    } else if (requestType === "scroll") {
      setOptions((prev) => [
        ...(prev ?? []),
        ...teams.data.map((team) => ({
          label: team.name,
          value: team.id,
        })),
      ]);
    }
  }, [teams]);

  const handleSearch = useCallback(
    debounce((value: string) => {
      if (!value) return;
      setRequestType("search");
      setRequest((r) => ({ ...r, searchString: value }));
    }, 300),
    []
  );

  const handlePopupScroll = async (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (
      target.scrollTop + target.offsetHeight === target.scrollHeight &&
      !loading &&
      teams.hasNextPage
    ) {
      setRequestType("scroll");
      setRequest((r) => ({ ...r, pageNumber: r.pageNumber + 1 }));
    }
  };

  return (
    <>
      <Select
        {...rest}
        className={`${className}`}
        options={options}
        loading={loading}
        showSearch
        // filterOption={false}
        onSearch={handleSearch}
        onPopupScroll={handlePopupScroll}
      ></Select>
      {JSON.stringify(options)}
    </>
  );
};

export default TeamSelect;
