import { NewFetchTeamSchema } from "@/shared/api/newFetchTeam/model/types";
import z from "zod";

export const NewChartDataHookSchema = z.object({
  isButtonActiveTeam: z.enum(["1", "2"]),
  teamQuery: NewFetchTeamSchema,
  currentActiveStatus: z.number(),
});

export type NewChartDataHookProps = z.infer<typeof NewChartDataHookSchema>;

export const NewChartPluginsHookTeamSchema = z.object({
  blur: z.number(),
  color: z.string(),
  offsetY: z.number().optional(),
});

export type NewChartPluginsHookTeamProps = z.infer<
  typeof NewChartPluginsHookTeamSchema
>;

export const NewChartPluginsHookGlowSchema = z.object({
  outerGlowColor: z.string().optional(),
  outerGlowWidth: z.number().optional(),
});

export type NewChartPluginsHookGlowProps = z.infer<
  typeof NewChartPluginsHookGlowSchema
>;
