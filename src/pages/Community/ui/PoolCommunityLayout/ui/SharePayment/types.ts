import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const SharePaymentSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
});

export type SharePaymentProps = z.infer<typeof SharePaymentSchema>;
