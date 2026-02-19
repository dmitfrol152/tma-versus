import { useQuery } from "@tanstack/react-query";
import { fetchTraders } from "@/shared/api/fetchTraders/fetchTraders";

export function useFetchTraders() {
  const tradersQuery = useQuery({
    queryFn: () => fetchTraders(),
    queryKey: ["traders"],
  });

  return tradersQuery;
}
