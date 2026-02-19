import type { LimitedProps } from "./model/types";
import styles from "./Limited.module.scss";
import clsx from "clsx";

export function Limited({ activeTeam }: LimitedProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["limited--bulls"]
      : activeTeam === "2"
        ? styles["limited--bears"]
        : styles["limited--default"];

  return (
    <div className={clsx(styles.limited, activeClassName)}>
      <div className={styles.limited__title}>
        <span className={styles.limited__titleTranslator}></span>
        <h3 className={styles.limited__titleText}>Limited to 50%</h3>
      </div>
    </div>
  );
}
