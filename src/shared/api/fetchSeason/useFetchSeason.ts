import { useQuery } from "@tanstack/react-query";
import { fetchSeason } from "@/shared/api/fetchSeason/fetchSeason";

export function useFetchSeason() {
  const clansQuery = useQuery({
    queryFn: () => fetchSeason(),
    queryKey: ["season"],
  });

  return clansQuery;
}
