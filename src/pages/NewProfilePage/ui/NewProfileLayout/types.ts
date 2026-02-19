import { NewInfoPersonSchema } from "@/shared/lib/store/types";
import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, RefObject, SetStateAction } from "react";
import z from "zod";

export const CopyStatusLinkProfileSchema = z.object({
  message: z.string(),
  type: z.enum(["success", "error"]).nullable(),
});

export const NewProfileLayoutSchema = z.object({
  value: z.string(),
  setValue: z.custom<Dispatch<SetStateAction<string>>>(),
  activeTeam: ActiveClanTypeSchema,
  handleChangeButton: z.function({
    input: [],
    output: z.void(),
  }),
  isEditing: z.boolean().optional(),
  user: NewInfoPersonSchema,
  refField: z.custom<RefObject<HTMLInputElement | null>>(),
  handleWithdrawalButton: z.function({
    input: [],
    output: z.void(),
  }),
  handleShareButton: z.function({
    input: [z.string()],
    output: z.void(),
  }),
  handleCopyLinkButton: z.function({
    input: [z.string()],
    output: z.void(),
  }),
  copyStatus: CopyStatusLinkProfileSchema,
});

export type NewProfileLayoutProps = z.infer<typeof NewProfileLayoutSchema>;
