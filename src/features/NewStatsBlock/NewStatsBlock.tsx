import type { NewStatsDataProps } from "./model/types";
import styles from "./NewStatsBlock.module.scss";

export function NewStatsBlock({
  officeQuery,
  user,
  activeTeam,
  userBalanse,
}: NewStatsDataProps) {
  const hasOffice =
    !!officeQuery && typeof officeQuery.productivity_per_day === "number";
  const hasUser =
    !!user && typeof user.total_rewards === "number";

  const productivityText =
    activeTeam === null || !hasOffice
      ? "0"
      : `+${officeQuery.productivity_per_day.toLocaleString("ru-RU", {
          notation: "compact",
          maximumFractionDigits: 1,
        })}`;

  const totalRewardsText =
    activeTeam === null || !hasUser
      ? "0"
      : `${user.total_rewards.toLocaleString("ru-RU", {
          notation: "compact",
          maximumFractionDigits: 1,
        })}`;

  const shareText =
    activeTeam === null || !userBalanse
      ? "0"
      : `${userBalanse.your_share_in_team ?? 0}%`;

  return (
    <ul className={styles.statsBlock}>
      <li className={styles.statsBlock__item}>
        <span className={styles.statsBlock__itemData}>{productivityText}</span>
        <span className={styles.statsBlock__itemText}>
          Productivity per day
        </span>
      </li>
      <li className={styles.statsBlock__item}>
        <span className={styles.statsBlock__itemData}>{totalRewardsText}</span>
        <span className={styles.statsBlock__itemText}>Total coins farmed</span>
      </li>
      <li className={styles.statsBlock__item}>
        <span className={styles.statsBlock__itemData}>{shareText}</span>
        <span className={styles.statsBlock__itemText}>Your share in team</span>
      </li>
    </ul>
  );
}
