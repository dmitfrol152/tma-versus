import styles from "./NewModalStatusOffice.module.scss";
import IconError from "@shared/assets/images/svg/icon-error.svg?react";
import IconSuccess from "@shared/assets/images/svg/icon-success.svg?react";
import type { NewModalStatusOfficeProps } from "./types";
import clsx from "clsx";

export function NewModalStatusOffice({ payStatus }: NewModalStatusOfficeProps) {
  return (
    <div className={styles.newModalStatus}>
      <div className="container">
        <div
          className={clsx(
            styles.newModalStatus__wrapper,
            styles[`newModalStatus__wrapper--${payStatus}`],
          )}
        >
          {payStatus === "success" ? (
            <IconSuccess className={styles.newModalStatus__iconSuccess} />
          ) : payStatus === "error" ? (
            <IconError className={styles.newModalStatus__iconError} />
          ) : (
            ""
          )}
          <p
            className={clsx(
              styles.newModalStatus__text,
              styles[`newModalStatus__text--${payStatus}`],
            )}
          >
            {payStatus === "success"
              ? "The trader has been successfully jailed!"
              : payStatus === "error"
                ? "There is not enough space in this office or this trader is already in use."
                : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
