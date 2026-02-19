import { useQuery } from "@tanstack/react-query";
import { newFetchOffice } from "../../newFetchOffice";

export function useNewFetchOffice() {
  const officeQuery = useQuery({
    queryFn: () => newFetchOffice(),
    queryKey: ["office"],
    retry: false,
  });

  return officeQuery;
}
