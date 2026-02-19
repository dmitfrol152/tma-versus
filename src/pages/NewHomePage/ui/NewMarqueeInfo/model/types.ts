import type { ReactNode } from "react";
import z from "zod";

export const NewMarqueeInfoSchema = z.object({
  children: z.custom<ReactNode>(),
});

export type NewMarqueeInfoProps = z.infer<typeof NewMarqueeInfoSchema>;
