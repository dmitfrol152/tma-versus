import styles from "./InfoBlock.module.scss";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import IconCoin from "@shared/assets/images/svg/icon-coin.svg?react";
import type { InfoBlockProps } from "./types";

export function InfoBlock({ title, amountCoint, buttonName }: InfoBlockProps) {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.infoBlock__info}>
        <h3 className={styles.infoBlock__infoTitle}>{title}</h3>
        {amountCoint && (
          <div className={styles.infoBlock__top}>
            <IconCoin className={styles.infoBlock__topIcon} />
            <span className={styles.infoBlock__topText}>{amountCoint}</span>
          </div>
        )}
      </div>
      <div className={styles.infoBlock__btns}>
        <NewButtonUi
          type="button"
          size="main"
          variant="main"
          onClickButton={() => alert("Click on btn")}
        >
          {buttonName}
        </NewButtonUi>
      </div>
    </div>
  );
}
