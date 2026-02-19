import { NewOfficeSchema } from "@/shared/lib/types/NewOffice/model/types";
import z from "zod";

export const NewOfficesLayoutSchema = z.object({
  currentLevel: z.number(),
  queryOffices: z.array(NewOfficeSchema),
  handleClickBuyOffice: z.function({
    input: [NewOfficeSchema.optional()],
    output: z.void(),
  }),
  isOfficesStep: z.boolean(),
});

export type NewOfficesLayoutProps = z.infer<typeof NewOfficesLayoutSchema>;
