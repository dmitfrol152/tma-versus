import { PeoplesSchema } from "@/shared/lib/constants/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import z from "zod";

export const AccordeonItemSchema = z.object({
  item: PeoplesSchema,
  activeTeam: ActiveClanTypeSchema,
  index: z.number(),
});

export type AccordeonItemProps = z.infer<typeof AccordeonItemSchema>;
