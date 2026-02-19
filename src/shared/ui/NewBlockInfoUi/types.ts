import z from "zod";

export const NewBlockInfoUiSchema = z.object({
  icon: z.boolean(),
  data: z.number(),
  text: z.string(),
  sign: z.boolean(),
  isActiveData: z.boolean(),
});

export type NewBlockInfoUiProps = z.infer<typeof NewBlockInfoUiSchema>;
