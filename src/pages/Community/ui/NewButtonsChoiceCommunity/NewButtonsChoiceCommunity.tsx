import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import type { NewButtonsChoiceCommunityProps } from "./types";
import { NewButtonsContainerUi } from "@/shared/ui/NewButtonsContainerUi";

export function NewButtonsChoiceCommunity({
  activeTeam,
  activeButton,
  setIsButtonActiveCommunity,
}: NewButtonsChoiceCommunityProps) {
  const isStatisticActive = activeButton === "statistic";
  const isStructureActive = activeButton === "structure";
  const isPoolActive = activeButton === "pool";

  return (
    <NewButtonsContainerUi className="fourEight">
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveCommunity("statistic")}
        isActive={isStatisticActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Statistic
      </NewButtonUi>
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveCommunity("structure")}
        isActive={isStructureActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Structure
      </NewButtonUi>
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveCommunity("pool")}
        isActive={isPoolActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Pool
      </NewButtonUi>
    </NewButtonsContainerUi>
  );
}
