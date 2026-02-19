import z from "zod";

export const CopyReferalLinkSchema = z.object({
  message: z.string(),
  type: z.enum(["success", "error"]).nullable(),
});
