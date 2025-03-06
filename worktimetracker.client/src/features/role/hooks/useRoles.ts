import { getMessageError } from "@/common/utils/error";
import { TeamDto, TeamDtoPaginated } from "@/generate-api";
import { teamApi } from "@/services/apiClient";
import { notification } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useTeams = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);

  // GET LIST team
  // =============

  const [teamPaginated, setTeamPaginated] = useState<TeamDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 25,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const [request, setRequest] = useState({
    pageNumber: teamPaginated.currentPage,
    pageSize: teamPaginated.pageSize,
    searchString: "",
  });

  const fetchTeams = useCallback(async () => {
    setLoading(true);
    try {
      const data = await teamApi.teamGetAll(
        request.pageNumber,
        request.pageSize,
        request.searchString
      );
      setTeamPaginated(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    fetchTeams();
  }, [request]);

  // GET team BY ID
  // ==============

  const [team, setTeam] = useState<TeamDto | null>();

  const fetchTeam = async (id: number) => {
    setLoading(true);
    try {
      const data = await teamApi.teamGetById(id);
      setTeam(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    teamPaginated,
    loading,
    fetchTeams,
    request,
    setRequest,
    team,
    fetchTeam,
  };
};
