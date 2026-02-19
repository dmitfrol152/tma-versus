import { useMutation } from "@tanstack/react-query";
import { newPostChangeTeam } from "../../newPostChangeTeam";

export function usePostChangeTeam() {
  const mutationPostChangeTeam = useMutation({
    mutationFn: ({
      team_id,
      currency,
    }: {
      team_id: number;
      currency: string;
    }) => newPostChangeTeam({ team_id, currency }),
    mutationKey: ["ChangeTeam"],
  });

  return mutationPostChangeTeam;
}
