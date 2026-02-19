import clsx from "clsx";
import styles from "./NewStatisticsTeam.module.scss";
import type { NewStatisticsTeamProps } from "./types";
import { NewStatisticsTeamItem } from "../NewStatisticsTeamItem";

export function NewStatisticsTeam({
  activeTeam,
  teamQuery,
  isButtonActiveTeam,
  currentActiveStatus,
  setCurrentActiveStatus,
  isStartTour,
  setIsStartTour,
  stepIndex,
}: NewStatisticsTeamProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["statisticsTeam--1"]
      : activeTeam === "2"
        ? styles["statisticsTeam--2"]
        : styles["statisticsTeam--default"];

  const classNameLink =
    activeTeam === "1"
      ? styles["statisticsTeam__timeText--1"]
      : activeTeam === "2"
        ? styles["statisticsTeam__timeText--2"]
        : styles["statisticsTeam__timeText--default"];

  return (
    <div className={clsx(styles.statisticsTeam, activeClassName)}>
      <div className={styles.statisticsTeam__top}>
        <div className={styles.statisticsTeam__title}>
          <span className={styles.statisticsTeam__titleTranslator}></span>
          <h3 className={styles.statisticsTeam__titleText}>Statistics</h3>
        </div>

        <span className={styles.statisticsTeam__time}>
          Current{" "}
          <span
            className={clsx(styles.statisticsTeam__timeText, classNameLink)}
          >
            All time
          </span>
        </span>
      </div>
      <NewStatisticsTeamItem
        teamQuery={teamQuery}
        isButtonActiveTeam={isButtonActiveTeam}
        currentActiveStatus={currentActiveStatus}
        setCurrentActiveStatus={setCurrentActiveStatus}
        isStartTour={isStartTour}
        setIsStartTour={setIsStartTour}
        stepIndex={stepIndex}
      />
    </div>
  );
}
