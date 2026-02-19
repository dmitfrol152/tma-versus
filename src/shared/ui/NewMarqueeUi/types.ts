import type { ReactNode } from "react";
import z from "zod";

export const NewMarqueeUiSchema = z.object({
  children: z.custom<ReactNode>(),
});

export type NewMarqueeUiProps = z.infer<typeof NewMarqueeUiSchema>;
