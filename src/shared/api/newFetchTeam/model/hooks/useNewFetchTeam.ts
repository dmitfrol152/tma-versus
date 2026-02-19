import { useQuery } from "@tanstack/react-query";
import { newFetchTeam } from "../../newFetchTeam";

export function useNewFetchTeam() {
  const getTeamQuery = useQuery({
    queryFn: () => newFetchTeam(),
    queryKey: ["team"],
    retry: false,
  });

  return getTeamQuery;
}
