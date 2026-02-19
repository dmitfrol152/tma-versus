import z from "zod";

export const ActiveClanSchema = z.object({
  activeClan: z.enum(["1", "2"]).nullable(),
});

export type ActiveClanProps = z.infer<typeof ActiveClanSchema>;

export const ActiveClanTypeSchema = z.enum(["1", "2"]).nullable();

export type ActiveClanTypeProps = z.infer<typeof ActiveClanTypeSchema>;
