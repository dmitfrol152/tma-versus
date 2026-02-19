import type { ReactNode } from "react";
import z from "zod";

export const NewButtonsContainerUiSchema = z.object({
  className: z.string().optional(),
  children: z.custom<ReactNode>(),
});

export type NewButtonsContainerUiProps = z.infer<
  typeof NewButtonsContainerUiSchema
>;
