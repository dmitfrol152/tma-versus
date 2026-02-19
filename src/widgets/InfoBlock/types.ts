import z from "zod";

export const InfoBlockSchema = z.object({
  title: z.string(),
  amountCoint: z.number(),
  buttonName: z.string(),
});

export type InfoBlockProps = z.infer<typeof InfoBlockSchema>;
