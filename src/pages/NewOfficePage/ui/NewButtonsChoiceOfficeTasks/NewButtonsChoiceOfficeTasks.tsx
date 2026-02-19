import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./NewButtonsChoiceOfficeTasks.module.scss";
import type { NewButtonsChoiceOfficeTasksProps } from "./types";
import { NewButtonsContainerUi } from "@/shared/ui/NewButtonsContainerUi";

export function NewButtonsChoiceOfficeTasks({
  setIsButtonActiveOfficeTasks,
  activeTeam,
  activeButton,
}: NewButtonsChoiceOfficeTasksProps) {
  const isOfficeActive = activeButton === "office";
  const isTasksActive = activeButton === "tasks";

  return (
    <div className={styles.buttonsChoiceOfficeTasks}>
      <NewButtonsContainerUi className="fourEight">
        <NewButtonUi
          className={styles.newPadding}
          type="button"
          size="main"
          variant="main"
          onClickButton={() => setIsButtonActiveOfficeTasks("office")}
          isActive={isOfficeActive}
          teamColor={activeTeam === null ? "default" : activeTeam}
        >
          My office
        </NewButtonUi>
        <NewButtonUi
          className={styles.newPadding}
          type="button"
          size="main"
          variant="main"
          onClickButton={() => setIsButtonActiveOfficeTasks("tasks")}
          isActive={isTasksActive}
          teamColor={activeTeam === null ? "default" : activeTeam}
        >
          Tasks
        </NewButtonUi>
      </NewButtonsContainerUi>
    </div>
  );
}
