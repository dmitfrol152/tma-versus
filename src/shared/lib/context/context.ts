import { createContext, useContext } from "react";
import type { Theme } from "./types";

export const ThemeContext = createContext<Theme | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Error in Context");
  return context;
};
