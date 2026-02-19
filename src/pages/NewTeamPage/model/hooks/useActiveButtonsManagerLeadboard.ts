import { useState } from "react";

export function useNewActiveButtonsManagerLeadboard() {
  const [isButtonActiveLeadboard, setIsButtonActiveLeadboard] = useState<
    "all time" | "current" | "reward"
  >("all time");

  return {
    isButtonActiveLeadboard,
    setIsButtonActiveLeadboard,
  };
}
