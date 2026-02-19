import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewButtonsChoiceOfficeTasksSchema = z.object({
  setIsButtonActiveOfficeTasks:
    z.custom<Dispatch<SetStateAction<"office" | "tasks">>>(),
  activeTeam: ActiveClanTypeSchema,
  activeButton: z.enum(["office", "tasks"]),
});

export type NewButtonsChoiceOfficeTasksProps = z.infer<
  typeof NewButtonsChoiceOfficeTasksSchema
>;
