import { useState } from "react";

export function useNewActiveButtonsManagerTeam() {
  const [isButtonActiveTeam, setIsButtonActiveTeam] = useState<"1" | "2">("1");

  return {
    isButtonActiveTeam,
    setIsButtonActiveTeam,
  };
}
