import { useQuery } from "@tanstack/react-query";
import { fetchClans } from "@/shared/api/fetchClans/fetchClans";

export function useFetchClans() {
  const clansQuery = useQuery({
    queryFn: () => fetchClans(),
    queryKey: ["clans"],
  });

  return clansQuery;
}
