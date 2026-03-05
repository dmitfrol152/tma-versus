import z from "zod";

export const NewModalStatusOfficeSchema = z.object({
  payStatus: z.string(),
});

export type NewModalStatusOfficeProps = z.infer<
  typeof NewModalStatusOfficeSchema
>;
