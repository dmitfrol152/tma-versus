import z from "zod";

export const CopyStatusLinkCommunitySchema = z.object({
  message: z.string(),
  type: z.enum(["success", "error", ""]),
});

export const NewModalStatusProfileSchema = z.object({
  copyStatus: CopyStatusLinkCommunitySchema,
});

export type NewModalStatusProfileProps = z.infer<
  typeof NewModalStatusProfileSchema
>;
