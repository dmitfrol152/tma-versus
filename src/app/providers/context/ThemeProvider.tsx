import { useMemo } from "react";
import type { ThemeProviderProps } from "./types";
import { ThemeContext } from "@/shared/lib/context/context";
import { useSelector } from "react-redux";
import type { NewSelectorProps } from "@/shared/lib/store/types";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );

  const theme = useMemo(() => {
    if (activeTeam === "1") {
      return "green";
    }
    if (activeTeam === "2") {
      return "pink";
    }
    return "blue";
  }, [activeTeam]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
