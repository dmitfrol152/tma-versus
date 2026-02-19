import { useQuery } from "@tanstack/react-query";
import { newFetchGetDataTeam } from "../../newFetchGetDataTeam";

export function useFetchGetDataTeam() {
  const getDataTeamQuery = useQuery({
    queryFn: () => newFetchGetDataTeam(),
    queryKey: ["dataTeam"],
    retry: false,
  });

  return getDataTeamQuery;
}
