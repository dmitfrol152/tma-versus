import type { NewTraderUiProps } from "./model/types";
import styles from "./NewTraderWidget.module.scss";
import IconCoin from "@shared/assets/images/svg/icon-coin.svg?react";
import { NewDayTradersItemLight } from "./ui/NewDayTradersItemLight/ui/NewDayTradersItemLight";
import { NewDayTradersItemBackground } from "./ui/NewDayTradersItemBackground/ui";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { NewDayTradersItemWhiteLight } from "./ui/NewDayTradersItemWhiteLight/ui";

export function NewTraderWidget({
  trader,
  activeTeam,
  isLast = false,
  isButton = false,
  handleClickButton,
  handleOpenModalInventar,
  buttonName,
}: NewTraderUiProps) {
  if (trader && !isLast) {
    return (
      <div className={styles.traderWidget}>
        <div className={styles.traderWidget__wrapper}>
          <div className={styles.traderWidget__inner}>
            <h3 className={styles.traderWidget__title}>{trader.trader.name}</h3>
            <span className={styles.traderWidget__number}>
              #{trader.trader.id}
            </span>
          </div>
          <NewDayTradersItemBackground activeTeam={activeTeam} />

          <div className={styles.traderWidget__info}>
            <IconCoin className={styles.traderWidget__icon} />
            <span className={styles.traderWidget__coins}>
              +
              {trader.trader.earn_for_day.toLocaleString("en-US", {
                notation: "compact",
                maximumFractionDigits: 1,
              })}
            </span>
            <span className={styles.traderWidget__text}>/day</span>
          </div>
        </div>
        {!isButton && (
          <p className={styles.traderWidget__total}>Total: {trader.total}</p>
        )}
        {isButton && handleClickButton && (
          <NewButtonUi
            type="button"
            size="connectWallet"
            variant="connectWallet"
            className={styles.traderWidget__button}
            onClickButton={() => handleClickButton(trader)}
          >
            {buttonName}
          </NewButtonUi>
        )}
        <NewDayTradersItemLight activeTeam={activeTeam} />
        <NewDayTradersItemWhiteLight />
      </div>
    );
  }

  return (
    <div className={styles.traderWidget}>
      <div className={styles.traderWidget__wrapper}>
        <div className={styles.traderWidget__inner}>
          <h3 className={styles.traderWidget__title}>Empty</h3>
        </div>
      </div>
      <NewButtonUi
        className={styles.newPadding}
        type="button"
        size="main"
        variant="main"
        onClickButton={
          handleOpenModalInventar && (() => handleOpenModalInventar())
        }
      >
        Add trader
      </NewButtonUi>
      <NewDayTradersItemBackground activeTeam={activeTeam} />
      <NewDayTradersItemWhiteLight />
    </div>
  );
}
