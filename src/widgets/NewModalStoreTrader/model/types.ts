import { NewUserTradersSchema } from "@/shared/lib/types/NewUserTraders/model/types";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const ModalStoreTraderSchema = z.object({
  setIsOpenModal: z.custom<Dispatch<SetStateAction<boolean>>>(),
  selectedTrader: NewUserTradersSchema.optional(),
});

export type ModalStoreTraderProps = z.infer<typeof ModalStoreTraderSchema>;
