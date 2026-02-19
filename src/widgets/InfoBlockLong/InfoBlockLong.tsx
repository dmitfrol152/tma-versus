import styles from "./InfoBlockLong.module.scss";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import IconCoin from "@shared/assets/images/svg/icon-coin.svg?react";
import { NewInfoBlockProgressBarUi } from "@/entities/NewInfoBlocks/ui/NewInfoBlockProgressBarUi/NewInfoBlockProgressBarUi";
import type { InfoBlockLongProps } from "./types";

export function InfoBlockLong({
  title,
  amountCoint,
  currentValue,
  maxValue,
  activeTeam,
  buttonName,
  addTextProgressBar,
}: InfoBlockLongProps) {
  return (
    <div className={styles.infoBlockLong}>
      <div className={styles.infoBlockLong__info}>
        <div className={styles.infoBlockLong__long}>
          <div className={styles.infoBlockLong__longInfo}>
            <h3 className={styles.infoBlockLong__longInfoTitle}>{title}</h3>
            {amountCoint && (
              <div className={styles.infoBlockLong__longInfoTop}>
                <IconCoin className={styles.infoBlockLong__longInfoTopIcon} />
                <span className={styles.infoBlockLong__longInfoTopText}>
                  {amountCoint}
                </span>
              </div>
            )}
          </div>
          {buttonName && (
            <div className={styles.infoBlockLong__longInfoBlock}>
              <NewButtonUi
                className={styles.infoBlockLong__longInfoBtn}
                type="button"
                size="main"
                variant="main"
                disabled={currentValue !== undefined && currentValue <= 0}
                onClickButton={() => alert("Click on btn")}
              >
                {buttonName}
              </NewButtonUi>
            </div>
          )}
        </div>
        <div className={styles.infoBlockLong__btns}>
          {currentValue !== undefined && maxValue !== undefined && (
            <NewInfoBlockProgressBarUi
              activeTeam={activeTeam}
              startValue={currentValue}
              endValue={maxValue}
              textProgressBar={addTextProgressBar}
            />
          )}
        </div>
      </div>
    </div>
  );
}
