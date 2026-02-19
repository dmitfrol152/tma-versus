// import { DefaultApiSchema } from "@/shared/api/fetchDefault/types";
// import { ClansSchema } from "@/shared/api/fetchClans/types";
// import z from "zod";

// export const SafeBlockDataSchema = z.object({
//   dataDefault: DefaultApiSchema,
//   activeTeam: ActiveClanTypeSchema,
//   dataClans: ClansSchema.optional(),
// });

// export type SafeBlockDataProps = z.infer<typeof SafeBlockDataSchema>;

// export const MaxValueDataSchema = z.object({
//   dataDefault: DefaultApiSchema,
// });

// export type MaxValueDataProps = z.infer<typeof MaxValueDataSchema>;

// export const ClanSafeDataSchema = z.object({
//   maxValue: z.number(),
//   activeTeam: ActiveClanTypeSchema,
//   dataClans: ClansSchema.optional(),
// });

// export type ClanSafeDataProps = z.infer<typeof ClanSafeDataSchema>;

// export const ClanSafeSchema = z.object({
//   value: z.number(),
//   max: z.number(),
// });
