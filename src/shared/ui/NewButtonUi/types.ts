import type { ReactNode } from "react";
import z from "zod";

export const NewButtonUiSchema = z.object({
  className: z.string().optional(),
  type: z.enum(["submit", "button"]),
  children: z.custom<ReactNode>().optional(),
  onClickButton: z.function().optional(),
  size: z.string(),
  variant: z.string(),
  disabled: z.boolean().optional(),
  color: z.string().optional(),
  isActive: z.boolean().optional(),
  teamColor: z.enum(["1", "2", "default"]).optional(),
});

export type NewButtonUiProps = z.infer<typeof NewButtonUiSchema>;
