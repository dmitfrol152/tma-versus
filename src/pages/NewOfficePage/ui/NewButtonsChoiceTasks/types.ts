import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewButtonsChoiceTasksSchema = z.object({
  setIsButtonActiveTasks:
    z.custom<
      Dispatch<SetStateAction<"daily" | "weekly" | "season" | "social">>
    >(),
  activeTeam: ActiveClanTypeSchema,
  activeButton: z.enum(["daily", "weekly", "season", "social"]),
});

export type NewButtonsChoiceTasksProps = z.infer<
  typeof NewButtonsChoiceTasksSchema
>;
