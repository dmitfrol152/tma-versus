import { useQuery } from "@tanstack/react-query";
import { fetchDefault } from "./fetchDefault";

export function useFetchDefault() {
  const officeQuery = useQuery({
    queryFn: () => fetchDefault(),
    queryKey: ["office"],
  });

  return officeQuery;
}
