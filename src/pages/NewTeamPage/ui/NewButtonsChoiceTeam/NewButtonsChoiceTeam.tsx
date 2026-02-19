import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./NewButtonsChoiceTeam.module.scss";
import type { NewButtonsChoiceTeamProps } from "./types";
import { NewButtonsContainerUi } from "@/shared/ui/NewButtonsContainerUi";
import { useNavigate } from "react-router";

export function NewButtonsChoiceTeam({
  isButtonActiveTeam,
  setIsButtonActiveTeam,
  activeTeam,
  teamQuery,
  isStartTour,
  setIsStartTour,
  stepIndex,
}: NewButtonsChoiceTeamProps) {
  const navigate = useNavigate();

  const isOneTeamActive = isButtonActiveTeam === "1";
  const isTwoTeamActive = isButtonActiveTeam === "2";

  return (
    <div className={styles.buttonsChoiceTeam} data-tour="stats">
      <NewButtonsContainerUi className="fourEight">
        <NewButtonUi
          className={styles.newPadding}
          type="button"
          size="main"
          variant="main"
          onClickButton={() => {
            if (isStartTour && stepIndex === 0) {
              setIsStartTour(false);
              navigate("/team");
            }
            setIsButtonActiveTeam("1");
          }}
          isActive={isOneTeamActive}
          teamColor={activeTeam === null ? "default" : activeTeam}
        >
          {teamQuery.stats_first_team.name}
        </NewButtonUi>
        <NewButtonUi
          className={styles.newPadding}
          type="button"
          size="main"
          variant="main"
          onClickButton={() => {
            if (isStartTour && stepIndex === 0) {
              setIsStartTour(false);
              navigate("/team");
            }
            setIsButtonActiveTeam("2");
          }}
          isActive={isTwoTeamActive}
          teamColor={activeTeam === null ? "default" : activeTeam}
        >
          {teamQuery.stats_second_team.name}
        </NewButtonUi>
      </NewButtonsContainerUi>
    </div>
  );
}
