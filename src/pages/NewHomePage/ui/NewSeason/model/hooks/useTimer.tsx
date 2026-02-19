import { useEffect, useState } from "react";
import { useParseFromTimeToSec } from "./useParseFromTimeToSec";
import { useParseFromSecToTime } from "./useParseFromSecToTime";
import { getParseFromTimeToSec } from "../../utils/getParseFromTimeToSec";

export function useTimer(dataTimer: string) {
  const parseFromTimeToS = useParseFromTimeToSec(dataTimer);
  const [timer, setTimer] = useState<number>(parseFromTimeToS);
  const parseFromSecToTime = useParseFromSecToTime(timer);
  const [prevTimer, setPrevTimer] = useState<string>(dataTimer);

  if (dataTimer !== prevTimer) {
    setTimer(getParseFromTimeToSec(dataTimer));
    setPrevTimer(dataTimer);
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, [dataTimer]);

  return parseFromSecToTime;
}
