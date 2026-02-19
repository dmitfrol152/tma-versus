import { useMemo } from "react";
import { getParseFromSecToTime } from "../../utils/getParseFromSecToTime";

export function useParseFromSecToTime(time: number) {
  const parseFromSecToTime = useMemo(() => {
    return getParseFromSecToTime(time);
  }, [time]);

  return parseFromSecToTime;
}
