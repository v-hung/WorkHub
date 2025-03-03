import { getMessageError } from "@/common/utils/error";
import { teamDto, teamDtoPaginated } from "@/generate-api";
import { teamApi } from "@/services/apiClient";
import { notification } from "antd";
import { useCallback, useState } from "react";

export const useteams = () => {
  const [loading, setLoading] = useState(false);

  // GET LIST team
  // =============

  const [teams, setteams] = useState<teamDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 100,
    totalPages: 10,
    hasNextPage: true,
    hasPreviousPage: false,
  });

  const [request, setRequest] = useState({
    pageNumber: 1,
    pageSize: 10,
  });

  const fetchteams = useCallback(async () => {
    setLoading(true);
    try {
      const data = await teamApi.teamGetAll(
        request.pageNumber,
        request.pageSize
      );
      setteams(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [request]);

  // GET team BY ID
  // ==============

  const [team, setteam] = useState<teamDto | null>();

  const fetchteam = async (id: string) => {
    setLoading(true);
    try {
      const data = await teamApi.teamGetById(id);
      setteam(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return { teams, loading, fetchteams, setRequest, team, fetchteam };
};
