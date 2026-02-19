import z from "zod";

export const NewStepSchema = z.object({
  onNextStep: z.function({
    input: [],
    output: z.void(),
  }),
  onPrevStep: z.function({
    input: [],
    output: z.void(),
  }),
  currentStep: z.number(),
  onSkipSteps: z.function({
    input: [],
    output: z.void(),
  }),
});

export type NewStepProps = z.infer<typeof NewStepSchema>;
