import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import type { NewHeaderWalletProps } from "./types";
import IconCoin from "@shared/assets/images/svg/icon-coin.svg?react";
import IconWallet from "@shared/assets/images/svg/icon-wallet.svg?react";
import styles from "./NewHeaderWallet.module.scss";
import clsx from "clsx";

export function NewHeaderWallet({
  openWallet,
  activeTeam,
  userBalanse,
  userMain,
  isConnectWallet,
}: NewHeaderWalletProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["clansActive--1"]
      : activeTeam === "2"
        ? styles["clansActive--2"]
        : styles["clansActive--default"];

  const isWalletConnected =
    isConnectWallet || (userMain && userMain.wallet_address);

  if (isWalletConnected) {
    return (
      <div className={clsx(styles.headerWallet, activeClassName)}>
        <div className={styles.headerWallet__inner}>
          <IconCoin className={styles.headerWallet__coin} />
          <span className={styles.headerWallet__info}>
            {userBalanse ? userBalanse.token_money : "0"}K
          </span>
        </div>
        <div className={styles.headerWallet__btn}>
          <div className={styles.headerWallet__btnConnected}>
            <IconWallet className={styles.headerWallet__wallet} />
          </div>
        </div>
      </div>
    );
  }

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
