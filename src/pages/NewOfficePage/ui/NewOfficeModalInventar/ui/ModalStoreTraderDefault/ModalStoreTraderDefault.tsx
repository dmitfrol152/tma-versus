import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./ModalStoreTraderDefault.module.scss";
import { getSumCointBy } from "../../model/helpers/getSumCointBy";
import type { ModalStoreTraderUiProps } from "./types";

export function ModalStoreTraderDefault({
  traderCount,
  ImageMan,
  IconRainbow,
  IconCoin,
  handleAddCoint,
  handleSubCoint,
  handleBuyCoint,
  handleCloseModal,
  IconClose,
}: ModalStoreTraderUiProps) {
  return (
    <div className={styles.modalStoreTraderDefault}>
      <div className={styles.modalStoreTraderDefault__image}>
        {traderCount >= 3 && IconRainbow}
        <img
          className={styles.modalStoreTraderDefault__imageSrc}
          src={ImageMan}
          alt="Image"
        />
      </div>
      <p className={styles.modalStoreTraderDefault__title}>Trader #5</p>
      <div className={styles.modalStoreTraderDefault__info}>
        <div className={styles.modalStoreTraderDefault__infoDescription}>
          <span className={styles.modalStoreTraderDefault__infoText}>
            Productivity per day
          </span>
          <span className={styles.modalStoreTraderDefault__infoCoin}>
            {IconCoin}
            <span className={styles.modalStoreTraderDefault__infoCoinText}>
              +4,200
            </span>
          </span>
        </div>
        <div className={styles.modalStoreTraderDefault__infoButtons}>
          <div className={styles.modalStoreTraderDefault__infoButtonsBlockLeft}>
            <NewButtonUi
              type="button"
              size="textXS"
              variant="textXS"
              onClickButton={() => handleAddCoint()}
              className={styles.modalStoreTraderDefault__infoButtonsBlockBtn}
            >
              <div
                className={styles.modalStoreTraderDefault__infoButtonsBlockSub}
              ></div>
            </NewButtonUi>
          </div>
          <div className={styles.modalStoreTraderDefault__infoButtonsText}>
            {traderCount} Trader
          </div>
          <div
            className={styles.modalStoreTraderDefault__infoButtonsBlockRight}
          >
            <NewButtonUi
              type="button"
              size="textXS"
              variant="textXS"
              onClickButton={() => handleSubCoint()}
              className={styles.modalStoreTraderDefault__infoButtonsBlockBtn}
            >
              <div
                className={styles.modalStoreTraderDefault__infoButtonsBlockAdd}
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
            onClickButton={() => handleBuyCoint()}
          >
            Buy for {getSumCointBy(traderCount)} coins
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
  );
}
