import { NewButtonsChoiceTasks } from "../NewButtonsChoiceTasks";
import type { TasksLayoutProps } from "./types";
import styles from "./TasksLayout.module.scss";
import { InfoBlockLong } from "@/widgets/InfoBlockLong";
import { InfoBlock } from "@/widgets/InfoBlock";
import clsx from "clsx";

export function TasksLayout({
  isButtonActiveTasks,
  setIsButtonActiveTasks,
  activeTeam,
  isStartTour,
  stepIndex,
}: TasksLayoutProps) {
  const isButtonsStep = isStartTour && stepIndex === 0;
  const isStatsStep = isStartTour && stepIndex === 1;

  return (
    <div className={styles.tasksLayout}>
      <div
        data-tour="officePageTasks"
        className={isButtonsStep ? styles.tasksLayout__tourOnboarding : ""}
      >
        <div className={styles.tasksLayout__title}>
          <h4 className={styles.tasksLayout__titleText}>
            Get coins by completing tasks
          </h4>
          <span className={styles.tasksLayout__titleTime}>
            Update at 00:00 (UTC +0)
          </span>
        </div>
        <div className={styles.tasksLayout__btns}>
          <NewButtonsChoiceTasks
            setIsButtonActiveTasks={setIsButtonActiveTasks}
            activeTeam={activeTeam}
            activeButton={isButtonActiveTasks}
          />
        </div>
      </div>
      {isButtonActiveTasks !== "daily" && (
        <div className={styles.tasksLayout__empty}>
          <span className={styles.tasksLayout__emptyText}>Empty</span>
        </div>
      )}
      {isButtonActiveTasks === "daily" && (
        <div className={styles.tasksLayout__info}>
          <div
            className={clsx(
              styles.tasksLayout__tour,
              isStatsStep && styles.tasksLayout__tourOnboarding,
            )}
            data-tour="officePageCollect"
          >
            <InfoBlock
              title="Collect accruals 1 time"
              amountCoint={500}
              buttonName="Check"
            />
            <InfoBlockLong
              title="Fill all the tables"
              amountCoint={800}
              currentValue={5}
              maxValue={8}
              addTextProgressBar="tables"
              buttonName="Check"
              activeTeam={activeTeam}
            />
          </div>
          <InfoBlock
            title="Invite a friend"
            amountCoint={1500}
            buttonName="Check"
          />
        </div>
      )}
    </div>
  );
}
