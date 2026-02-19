import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import type { NewButtonsChoiceTasksProps } from "./types";
import { NewButtonsContainerUi } from "@/shared/ui/NewButtonsContainerUi";

export function NewButtonsChoiceTasks({
  setIsButtonActiveTasks,
  activeTeam,
  activeButton,
}: NewButtonsChoiceTasksProps) {
  const isDailyActive = activeButton === "daily";
  const isWeeklyActive = activeButton === "weekly";
  const isSeasonActive = activeButton === "season";
  const isSocialActive = activeButton === "social";

  return (
    <NewButtonsContainerUi className="fourEight">
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveTasks("daily")}
        isActive={isDailyActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Daily
      </NewButtonUi>
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveTasks("weekly")}
        isActive={isWeeklyActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Weekly
      </NewButtonUi>
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveTasks("season")}
        isActive={isSeasonActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Season
      </NewButtonUi>
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveTasks("social")}
        isActive={isSocialActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Social
      </NewButtonUi>
    </NewButtonsContainerUi>
  );
}
