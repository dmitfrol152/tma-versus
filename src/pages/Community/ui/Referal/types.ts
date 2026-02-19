import type { RefObject } from "react";
import z from "zod";
import { CopyReferalLinkSchema } from "../../model/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";

export const ReferalSchema = z.object({
  isActiveReferalLink: z.string(),
  // setIsActiveReferalLink: z.custom<Dispatch<SetStateAction<string>>>(),
  activeTeam: ActiveClanTypeSchema,
  inputRef: z.custom<RefObject<HTMLInputElement | null>>().optional(),
  handleCopyReferal: z.function({
    input: [],
    output: z.void(),
  }),
  copyStatus: CopyReferalLinkSchema,
  isRefStep: z.boolean(),
});

export type ReferalProps = z.infer<typeof ReferalSchema>;
