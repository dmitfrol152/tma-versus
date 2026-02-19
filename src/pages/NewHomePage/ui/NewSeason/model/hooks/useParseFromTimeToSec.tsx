import { useMemo } from "react";
import { getParseFromTimeToSec } from "../../utils/getParseFromTimeToSec";

export function useParseFromTimeToSec(time: string) {
  const parseFromTimeToS = useMemo(() => {
    return getParseFromTimeToSec(time);
  }, [time]);

  return parseFromTimeToS;
}
