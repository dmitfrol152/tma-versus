// import { ClansFieldsSchema, ClansSchema } from "@/shared/api/fetchClans/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewSeasonSchema } from "@/shared/lib/types/NewSeason/model/types";
import { TeamSchema } from "@/shared/lib/types/NewTeam/model/types";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewOrderedClansSchema = z.object({
  key: z.string(),
  clan: TeamSchema.nullable(),
});

export type NewOrderedClansProps = z.infer<typeof NewOrderedClansSchema>;

export const NewClanSchema = z.object({
  data: NewSeasonSchema,
  activeTeam: ActiveClanTypeSchema,
  orderedClans: z.array(NewOrderedClansSchema).nullable(),
  handleClickTeamOne: z.function({
    input: [],
    output: z.void(),
  }),
  handleClickTeamTwo: z.function({
    input: [],
    output: z.void(),
  }),
  handleClickChangeTeamConfirm: z.function({
    input: [],
    output: z.void(),
  }),
  isStartTour: z.boolean(),
  setIsStartTour: z.custom<Dispatch<SetStateAction<boolean>>>(),
});

export type NewClanProps = z.infer<typeof NewClanSchema>;

export const NewClansListSchema = z.object({
  activeClan: ActiveClanTypeSchema,
  orderedClans: z.array(NewOrderedClansSchema).nullable(),
  isStartTour: z.boolean(),
  setIsStartTour: z.custom<Dispatch<SetStateAction<boolean>>>(),
});

export type NewClansListProps = z.infer<typeof NewClansListSchema>;

export const NewClansButtonsSchema = z.object({
  activeClan: ActiveClanTypeSchema,
  data: NewSeasonSchema,
  isButtonActiveBullsBears: z.enum(["1", "2"]).optional(),
  handleClickTeamOne: z.function({
    input: [],
    output: z.void(),
  }),
  handleClickTeamTwo: z.function({
    input: [],
    output: z.void(),
  }),
  handleClickChangeTeamConfirm: z.function({
    input: [],
    output: z.void(),
  }),
});

export type NewClansButtonsProps = z.infer<typeof NewClansButtonsSchema>;

// export const ClansDataSchema = z.object({
//   data: ClansSchema,
// });

// export type ClansDataProps = z.infer<typeof ClansDataSchema>;
