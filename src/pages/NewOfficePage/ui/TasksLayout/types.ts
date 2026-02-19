import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const TasksLayoutSchema = z.object({
  isButtonActiveTasks: z.enum(["daily", "weekly", "season", "social"]),
  setIsButtonActiveTasks:
    z.custom<
      Dispatch<SetStateAction<"daily" | "weekly" | "season" | "social">>
    >(),
  activeTeam: ActiveClanTypeSchema,
  isStartTour: z.boolean(),
  stepIndex: z.number(),
});

export type TasksLayoutProps = z.infer<typeof TasksLayoutSchema>;
