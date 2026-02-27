import z from "zod";
import { NewUserBalanceSchema } from "@shared/lib/types/NewUserBalance/model/types";
import { NewUserSchema } from "../types/NewUser/model/types";

export const NewTeamSliceSchema = z.object({
  teamValue: z.enum(["1", "2"]).nullable(),
});

export type NewTeamSliceProps = z.infer<typeof NewTeamSliceSchema>;

export const NewSelectorSchema = z.object({
  teamName: NewTeamSliceSchema,
});

export type NewSelectorProps = z.infer<typeof NewSelectorSchema>;

export const NewInfoPersonSchema = z.object({
  nickname: z.string(),
  balance: z.number(),
  total_rewards: z.number(),
  received_coins_from_referrals: z.number(),
  friends_are_inv: z.number(),
  total_friends_earnings: z.number(),
  invite_link: z.string(),
});

export type NewInfoPersonProps = z.infer<typeof NewInfoPersonSchema>;

export const NewInfoPersonValueSchema = z.object({
  infoPerson: NewInfoPersonSchema,
});

export type NewInfoPersonValueProps = z.infer<typeof NewInfoPersonValueSchema>;

export const NewInfoPersonNameSchema = z.object({
  infoPersonName: NewInfoPersonValueSchema,
});

export type NewInfoPersonNameProps = z.infer<typeof NewInfoPersonNameSchema>;

export const NewuserBalanseStoreValueSchema = z.object({
  userBalanse: NewUserBalanceSchema,
});

export type NewuserBalanseStoreValueProps = z.infer<
  typeof NewuserBalanseStoreValueSchema
>;

export const NewuserBalanseStoreNameSchema = z.object({
  userBalanseName: NewuserBalanseStoreValueSchema,
});

export type NewuserBalanseStoreNameProps = z.infer<
  typeof NewuserBalanseStoreNameSchema
>;

export const NewPrizeSliceSchema = z.object({
  prizeValue: z.number(),
});

export type NewPrizeSliceProps = z.infer<typeof NewPrizeSliceSchema>;

export const NewSelectorPrizeSchema = z.object({
  prizeName: NewPrizeSliceSchema,
});

export type NewSelectorPrizeProps = z.infer<typeof NewSelectorPrizeSchema>;

export const NewUserValueSchema = z.object({
  user: NewUserSchema,
});

export type NewUserValueProps = z.infer<typeof NewUserValueSchema>;

export const NewUserNameSchema = z.object({
  userUserName: NewUserValueSchema,
});

export type NewUserNameProps = z.infer<typeof NewUserNameSchema>;
