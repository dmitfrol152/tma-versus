import { useQuery } from "@tanstack/react-query";
import { newFetchHomePage } from "../../newFetchHomePage";

export function useFetchHomePage() {
  const homePageQuery = useQuery({
    queryFn: () => newFetchHomePage(),
    queryKey: ["homePage"],
    retry: false,
  });

  return homePageQuery;
}
