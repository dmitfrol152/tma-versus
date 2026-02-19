import clsx from "clsx";
import styles from "./NewRewards.module.scss";
import { NewInfoStatisticsBlock } from "@/widgets/NewInfoStatisticsBlock";

export function NewRewards({
  activeTeam,
  balance,
  totalRewards,
}: {
  activeTeam: "1" | "2" | null;
  balance: number;
  totalRewards: number;
}) {
  const activeClassName =
    activeTeam === "1"
      ? styles["rewards--1"]
      : activeTeam === "2"
        ? styles["rewards--2"]
        : styles["rewards--default"];

  return (
    <div className={clsx(styles.rewards, activeClassName)}>
      <div className={styles.rewards__title}>
        <span className={styles.rewards__titleTranslator}></span>
        <h3 className={styles.rewards__titleText}>Rewards</h3>
      </div>
      <div className={styles.rewards__list}>
        <NewInfoStatisticsBlock title="Balance" amount={balance} />
        <NewInfoStatisticsBlock title="Total rewards" amount={totalRewards} />
      </div>
    </div>
  );
}
