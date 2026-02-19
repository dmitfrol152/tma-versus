import styles from "./NewHystoryBlockItem.module.scss";
import type { NewHystoryBlockItemProps } from "../model/types";

export function NewHystoryBlockItem({ data }: NewHystoryBlockItemProps) {
  const time = new Date(data.datatime);

  return (
    <div className={styles.hystoryBlockItem}>
      <div className={styles.hystoryBlockItem__Inner}>
        <span className={styles.hystoryBlockItem__InnerText}>Claim</span>
        <span className={styles.hystoryBlockItem__InnerText}>
          +{data.money.toLocaleString("en-US")} XP
        </span>
      </div>
      <span className={styles.hystoryBlockItem__InnerDate}>
        {time.toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
}
