import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const AccordeonSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
});

export type AccordeonProps = z.infer<typeof AccordeonSchema>;
