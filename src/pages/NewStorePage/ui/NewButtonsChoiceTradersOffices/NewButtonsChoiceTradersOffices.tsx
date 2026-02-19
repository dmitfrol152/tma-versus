import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./NewButtonsChoiceTradersOffices.module.scss";
import type { NewButtonsChoiceTradersOfficesProps } from "./types";
import { NewButtonsContainerUi } from "@/shared/ui/NewButtonsContainerUi";
import clsx from "clsx";

export function NewButtonsChoiceTradersOffices({
  setIsButtonActiveTradersOffices,
  activeTeam,
  activeButton,
  setStepIndex,
  isStartTour,
  stepIndex,
}: NewButtonsChoiceTradersOfficesProps) {
  const isTradersActive = activeButton === "traders";
  const isOfficesActive = activeButton === "offices";

  return (
    <div
      className={clsx(
        styles.buttonsChoiceTradersOffices,
        isStartTour && styles["buttonsChoiceTradersOffices--tour"],
      )}
    >
      <NewButtonsContainerUi className="fourEight">
        <NewButtonUi
          className={styles.newPadding}
          type="button"
          size="main"
          variant="main"
          onClickButton={() => setIsButtonActiveTradersOffices("traders")}
          isActive={isTradersActive}
          teamColor={activeTeam === null ? "default" : activeTeam}
        >
          Traders
        </NewButtonUi>
        <div
          onClick={() => {
            setIsButtonActiveTradersOffices("offices");

            if (isStartTour && stepIndex === 0) {
              setStepIndex(1);
            }
          }}
        >
          <NewButtonUi
            className={styles.newPadding}
            type="button"
            size="main"
            variant="main"
            onClickButton={() => setIsButtonActiveTradersOffices("offices")}
            isActive={isOfficesActive}
            teamColor={activeTeam === null ? "default" : activeTeam}
          >
            Offices
          </NewButtonUi>
        </div>
      </NewButtonsContainerUi>
    </div>
  );
}
