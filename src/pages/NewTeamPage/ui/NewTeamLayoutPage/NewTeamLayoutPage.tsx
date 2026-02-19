import clsx from "clsx";
import styles from "./NewTeamLayoutPage.module.scss";
import type { NewTeamLayoutPageProps } from "./types";
import IconQuestionTeam from "@shared/assets/images/svg/icon-question-office.svg?react";
import { NewButtonsChoiceTeam } from "../NewButtonsChoiceTeam";
import { NewStatisticsTeam } from "../NewStatisticsTeam";
import { NewChartTeam } from "../../../../widgets/NewChartTeam";
import { NewLeaderboardTeam } from "../NewLeaderboardTeam";

export function NewTeamLayoutPage({
  activeTeam,
  isButtonActiveTeam,
  setIsButtonActiveTeam,
  isButtonActiveLeadboard,
  setIsButtonActiveLeadboard,
  teamQuery,
  currentActiveStatus,
  setCurrentActiveStatus,
  isStartTour,
  setIsStartTour,
  stepIndex,
}: NewTeamLayoutPageProps) {
  if (!teamQuery) return null;

  const classNameIcon =
    activeTeam === "1"
      ? styles["teamLayoutPage__titleIcon--1"]
      : activeTeam === "2"
        ? styles["teamLayoutPage__titleIcon--2"]
        : styles["teamLayoutPage__titleIcon--default"];

  return (
    <div className={styles.teamLayoutPage}>
      {isStartTour && <div className={styles.teamLayoutPage__tourOverlay} />}

      <div className={styles.teamLayoutPage__title}>
        <h2 className={styles.teamLayoutPage__titleText}>Team stats</h2>
        <IconQuestionTeam
          className={clsx(styles.teamLayoutPage__titleIcon, classNameIcon)}
        />
      </div>
      <div
        data-tour="teamPageStatistics"
        className={styles.teamLayoutPage__tourOnboarding}
      >
        <NewButtonsChoiceTeam
          isButtonActiveTeam={isButtonActiveTeam}
          setIsButtonActiveTeam={setIsButtonActiveTeam}
          activeTeam={activeTeam}
          teamQuery={teamQuery}
          isStartTour={isStartTour}
          setIsStartTour={setIsStartTour}
          stepIndex={stepIndex}
        />
        <NewStatisticsTeam
          activeTeam={activeTeam}
          teamQuery={teamQuery}
          isButtonActiveTeam={isButtonActiveTeam}
          currentActiveStatus={currentActiveStatus}
          setCurrentActiveStatus={setCurrentActiveStatus}
          isStartTour={isStartTour}
          setIsStartTour={setIsStartTour}
          stepIndex={stepIndex}
        />
      </div>
      <NewChartTeam
        isButtonActiveTeam={isButtonActiveTeam}
        teamQuery={teamQuery}
        currentActiveStatus={currentActiveStatus}
        activeTeam={activeTeam}
      />
      <NewLeaderboardTeam
        activeTeam={activeTeam}
        isButtonActiveLeadboard={isButtonActiveLeadboard}
        setIsButtonActiveLeadboard={setIsButtonActiveLeadboard}
        teamQuery={teamQuery}
        isButtonActiveTeam={isButtonActiveTeam}
      />
    </div>
  );
}
