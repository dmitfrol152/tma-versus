// import { NewInfoPersonSchema } from "@/shared/lib/store/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewUserBalanceSchema } from "@/shared/lib/types/NewUserBalance/model/types";
import z from "zod";

export const NewInfoBlockYourSafeSchema = z.object({
  buttonName: z.enum(["Claim"]),
  activeTeam: ActiveClanTypeSchema,
  // prize: z.number(),
  // user: NewInfoPersonSchema,
  userBalanse: NewUserBalanceSchema.nullable(),
  handleClaimBank: z.function({
    input: [],
    output: z.void(),
  }),
});

export type NewInfoBlockYourSafeProps = z.infer<
  typeof NewInfoBlockYourSafeSchema
>;

export const NewPercentSchema = z.object({
  startValue: z.number(),
  endValue: z.number(),
});

export type NewPercentProps = z.infer<typeof NewPercentSchema>;
