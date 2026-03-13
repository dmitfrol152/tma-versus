import type { Dispatch, RefObject, SetStateAction } from "react";
import z from "zod";
import { CopyReferalLinkSchema } from "../../model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import { newFetchCommunitySchema } from "@/shared/api/newFetchCommunity/model/types";

export const CommunityLayoutSchema = z.object({
  activeTeam: ActiveClanTypeSchema,
  isActiveReferalLink: z.string(),
  // setIsActiveReferalLink: z.custom<Dispatch<SetStateAction<string>>>(),
  inputRef: z.custom<RefObject<HTMLInputElement | null>>().optional(),
  handleCopyReferal: z.function({
    input: [],
    output: z.void(),
  }),
  copyStatus: CopyReferalLinkSchema,
  isButtonActiveCommunity: z.enum(["statistic", "structure", "pool"]),
  setIsButtonActiveCommunity:
    z.custom<Dispatch<SetStateAction<"statistic" | "structure" | "pool">>>(),
  isStartTour: z.boolean(),
  stepIndex: z.number(),
  isOpenModalStatus: z.boolean(),
  dataCommunityPage: newFetchCommunitySchema,
});

export type CommunityLayoutProps = z.infer<typeof CommunityLayoutSchema>;
