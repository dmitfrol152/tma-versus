import clsx from "clsx";
import styles from "./NewSwapTeam.module.scss";
import type { NewSwapTeamProps } from "./types";
import { TEAM_STATISTICS } from "@/shared/lib/constants/TEAM_STATISTICS";
import { NewStatisticsCardUi } from "@/shared/ui/NewStatisticsCardUi";

export function NewSwapTeam({ activeTeam }: NewSwapTeamProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["swapTeam--1"]
      : activeTeam === "2"
        ? styles["swapTeam--2"]
        : styles["swapTeam--default"];

  return (
    <div className={clsx(styles.swapTeam, activeClassName)}>
      <div className={styles.swapTeam__title}>
        <span className={styles.swapTeam__titleTranslator}></span>
        <h3 className={styles.swapTeam__titleText}>Swap team</h3>
      </div>
      <ul className={styles.swapTeam__list}>
        {TEAM_STATISTICS.map((item, index) => {
          const isLast = index === TEAM_STATISTICS.length - 1;

          return (
            <li key={index}>
              <NewStatisticsCardUi item={item} isLast={isLast} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
