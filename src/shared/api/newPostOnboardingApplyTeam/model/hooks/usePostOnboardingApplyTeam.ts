import { useMutation } from "@tanstack/react-query";
import { newPostOnboardingApplyTeam } from "../../newPostOnboardingApplyTeam";

export function usePostOnboardingApplyTeam() {
  const mutationPostOnboardingApplyTeam = useMutation({
    mutationFn: ({ team_id }: { team_id: number }) =>
      newPostOnboardingApplyTeam({ team_id }),
    mutationKey: ["OnboardingApplyTeam"],
  });

  return mutationPostOnboardingApplyTeam;
}
