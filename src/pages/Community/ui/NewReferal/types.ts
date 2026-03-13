import type { RefObject } from "react";
import z from "zod";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";

export const NewReferalSchema = z.object({
  isActiveReferalLink: z.string(),
  // setIsActiveReferalLink: z.custom<Dispatch<SetStateAction<string>>>(),
  activeTeam: ActiveClanTypeSchema,
  inputRef: z.custom<RefObject<HTMLInputElement | null>>().optional(),
  handleCopyReferal: z.function({
    input: [],
    output: z.void(),
  }),
  isRefStep: z.boolean(),
});

export type NewReferalProps = z.infer<typeof NewReferalSchema>;
