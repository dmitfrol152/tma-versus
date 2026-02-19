import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserTradersSchema } from "@/shared/lib/types/NewUserTraders/model/types";
import z from "zod";

export const NewTraderUiSchema = z.object({
  trader: NewUserTradersSchema.optional(),
  activeTeam: ActiveClanTypeSchema,
  isLast: z.boolean().optional(),
  isButton: z.boolean().optional(),
  handleClickButton: z
    .function({
      input: [NewUserTradersSchema.optional()],
      output: z.void(),
    })
    .optional(),
  handleOpenModalInventar: z
    .function({
      input: [],
      output: z.void(),
    })
    .optional(),
  buttonName: z.string().optional(),
});

export type NewTraderUiProps = z.infer<typeof NewTraderUiSchema>;
