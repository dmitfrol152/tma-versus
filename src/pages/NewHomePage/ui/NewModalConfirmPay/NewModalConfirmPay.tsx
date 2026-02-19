import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./NewModalConfirmPay.module.scss";
import IconClose from "@shared/assets/images/svg/icon-close.svg?react";
import type { NewModalConfirmPayProps } from "./types";
import IconStar from "@shared/assets/images/svg/icon-star.svg?react";
import { getNewNoTargetClan } from "@/shared/lib/helpers/getNewNoTargetClan";

export function NewModalConfirmPay({
  handleCloseModal,
  orderedClans,
  activeTeam,
  handleClickChangeTeam,
}: NewModalConfirmPayProps) {
  const noTargetClan = getNewNoTargetClan(orderedClans, activeTeam);

  return (
    <div className={styles.newModalConfirmPay}>
      <div className="container">
        <div className={styles.newModalConfirmPay__wrapper}>
          <div className={styles.newModalConfirmPay__light}></div>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            className={styles.newModalConfirmPay__close}
            onClickButton={() => handleCloseModal()}
          >
            <IconClose className={styles.newModalConfirmPay__closeIcon} />
          </NewButtonUi>
          <div className={styles.newModalConfirmPay__block}>
            <p className={styles.newModalConfirmPay__title}>
              Swap to {noTargetClan?.clan ? noTargetClan.clan.name : "error"}?
            </p>
            <p className={styles.newModalConfirmPay__description}>
              This action will cost{" "}
              {
                <IconStar
                  className={styles.newModalConfirmPay__descriptionIcon}
                />
              }{" "}
              <span className={styles.newModalConfirmPay__descriptionBold}>
                500 stars
              </span>{" "}
              and cannot be canceled. Do you want to continue?
            </p>
            <NewButtonUi
              type="button"
              size="connectWallet"
              variant="connectWallet"
              className={styles.newModalConfirmPay__btn}
              onClickButton={() => handleClickChangeTeam()}
            >
              Continue
            </NewButtonUi>
          </div>
        </div>
      </div>
    </div>
  );
}
