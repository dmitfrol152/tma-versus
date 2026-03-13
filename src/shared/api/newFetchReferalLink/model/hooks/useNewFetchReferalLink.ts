import { useQuery } from "@tanstack/react-query";
import { newFetchReferalLink } from "../../newFetchReferalLink";

export function useNewFetchReferalLink() {
  const referalLinkQuery = useQuery({
    queryFn: () => newFetchReferalLink(),
    queryKey: ["referalLink"],
    retry: false,
  });

  return referalLinkQuery;
}
