import IconCoin from "@shared/assets/images/svg/icon-coin.svg?react";
import styles from "./NewBlockInfoUi.module.scss";
import type { NewBlockInfoUiProps } from "./types";
import clsx from "clsx";

export function NewBlockInfoUi({
  icon,
  data,
  text,
  sign,
  isActiveData,
}: NewBlockInfoUiProps) {
  const BlockInfoUiClassName = isActiveData
    ? styles["blockInfoUi--active"]
    : "";

  return (
    <div className={clsx(styles.blockInfoUi, BlockInfoUiClassName)}>
      <span className={styles.blockInfoUi__top}>
        {icon && <IconCoin className={styles.blockInfoUi__icon} />}
        <span className={styles.blockInfoUi__data}>
          {`${sign ? "+" : ""}${data.toLocaleString("en-US")}`}
        </span>
      </span>
      <span className={styles.blockInfoUi__text}>{text}</span>
    </div>
  );
}
