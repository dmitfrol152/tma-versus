import { ActiveClanTypeSchema } from "@/shared/lib/types/activeClan";
import type { Dispatch, RefObject, SetStateAction } from "react";
import z from "zod";

export const NewNickNameSchema = z.object({
  value: z.string(),
  setValue: z.custom<Dispatch<SetStateAction<string>>>(),
  activeTeam: ActiveClanTypeSchema,
  handleChangeButton: z.function({
    input: [],
    output: z.void(),
  }),
  isEditing: z.boolean().optional(),
  profileName: z.string(),
  refField: z.custom<RefObject<HTMLInputElement | null>>(),
});

export type NewNickNameProps = z.infer<typeof NewNickNameSchema>;
