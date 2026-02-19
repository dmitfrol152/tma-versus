import type { Dispatch, RefObject, SetStateAction } from "react";
import z from "zod";

export const NewInputSchema = z.object({
  label: z.string().optional(),
  placeholder: z.string().optional(),
  type: z.string(),
  value: z.string(),
  setValue: z.custom<Dispatch<SetStateAction<string>>>(),
  isDisabled: z.boolean().optional(),
  refField: z.custom<RefObject<HTMLInputElement | null>>().optional(),
  beforeActive: z.boolean().optional(),
});

export type NewInputProps = z.infer<typeof NewInputSchema>;
