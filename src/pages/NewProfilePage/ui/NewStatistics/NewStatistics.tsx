import clsx from "clsx";
import styles from "./NewStatistics.module.scss";
import { NewStatisticsWidget } from "@/widgets/NewStatisticsWidget";
import type { NewInfoPersonProps } from "@/shared/lib/store/types";

export function NewStatistics({
  activeTeam,
  user,
}: {
  activeTeam: string | null;
  user: NewInfoPersonProps;
}) {
  const activeClassName =
    activeTeam === "1"
      ? styles["statistics--1"]
      : activeTeam === "2"
        ? styles["statistics--2"]
        : styles["statistics--default"];

  return (
    <div className={clsx(styles.statistics, activeClassName)}>
      <div className={styles.statistics__title}>
        <span className={styles.statistics__titleTranslator}></span>
        <h3 className={styles.statistics__titleText}>Statistics</h3>
      </div>
      <NewStatisticsWidget user={user} />
    </div>
  );
}
