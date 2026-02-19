import z from "zod";

export const NewSlideTitleSchema = z.object({
  title: z.string(),
  description: z.string(),
  target: z.string(),
  classNameWidthContainer: z.string(),
});

export type NewSlideTitleProps = z.infer<typeof NewSlideTitleSchema>;
