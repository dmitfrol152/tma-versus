import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./NewModalStoreTraderError.module.scss";
import type { NewModalStoreTraderErrorProps } from "./types";

export function NewModalStoreTraderError({
  ImageMan,
  IconRainbow,
  handleNavigateOffice,
  handleCloseModal,
  IconClose,
}: NewModalStoreTraderErrorProps) {
  return (
    <div className="container">
      <div className={styles.modalStoreTraderError}>
        <div className={styles.modalStoreTraderError__wrapper}>
          <div className={styles.modalStoreTraderError__image}>
            {IconRainbow}
            <img
              className={styles.modalStoreTraderError__imageSrc}
              src={ImageMan}
              alt="Image"
            />
          </div>
          <p className={styles.modalStoreTraderError__title}>
            Purchase declined...
          </p>
          <p className={styles.modalStoreTraderError__description}>
            There are not enough free slots in your office to accommodate a
            trader. Free up or buy more slots and return to the purchase again.
          </p>
          <div className={styles.modalStoreTraderError__btn}>
            <NewButtonUi
              type="button"
              size="connectWallet"
              variant="connectWallet"
              className={styles.modalStoreTraderError__btnUi}
              onClickButton={() => handleNavigateOffice()}
            >
              Go to office
            </NewButtonUi>
          </div>
          <div className={styles.modalStoreTraderError__light}></div>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            className={styles.modalStoreTraderError__close}
            onClickButton={() => handleCloseModal()}
          >
            {IconClose}
          </NewButtonUi>
        </div>
      </div>
    </div>
  );
}
