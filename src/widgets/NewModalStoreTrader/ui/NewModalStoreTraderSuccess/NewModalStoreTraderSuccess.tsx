import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./NewModalStoreTraderSuccess.module.scss";
import type { NewModalStoreTraderSuccessProps } from "./types";

export function NewModalStoreTraderSuccess({
  ImageMan,
  IconRainbow,
  handleContinue,
  handleCloseModal,
  IconClose,
}: NewModalStoreTraderSuccessProps) {
  return (
    <div className="container">
      <div className={styles.modalStoreTraderSuccess}>
        <div className={styles.modalStoreTraderSuccess__wrapper}>
          <div className={styles.modalStoreTraderSuccess__image}>
            {IconRainbow}
            <img
              className={styles.modalStoreTraderSuccess__imageSrc}
              src={ImageMan}
              alt="Image"
            />
          </div>
          <p className={styles.modalStoreTraderSuccess__title}>
            Purchase completed
          </p>
          <p className={styles.modalStoreTraderSuccess__description}>
            Congratulations! You have purchased a trader that will bring 4,200
            coins per day. It will be automatically placed in a free slot.
          </p>
          <div className={styles.modalStoreTraderSuccess__btn}>
            <NewButtonUi
              type="button"
              size="connectWallet"
              variant="connectWallet"
              className={styles.modalStoreTraderSuccess__btnUi}
              onClickButton={() => handleContinue()}
            >
              Continue
            </NewButtonUi>
          </div>
          <div className={styles.modalStoreTraderSuccess__light}></div>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            className={styles.modalStoreTraderSuccess__close}
            onClickButton={() => handleCloseModal()}
          >
            {IconClose}
          </NewButtonUi>
        </div>
      </div>
    </div>
  );
}
