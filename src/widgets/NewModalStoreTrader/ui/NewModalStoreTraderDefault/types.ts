import { NewUserTradersSchema } from "@/shared/lib/types/NewUserTraders/model/types";
import type { ReactNode } from "react";
import z from "zod";

export const NewModalStoreTraderDefaultSchema = z.object({
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
    input: [z.number(), z.number()],
    output: z.void(),
  }),
  handleCloseModal: z.function({
    input: [],
    output: z.void(),
  }),
  IconClose: z.custom<ReactNode>(),
  selectedTrader: NewUserTradersSchema,
});

export type NewModalStoreTraderDefaultProps = z.infer<
  typeof NewModalStoreTraderDefaultSchema
>;
