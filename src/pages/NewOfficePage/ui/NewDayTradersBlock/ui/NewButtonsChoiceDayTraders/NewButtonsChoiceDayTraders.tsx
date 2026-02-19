import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import type { NewButtonsChoiceDayTradersProps } from "./types";
import { NewButtonsContainerUi } from "@/shared/ui/NewButtonsContainerUi";

export function NewButtonsChoiceDayTraders({
  setIsButtonActiveDayTraders,
  activeTeam,
  activeButton,
}: NewButtonsChoiceDayTradersProps) {
  const isAllActive = activeButton === "all";
  const isOccupiedActive = activeButton === "occupied";
  const isEmptyActive = activeButton === "empty";

  return (
    <NewButtonsContainerUi className="fourEight">
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveDayTraders("all")}
        isActive={isAllActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        All
      </NewButtonUi>
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveDayTraders("occupied")}
        isActive={isOccupiedActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Occupied
      </NewButtonUi>
      <NewButtonUi
        type="button"
        size="main"
        variant="main"
        onClickButton={() => setIsButtonActiveDayTraders("empty")}
        isActive={isEmptyActive}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Empty
      </NewButtonUi>
    </NewButtonsContainerUi>
  );
}
