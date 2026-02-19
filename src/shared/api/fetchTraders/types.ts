import z from "zod";

export const TradersInfoSchema = z.object({
  name: z.string(),
  number: z.number(),
  coints: z.number(),
  totalConts: z.number().optional(),
});

export type TradersInfoProps = z.infer<typeof TradersInfoSchema>;

export const TradersSchema = z.object({
  traders: z.array(TradersInfoSchema),
});

export type TradersProps = z.infer<typeof TradersSchema>;
