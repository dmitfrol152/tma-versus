import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewOfficeSchema } from "@/shared/lib/types/NewOffice/model/types";
import { NewTradersSchema } from "@/shared/lib/types/NewTraders/model/types";
import { NewUserTradersSchema } from "@/shared/lib/types/NewUserTraders/model/types";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewStoreLayoutSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  isButtonActiveTradersOffices: z.enum(["traders", "offices"]),
  setIsButtonActiveTradersOffices:
    z.custom<Dispatch<SetStateAction<"traders" | "offices">>>(),
  handleOpenModal: z.function({
    input: [NewUserTradersSchema.optional()],
    output: z.void(),
  }),
  isOpenModal: z.boolean(),
  setIsOpenModal: z.custom<Dispatch<SetStateAction<boolean>>>(),
  queryTraders: z.array(NewTradersSchema),
  queryOffices: z.array(NewOfficeSchema),
  selectedTrader: NewUserTradersSchema.optional(),
  currentLevel: z.number(),
  handleClickBuyOffice: z.function({
    input: [NewOfficeSchema.optional()],
    output: z.void(),
  }),
  setStepIndex: z.function({
    input: [z.number()],
    output: z.void(),
  }),
  isStartTour: z.boolean(),
  stepIndex: z.number(),
});

export type NewStoreLayoutProps = z.infer<typeof NewStoreLayoutSchema>;
