import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./NewModalStoreTraderDefault.module.scss";
import { getNewSumCointBy } from "../../model/helpers/getNewSumCointBy";
import type { NewModalStoreTraderDefaultProps } from "./types";

export function NewModalStoreTraderDefault({
  selectedTrader,
  traderCount,
  ImageMan,
  IconRainbow,
  IconCoin,
  handleAddCoint,
  handleSubCoint,
  handleBuyCoint,
  handleCloseModal,
  IconClose,
}: NewModalStoreTraderDefaultProps) {
  return (
    <div className="container">
      <div className={styles.modalStoreTraderDefault}>
        <div className={styles.modalStoreTraderDefault__wrapper}>
          <div className={styles.modalStoreTraderDefault__image}>
            {traderCount >= 3 && IconRainbow}
            <img
              className={styles.modalStoreTraderDefault__imageSrc}
              src={ImageMan}
              alt="Image"
            />
          </div>
          <p className={styles.modalStoreTraderDefault__title}>
            {`${selectedTrader.trader.name} #${selectedTrader.trader.id}`}
          </p>
          <div className={styles.modalStoreTraderDefault__info}>
            <div className={styles.modalStoreTraderDefault__infoDescription}>
              <span className={styles.modalStoreTraderDefault__infoText}>
                Productivity per day
              </span>
              <span className={styles.modalStoreTraderDefault__infoCoin}>
                {IconCoin}
                <span className={styles.modalStoreTraderDefault__infoCoinText}>
                  +{selectedTrader.trader.earn_for_day.toLocaleString("en-EN")}
                </span>
              </span>
            </div>
            <div className={styles.modalStoreTraderDefault__infoButtons}>
              <div
                className={styles.modalStoreTraderDefault__infoButtonsBlockLeft}
              >
                <NewButtonUi
                  type="button"
                  size="textXS"
                  variant="textXS"
                  onClickButton={() => handleAddCoint()}
                  className={
                    styles.modalStoreTraderDefault__infoButtonsBlockBtn
                  }
                >
                  <div
                    className={
                      styles.modalStoreTraderDefault__infoButtonsBlockSub
                    }
                  ></div>
                </NewButtonUi>
              </div>
              <div className={styles.modalStoreTraderDefault__infoButtonsText}>
                {traderCount} Trader
              </div>
              <div
                className={
                  styles.modalStoreTraderDefault__infoButtonsBlockRight
                }
              >
                <NewButtonUi
                  type="button"
                  size="textXS"
                  variant="textXS"
                  onClickButton={() => handleSubCoint()}
                  className={
                    styles.modalStoreTraderDefault__infoButtonsBlockBtn
                  }
                >
                  <div
                    className={
                      styles.modalStoreTraderDefault__infoButtonsBlockAdd
                    }
                  ></div>
                </NewButtonUi>
              </div>
            </div>
            <div className={styles.modalStoreTraderDefault__infoBtn}>
              <NewButtonUi
                type="button"
                size="connectWallet"
                variant="connectWallet"
                className={styles.modalStoreTraderDefault__infoButtonsBtn}
                onClickButton={() =>
                  handleBuyCoint(selectedTrader.trader.id, traderCount)
                }
              >
                Buy for{" "}
                {getNewSumCointBy(traderCount, selectedTrader.trader.price)}{" "}
                coins
              </NewButtonUi>
            </div>
          </div>
          <div className={styles.modalStoreTraderDefault__light}></div>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            className={styles.modalStoreTraderDefault__close}
            onClickButton={() => handleCloseModal()}
          >
            {IconClose}
          </NewButtonUi>
        </div>
      </div>
    </div>
  );
}
