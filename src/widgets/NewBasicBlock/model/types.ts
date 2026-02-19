import z from "zod";
import { NewOfficeSchema } from "@/shared/lib/types/NewOffice/model/types";

export const NewBasicBlockDataSchema = z.object({
  isButton: z.boolean(),
  activeTeamTariff: z.number().optional(),
  level: NewOfficeSchema.optional(),
  handleClickButton: z
    .function({
      input: [NewOfficeSchema.optional()],
      output: z.void(),
    })
    .optional(),
});

export type NewBasicBlockDataProps = z.infer<typeof NewBasicBlockDataSchema>;
