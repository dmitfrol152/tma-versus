import { BASE_URL } from "@/shared/lib/constants/BASE_URL";

export function newPostOnboardingApplyTeam({ team_id }: { team_id: number }) {
  return fetch(`${BASE_URL}/onboarding_apply_team/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ team_id }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Error: response is failed");
      return response.json();
    })
    .then((data) => {
      if (!data) throw new Error("Error: data is failed");
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
