import z from "zod";

export const NewCurrentStepSchema = z.object({
  currentStep: z.number(),
});

export type NewCurrentStepProps = z.infer<typeof NewCurrentStepSchema>;
