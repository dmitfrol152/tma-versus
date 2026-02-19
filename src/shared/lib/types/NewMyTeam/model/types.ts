import z from "zod";

export const NewMyTeamSchema = z.object({
  id: z.int(),
  name: z.string().nullable(),
});

export type NewMyTeamProps = z.infer<typeof NewMyTeamSchema>;
