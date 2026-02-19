import z from "zod";

export const NewSlideDescriptionSchema = z.object({
  description: z.string(),
});

export type NewSlideDescriptionProps = z.infer<
  typeof NewSlideDescriptionSchema
>;
