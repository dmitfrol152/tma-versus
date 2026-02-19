import clsx from "clsx";
import styles from "./NewLeaderboardTeam.module.scss";
import type { NewLeaderboardTeamProps } from "./types";
import { NewButtonsChoiceLeaderboard } from "../NewButtonsChoiceLeaderboard";
import { NewMyPositionLeaderboard } from "./NewMyPositionLeaderboard";
import { NewTopLeaderboard } from "./NewTopLeaderboard";
import { NewSwapTeam } from "./NewSwapTeam";

export function NewLeaderboardTeam({
  activeTeam,
  isButtonActiveLeadboard,
  setIsButtonActiveLeadboard,
  teamQuery,
  isButtonActiveTeam,
}: NewLeaderboardTeamProps) {
  if (!teamQuery) return;

  const activeClassName =
    activeTeam === "1"
      ? styles["leaderboardTeam--1"]
      : activeTeam === "2"
        ? styles["leaderboardTeam--2"]
        : styles["leaderboardTeam--default"];

  const showList = isButtonActiveLeadboard !== "all time";

  const myPosition = teamQuery.my_position;
  const leaderboardPositions =
    isButtonActiveTeam === "1"
      ? teamQuery.leaderboard_first_team
      : teamQuery.leaderboard_second_team;

  return (
    <div className={clsx(styles.leaderboardTeam, activeClassName)}>
      <div className={styles.leaderboardTeam__title}>
        <span className={styles.leaderboardTeam__titleTranslator}></span>
        <h3 className={styles.leaderboardTeam__titleText}>Leaderboard</h3>
      </div>
      <NewButtonsChoiceLeaderboard
        setIsButtonActiveLeadboard={setIsButtonActiveLeadboard}
        activeTeam={activeTeam}
        activeButton={isButtonActiveLeadboard}
      />
      {isButtonActiveLeadboard === "all time" && (
        <>
          <NewMyPositionLeaderboard myPosition={myPosition} />
          <NewTopLeaderboard leaderboard={leaderboardPositions} />
          <NewSwapTeam activeTeam={activeTeam} />
        </>
      )}
      {showList && (
        <div className={styles.leaderboardTeam__empty}>
          <span className={styles.leaderboardTeam__emptyText}>Empty</span>
        </div>
      )}
    </div>
  );
}
