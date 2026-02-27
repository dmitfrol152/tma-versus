import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserSchema } from "@/shared/lib/types/NewUser/model/types";
import { NewUserBalanceSchema } from "@/shared/lib/types/NewUserBalance/model/types";
import z from "zod";

export const NewHeaderWalletSchema = z.object({
  isConnectWallet: z.boolean(),
  openWallet: z.function({
    input: [],
    output: z.void(),
  }),
  activeTeam: ActiveClanTypeSchema,
  userBalanse: NewUserBalanceSchema.nullable(),
  userMain: NewUserSchema.nullable(),
});

export type NewHeaderWalletProps = z.infer<typeof NewHeaderWalletSchema>;
