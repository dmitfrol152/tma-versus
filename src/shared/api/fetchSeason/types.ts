import z from "zod";

export const SeasonSchema = z.object({
  description: z.string(),
  prize: z.number(),
  seasonNumber: z.number(),
  timeLeft: z.string(),
});

export type SeasonProps = z.infer<typeof SeasonSchema>;
