import clsx from "clsx";
import type { NewButtonUiProps } from "./types";
import styles from "./NewButtonUi.module.scss";

export function NewButtonUi({
  className,
  type,
  onClickButton,
  children,
  size,
  variant,
  disabled = false,
  color,
  isActive = false,
  teamColor = "default",
}: NewButtonUiProps) {
  const activeClass =
    isActive && variant === "main"
      ? {
          1: styles["buttonUiMain--active-1"],
          2: styles["buttonUiMain--active-2"],
          default: styles["buttonUiMain--active-default"],
        }[teamColor]
      : variant === "connectWallet"
        ? {
            1: styles["buttonUiWallet--active-1"],
            2: styles["buttonUiWallet--active-2"],
            default: styles["buttonUiWallet--active-default"],
          }[teamColor]
        : null;

  const classButton = clsx(
    className,
    activeClass,
    `${styles.buttonUi}`,
    {
      xs: `${styles.buttonUiSize}`,
      textXS: `${styles.buttonUiSizeText}`,
      connectWallet: `${styles.buttonUiSizeWallet}`,
      walletBtn: `${styles.buttonUiSizeWalletBtn}`,
      main: `${styles.buttonUiSizeMain}`,
      full: `${styles.buttonUiSizeFull}`,
    }[size],
    {
      onboarding: `${styles.buttonUiOnBoarding}`,
      textXS: `${styles.buttonUiText}`,
      connectWallet: `${styles.buttonUiWallet}`,
      walletBtn: `${styles.buttonUiWalletBtn}`,
      main: `${styles.buttonUiMain}`,
    }[variant],
    color &&
      {
        blue: `${styles.blue}`,
        gray: `${styles.gray}`,
      }[color],
  );

  return (
    <button
      className={classButton}
      type={type}
      onClick={onClickButton}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
