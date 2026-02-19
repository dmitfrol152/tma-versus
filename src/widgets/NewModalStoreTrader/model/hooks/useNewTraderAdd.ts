import { useState } from "react";

export function useNewTraderAdd() {
  const [traderCount, setTraderCount] = useState<number>(1);
  const [isSuccess, setIsSuccess] = useState<"default" | "success" | "error">(
    "default",
  );

  return { traderCount, setTraderCount, setIsSuccess, isSuccess };
}
