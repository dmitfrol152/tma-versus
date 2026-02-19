import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import type { NewHeaderWalletProps } from "./types";
import IconCoin from "@shared/assets/images/svg/icon-coin.svg?react";
import IconWallet from "@shared/assets/images/svg/icon-wallet.svg?react";
import styles from "./NewHeaderWallet.module.scss";
import clsx from "clsx";

export function NewHeaderWallet({
  isConnectWallet,
  openWallet,
  activeTeam,
  userBalanse,
}: NewHeaderWalletProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["clansActive--1"]
      : activeTeam === "2"
        ? styles["clansActive--2"]
        : styles["clansActive--default"];

  if (!isConnectWallet) {
    return (
      <NewButtonUi
        type="button"
        size="connectWallet"
        variant="connectWallet"
        onClickButton={openWallet}
        teamColor={activeTeam === null ? "default" : activeTeam}
      >
        Connect wallet
      </NewButtonUi>
    );
  }

  if (isConnectWallet) {
    return (
      <div className={clsx(styles.headerWallet, activeClassName)}>
        <div className={styles.headerWallet__inner}>
          <IconCoin className={styles.headerWallet__coin} />
          <span className={styles.headerWallet__info}>
            {userBalanse ? userBalanse.token_money : "error"}K
          </span>
        </div>
        <div className={styles.headerWallet__btn}>
          <NewButtonUi
            type="button"
            size="walletBtn"
            variant="walletBtn"
            onClickButton={openWallet}
          >
            <IconWallet className={styles.headerWallet__wallet} />
          </NewButtonUi>
        </div>
      </div>
    );
  }

  return null;
}
