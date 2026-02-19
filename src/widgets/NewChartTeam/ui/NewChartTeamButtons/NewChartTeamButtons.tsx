import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import type { NewChartTeamButtonsProps } from "./types";
import { setActiveTeam } from "@/shared/lib/store/newTeamSlice";
import { useDispatch } from "react-redux";
import { usePostOnboardingApplyTeam } from "@/shared/api/newPostOnboardingApplyTeam/model/hooks/usePostOnboardingApplyTeam";
import { usePostChangeTeam } from "@/shared/api/newPostChangeTeam/model/hooks/usePostChangeTeam";
import { NewButtonsContainerUi } from "@/shared/ui/NewButtonsContainerUi";

export function NewChartTeamButtons({
  activeTeam,
  isButtonActiveTeam,
  teamQuery,
}: NewChartTeamButtonsProps) {
  const dispatch = useDispatch();

  const mutationOnboardingApplyTeam = usePostOnboardingApplyTeam();
  const mutationPostChangeTeam = usePostChangeTeam();

  if (!teamQuery) return null;

  const handleButtonClick = () => {
    if (activeTeam === null) {
      const targetTeamId = isButtonActiveTeam === "1" ? 1 : 2;

      mutationOnboardingApplyTeam.mutate(
        { team_id: targetTeamId },
        {
          onSuccess: () =>
            dispatch(setActiveTeam(String(targetTeamId) as "1" | "2")),
        },
      );
      return;
    }

    const nextTeamId = activeTeam === "1" ? 2 : 1;

    if (activeTeam !== null) {
      mutationPostChangeTeam.mutate(
        { team_id: nextTeamId, currency: "game_coin" },
        {
          onSuccess: (data) => {
            dispatch(setActiveTeam(String(nextTeamId) as "1" | "2"));
            console.log("Success:", data);
          },
          onError: (error) => {
            console.error(error);
          },
        },
      );
    } else {
      // TODO за донат
    }
  };

  return (
    <NewButtonsContainerUi className="ten">
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => handleButtonClick()}
      >
        {activeTeam === null &&
          `Join to ${isButtonActiveTeam === "1" ? `${teamQuery.stats_first_team.name}` : `${teamQuery.stats_second_team.name}`}`}
        {activeTeam !== null &&
          `Swap to ${activeTeam === "1" ? `${teamQuery.stats_second_team.name}` : `${teamQuery.stats_first_team.name}`}`}
      </NewButtonUi>
    </NewButtonsContainerUi>
  );
}
