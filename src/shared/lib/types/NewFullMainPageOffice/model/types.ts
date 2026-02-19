import z from "zod";
import { NewOfficeSchema } from "../../NewOffice/model/types";
import { NewUserTradersSchema } from "../../NewUserTraders/model/types";

export const NewFullMainPageOffice = z.object({
  id: z.int(),
  ofice: NewOfficeSchema,
  traders: z.array(NewUserTradersSchema),
});

export type NewFullMainPageOfficeProps = z.infer<typeof NewFullMainPageOffice>;
