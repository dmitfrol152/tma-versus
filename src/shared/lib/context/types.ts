import z from "zod";

export const ThemeSchema = z.enum(["blue", "green", "pink"]);

export type Theme = z.infer<typeof ThemeSchema>;
