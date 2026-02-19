import styles from "./NewBasicBlock.module.scss";
import type { NewBasicBlockDataProps } from "./model/types";
import IconCoin from "@shared/assets/images/svg/icon-coin.svg?react";
import ImageBackground from "@shared/assets/images/png/png-background-green.png";
import clsx from "clsx";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import IconCheck from "@shared/assets/images/svg/icon-check.svg?react";

export function NewBasicBlock({
  isButton = false,
  activeTeamTariff,
  level,
  handleClickButton,
}: NewBasicBlockDataProps) {
  if (!level) return;

  const classNameLight =
    level.lvl === 2
      ? styles["basicBlock__light--standart"]
      : level.lvl === 3
        ? styles["basicBlock__light--premium"]
        : styles["basicBlock__light--basic"];

  const classNameLightButton =
    level.lvl === 2
      ? styles["basicBlock__lightButton--standart"]
      : level.lvl === 3
        ? styles["basicBlock__lightButton--premium"]
        : styles["basicBlock__lightButton--basic"];

  const isActiveTariff = String(activeTeamTariff) === String(level.lvl);

  return (
    <div className={clsx(styles.basicBlock, isButton && styles.isButton)}>
      <div className={styles.basicBlock__wrapper}>
        <h3 className={styles.basicBlock__title}>
          {level.lvl === 2 ? "Standart" : level.lvl === 3 ? "Premium" : "Basic"}
        </h3>
        <div className={styles.basicBlock__inner}>
          <IconCoin className={styles.basicBlock__icon} />
          <span className={styles.basicBlock__coins}>
            {level.safe_capacity.toLocaleString("en-US")}
          </span>
          <span className={styles.basicBlock__text}>//safe</span>
        </div>
      </div>
      <div className={styles.basicBlock__info}>
        <span className={styles.basicBlock__infoText}>
          Seats: {level.count_of_traders}
        </span>
        <span className={styles.basicBlock__infoText}>
          Boost: +{level.comfort}%
        </span>
      </div>
      <div className={styles.basicBlock__image}>
        <img src={ImageBackground} alt="Background" />
      </div>
      {isButton && handleClickButton && (
        <div className={styles.basicBlock__block}>
          <NewButtonUi
            disabled={isActiveTariff}
            type="button"
            size="connectWallet"
            variant="connectWallet"
            className={styles.basicBlock__button}
            onClickButton={() => handleClickButton(level)}
          >
            {isActiveTariff && (
              <span className={styles.basicBlock__check}>
                <IconCheck className={styles.basicBlock__checkIcon} />
                <span className={styles.basicBlock__checkText}>
                  You already use it
                </span>
              </span>
            )}
            {!isActiveTariff && (
              <span>{level.price.toLocaleString("en-US")} Coins</span>
            )}
          </NewButtonUi>
        </div>
      )}
      {!isButton && (
        <div className={clsx(styles.basicBlock__light, classNameLight)}></div>
      )}
      {isButton && (
        <div
          className={clsx(styles.basicBlock__lightButton, classNameLightButton)}
        ></div>
      )}
    </div>
  );
}
