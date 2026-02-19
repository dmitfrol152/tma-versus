import type { ReactNode } from "react";
import z from "zod";

export const ThemeProviderSchema = z.object({
  children: z.custom<ReactNode>(),
});

export type ThemeProviderProps = z.infer<typeof ThemeProviderSchema>;
