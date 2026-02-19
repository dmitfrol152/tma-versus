import type { ReactNode } from "react";
import z from "zod";

export const ModalStoreTraderUiSchema = z.object({
  traderCount: z.number(),
  ImageMan: z.string(),
  IconRainbow: z.custom<ReactNode>(),
  IconCoin: z.custom<ReactNode>(),
  handleAddCoint: z.function({
    input: [],
    output: z.void(),
  }),
  handleSubCoint: z.function({
    input: [],
    output: z.void(),
  }),
  handleBuyCoint: z.function({
    input: [],
    output: z.void(),
  }),
  handleCloseModal: z.function({
    input: [],
    output: z.void(),
  }),
  IconClose: z.custom<ReactNode>(),
});

export type ModalStoreTraderUiProps = z.infer<typeof ModalStoreTraderUiSchema>;
