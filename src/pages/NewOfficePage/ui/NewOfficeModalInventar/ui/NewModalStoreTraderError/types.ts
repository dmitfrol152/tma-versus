import type { ReactNode } from "react";
import z from "zod";

export const NewModalStoreTraderErrorSchema = z.object({
  ImageMan: z.string(),
  IconRainbow: z.custom<ReactNode>(),
  handleNavigateOffice: z.function({
    input: [],
    output: z.void(),
  }),
  handleCloseModal: z.function({
    input: [],
    output: z.void(),
  }),
  IconClose: z.custom<ReactNode>(),
});

export type NewModalStoreTraderErrorProps = z.infer<
  typeof NewModalStoreTraderErrorSchema
>;
