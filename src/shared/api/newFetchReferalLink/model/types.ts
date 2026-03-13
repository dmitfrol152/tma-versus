import z from "zod";

export const newFetchReferalLinkSchema = z.object({
  invite_link: z.string(),
});

export type newFetchReferalLinkProps = z.infer<
  typeof newFetchReferalLinkSchema
>;
