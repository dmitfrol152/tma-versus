import { useState } from "react";

export function useTraderAdd() {
  const [traderCount, setTraderCount] = useState<number>(1);
  const [isSuccess, setIsSuccess] = useState<"default" | "success" | "error">(
    "default"
  );

  return { traderCount, setTraderCount, setIsSuccess, isSuccess };
}
