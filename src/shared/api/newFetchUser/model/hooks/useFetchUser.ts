import { useQuery } from "@tanstack/react-query";
import { newFetchUser } from "../../newFetchUser";

export function useFetchUser() {
  const getDataTeamQuery = useQuery({
    queryFn: () => newFetchUser(),
    queryKey: ["user"],
    retry: false,
  });

  return getDataTeamQuery;
}
