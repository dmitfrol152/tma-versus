import { useQuery } from "@tanstack/react-query";
import { newFetchStore } from "../../newFetchStore";

export function useNewFetchStore() {
  const getShopQuery = useQuery({
    queryFn: () => newFetchStore(),
    queryKey: ["store"],
    retry: false,
  });

  return getShopQuery;
}
