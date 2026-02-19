import type { ReactNode } from "react";
import z from "zod";

export const ModalUiSchema = z.object({
  children: z.custom<ReactNode>(),
  isOpenModal: z.boolean(),
});

export type ModalUiProps = z.infer<typeof ModalUiSchema>;
