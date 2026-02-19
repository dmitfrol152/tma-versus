import type { NewInfoStatisticsBlockProps } from "./model/types";
import styles from "./NewInfoStatisticsBlock.module.scss";
import IconCoin from "@shared/assets/images/svg/icon-coin.svg?react";

export function NewInfoStatisticsBlock({
  title,
  amount,
}: NewInfoStatisticsBlockProps) {
  return (
    <div className={styles.infoStatisticsBlock}>
      <div className={styles.infoStatisticsBlock__block}>
        <IconCoin className={styles.infoStatisticsBlock__blockIcon} />
        {typeof amount === "string" && (
          <span className={styles.infoStatisticsBlock__blockText}>
            {amount}
          </span>
        )}
        {typeof amount === "number" && (
          <span className={styles.infoStatisticsBlock__blockText}>
            {amount.toLocaleString("en-EN")}
          </span>
        )}
      </div>
      <span className={styles.infoStatisticsBlock__description}>{title}</span>
    </div>
  );
}
