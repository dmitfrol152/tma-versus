import styles from "./NewModalStatusCommunity.module.scss";
import IconError from "@shared/assets/images/svg/icon-error.svg?react";
import IconSuccess from "@shared/assets/images/svg/icon-success.svg?react";
import type { NewModalStatusCommunityProps } from "./types";
import clsx from "clsx";

export function NewModalStatusCommunity({
  copyStatus,
}: NewModalStatusCommunityProps) {
  return (
    <div className={styles.newModalStatus}>
      <div className="container">
        <div
          className={clsx(
            styles.newModalStatus__wrapper,
            styles[`newModalStatus__wrapper--${copyStatus.type}`],
          )}
        >
          {copyStatus.type === "success" ? (
            <IconSuccess className={styles.newModalStatus__iconSuccess} />
          ) : copyStatus.type === "error" ? (
            <IconError className={styles.newModalStatus__iconError} />
          ) : (
            ""
          )}
          <p
            className={clsx(
              styles.newModalStatus__text,
              styles[`newModalStatus__text--${copyStatus.type}`],
            )}
          >
            {copyStatus.message}
          </p>
        </div>
      </div>
    </div>
  );
}
