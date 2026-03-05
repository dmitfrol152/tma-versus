import { CopyStatusLinkProfileSchema } from "@/pages/NewProfilePage/ui/NewProfileLayout/types";
import z from "zod";

export const NewModalStatusCommunitySchema = z.object({
  copyStatus: CopyStatusLinkProfileSchema,
});

export type NewModalStatusCommunityProps = z.infer<
  typeof NewModalStatusCommunitySchema
>;
