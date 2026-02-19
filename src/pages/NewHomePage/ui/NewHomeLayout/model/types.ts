import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { NewSeasonSchema } from "@/shared/lib/types/NewSeason/model/types";
import { NewOrderedClansSchema } from "@/widgets/NewClans/model/types";
import type { Dispatch, SetStateAction } from "react";
import z from "zod";

export const NewHomeLayoutDataSchema = z.object({
  season: NewSeasonSchema,
  activeTeam: ActiveClanTypeSchema,
  isOpenModalConfirm: z.boolean(),
  isOpenModalStatusText: z.string(),
  isOpenModalStatus: z.boolean(),
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
  handleCloseModal: z.function({
    input: [],
    output: z.void(),
  }),
  handleClickChangeTeam: z.function({
    input: [],
    output: z.void(),
  }),
  isLoadingPayChangeTeam: z.boolean(),
  isStartTour: z.boolean(),
  stepIndex: z.number(),
  setIsStartTour: z.custom<Dispatch<SetStateAction<boolean>>>(),
});

export type NewHomeLayoutDataProps = z.infer<typeof NewHomeLayoutDataSchema>;
