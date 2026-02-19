import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import type { NewButtonsChoiceLeaderboardProps } from "./types";
import { NewButtonsContainerUi } from "@/shared/ui/NewButtonsContainerUi";

export function NewButtonsChoiceLeaderboard({
  setIsButtonActiveLeadboard,
  activeTeam,
  activeButton,
}: NewButtonsChoiceLeaderboardProps) {
  const isAllTimeActive = activeButton === "all time";
  const isCurrentActive = activeButton === "current";
  const isRewardActive = activeButton === "reward";

  return (
    <NewButtonsContainerUi className="fourEight">
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveLeadboard("all time")}
        isActive={isAllTimeActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        All time
      </NewButtonUi>
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveLeadboard("current")}
        isActive={isCurrentActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Current
      </NewButtonUi>
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveLeadboard("reward")}
        isActive={isRewardActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Reward
      </NewButtonUi>
    </NewButtonsContainerUi>
  );
}
