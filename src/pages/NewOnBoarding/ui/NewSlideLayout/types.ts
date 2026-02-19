import type { ReactNode } from "react";
import z from "zod";

export const NewSlideLayoutSchema = z.object({
  buttonLeft: z.custom<ReactNode>(),
  buttonRight: z.custom<ReactNode>(),
  slideTitle: z.custom<ReactNode>(),
  slideDescription: z.custom<ReactNode>(),
  backgroundImage: z.string(),
  slideStepInfo: z.custom<ReactNode>(),
  buttonNextStep: z.custom<ReactNode>(),
  buttonSkipInfo: z.custom<ReactNode>(),
});

export type NewSlideLayoutProps = z.infer<typeof NewSlideLayoutSchema>;
