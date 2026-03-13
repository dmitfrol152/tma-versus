import { useQuery } from "@tanstack/react-query";
import { newFetchCommunity } from "../../newFetchCommunity";

export function useNewFetchCommunity() {
  const newFetchCommunityQuery = useQuery({
    queryFn: () => newFetchCommunity(),
    queryKey: ["communityFetch"],
    retry: false,
  });

  return newFetchCommunityQuery;
}
