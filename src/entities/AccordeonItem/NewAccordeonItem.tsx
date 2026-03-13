import type { NewAccordeonItemProps } from "./model/types";
import styles from "./NewAccordeonItem.module.scss";
import clsx from "clsx";
// import IconRight from "@shared/assets/images/svg/icon-arrow-right.svg?react";
import IconStar from "@shared/assets/images/svg/icon-star.svg?react";
// import { Link } from "react-router";

export function NewAccordeonItem({
  item,
  activeTeam /*, index */,
}: NewAccordeonItemProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["accordeonItem--bulls"]
      : activeTeam === "2"
        ? styles["accordeonItem--bears"]
        : styles["accordeonItem--default"];

  return (
    // <Link
    //   className={clsx(styles.accordeonItem, activeClassName)}
    //   to={`/community/${index}/${item.nickname}`}
    // >
    //   <div className={styles.accordeonItem__left}>
    //     <span className={styles.accordeonItem__leftNickname}>
    //       {item.nickname}
    //     </span>
    //     <div className={styles.accordeonItem__leftInfo}>
    //       <span className={styles.accordeonItem__leftInfoInner}>
    //         <IconStar className={styles.accordeonItem__leftInfoInnerIcon} />
    //         <span className={styles.accordeonItem__leftInfoInnerText}>
    //           {item.raw}
    //         </span>
    //       </span>
    //       <span className={styles.accordeonItem__leftInfoText}>//</span>
    //       <span className={styles.accordeonItem__leftInfoText}>
    //         {item.invites}
    //       </span>
    //       <span className={styles.accordeonItem__leftInfoText}>invites</span>
    //     </div>
    //   </div>
    //   <IconRight className={styles.accordeonItem__icon} />
    // </Link>
    <div className={clsx(styles.accordeonItem, activeClassName)}>
      <div className={styles.accordeonItem__left}>
        <span className={styles.accordeonItem__leftNickname}>
          @{item.tg_username}
        </span>
        <div className={styles.accordeonItem__leftInfo}>
          <span className={styles.accordeonItem__leftInfoInner}>
            <IconStar className={styles.accordeonItem__leftInfoInnerIcon} />
            <span className={styles.accordeonItem__leftInfoInnerText}>
              {item.Volume_Stars}
            </span>
          </span>
          <span className={styles.accordeonItem__leftInfoText}>//</span>
          <span className={styles.accordeonItem__leftInfoText}>
            {item.Invited}
          </span>
          <span className={styles.accordeonItem__leftInfoText}>invites</span>
        </div>
      </div>
    </div>
  );
}
