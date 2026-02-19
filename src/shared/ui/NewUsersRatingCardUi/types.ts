import { NewPositionUnionSchema } from "@/shared/api/newFetchTeam/model/types";
import z from "zod";

export const NewUsersRatingCardUiSchema = z.object({
  position: NewPositionUnionSchema,
});

export type NewUsersRatingCardUiProps = z.infer<
  typeof NewUsersRatingCardUiSchema
>;
