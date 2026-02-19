import styles from "./NewModalStatus.module.scss";
import IconError from "@shared/assets/images/svg/icon-error.svg?react";
import IconSuccess from "@shared/assets/images/svg/icon-success.svg?react";
import type { NewModalStatusProps } from "./types";
import { getNewNoTargetClan } from "@/shared/lib/helpers/getNewNoTargetClan";
import clsx from "clsx";

export function NewModalStatus({
  orderedClans,
  activeTeam,
  payStatus,
}: NewModalStatusProps) {
  const noTargetClan = getNewNoTargetClan(orderedClans, activeTeam);

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
              ? `You have successfully joined the ${noTargetClan} team!`
              : payStatus === "error"
                ? `Your transaction failed. Please try again`
                : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
