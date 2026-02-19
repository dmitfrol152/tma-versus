import z from "zod";

export const NewUserSchema = z.object({
  id: z.int(),
  tg_id: z.int(),
  tg_username: z.string().nullable(),
  tg_first_name: z.string().nullable(),
  tg_last_name: z.string().nullable(),
  photo_url: z.string().nullable(),
  first_visit: z.string(),
  last_visit: z.string(),
  count_of_visit: z.int(),
  visit_without_pass: z.int(),
  is_baned: z.boolean(),
  can_take_daly_tasks: z.boolean(),
  wallet_address: z.string().nullable(),
  referrer: z.int().nullable(),
});

export type NewUserProps = z.infer<typeof NewUserSchema>;
