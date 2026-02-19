import { useMemo } from "react";
import type { NewPercentProps } from "../types";

export function useNewPercent({ startValue, endValue }: NewPercentProps) {
  const { percent } = useMemo(() => {
    const percent =
      endValue > 0 ? Math.min((startValue / endValue) * 100, 100) : 0;

    return {
      percent,
    };
  }, [endValue, startValue]);

  return { percent };
}
