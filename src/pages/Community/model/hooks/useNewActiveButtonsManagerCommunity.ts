import { useState } from "react";

export function useNewActiveButtonsManagerCommunity() {
  const [isButtonActiveCommunity, setIsButtonActiveCommunity] = useState<
    "statistic" | "structure" | "pool"
  >("statistic");

  return {
    isButtonActiveCommunity,
    setIsButtonActiveCommunity,
  };
}
