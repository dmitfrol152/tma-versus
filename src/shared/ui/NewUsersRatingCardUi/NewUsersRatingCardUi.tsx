import clsx from "clsx";
import type { NewUsersRatingCardUiProps } from "./types";
import styles from "./NewUsersRatingCardUi.module.scss";
import IconCoint from "@shared/assets/images/svg/icon-coin.svg?react";

export function NewUsersRatingCardUi({ position }: NewUsersRatingCardUiProps) {
  if (!position) return null;

  const ratingColor = {
    1: styles["usersRatingCardUi__right--gold"],
    2: styles["usersRatingCardUi__right--silver"],
    3: styles["usersRatingCardUi__right--bronze"],
  }[position.position];

  return (
    <div className={styles.usersRatingCardUi}>
      <div className={styles.usersRatingCardUi__left}>
        <span className={styles.usersRatingCardUi__leftNickname}>
          {position.tg_name}
        </span>
        <div className={styles.usersRatingCardUi__leftInfo}>
          <span className={styles.usersRatingCardUi__leftInfoInner}>
            <IconCoint
              className={styles.usersRatingCardUi__leftInfoInnerIcon}
            />
            <span className={styles.usersRatingCardUi__leftInfoInnerText}>
              {position.earn}
            </span>
          </span>
          <span className={styles.usersRatingCardUi__leftInfoText}>//</span>
          <span className={styles.usersRatingCardUi__leftInfoText}>
            {position.precent}%
          </span>
        </div>
      </div>
      <span
        className={clsx(
          styles.usersRatingCardUi__right,
          ratingColor ? ratingColor : "",
        )}
      >
        #{position.position}
      </span>
    </div>
  );
}
