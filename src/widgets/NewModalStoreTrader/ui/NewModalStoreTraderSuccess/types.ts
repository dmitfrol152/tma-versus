import type { ReactNode } from "react";
import z from "zod";

export const NewModalStoreTraderSuccessSchema = z.object({
  ImageMan: z.string(),
  IconRainbow: z.custom<ReactNode>(),
  handleContinue: z.function({
    input: [],
    output: z.void(),
  }),
  handleCloseModal: z.function({
    input: [],
    output: z.void(),
  }),
  IconClose: z.custom<ReactNode>(),
});

export type NewModalStoreTraderSuccessProps = z.infer<
  typeof NewModalStoreTraderSuccessSchema
>;
