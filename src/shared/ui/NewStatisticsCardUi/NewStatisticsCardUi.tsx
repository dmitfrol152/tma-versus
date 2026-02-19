import clsx from "clsx";
import styles from "./NewStatisticsCardUi.module.scss";
import type { NewStatisticsCardUiProps } from "./types";
import IconStar from "@shared/assets/images/svg/icon-star.svg?react";

export function NewStatisticsCardUi({
  item,
  isLast = false,
}: NewStatisticsCardUiProps) {
  return (
    <div
      className={clsx(
        styles.statisticsCardUi__Inner,
        isLast && styles.statisticsCardUi__InnerLast,
      )}
    >
      <span className={styles.statisticsCardUi__InnerText}>{item.title}</span>
      <div className={styles.statisticsCardUi__InnerBlock}>
        {item.icon && (
          <IconStar className={styles.statisticsCardUi__InnerIcon} />
        )}
        <span className={styles.statisticsCardUi__InnerAmount}>
          {item.count.toLocaleString("en-US", {
            notation: "compact",
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
}
