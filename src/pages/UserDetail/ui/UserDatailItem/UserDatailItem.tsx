import type { UserDetailItemProps } from "./model/types";
import styles from "./UserDatailItem.module.scss";
import InconStar from "@shared/assets/images/svg/icon-star.svg?react";

export function UserDatailItem({ layerNumber, nickname }: UserDetailItemProps) {
  return (
    <div className={styles.userDatailItem}>
      <h3 className={styles.userDatailItem__title}>L{layerNumber}</h3>
      <ul className={styles.userDatailItem__list}>
        <li className={styles.userDatailItem__item}>
          <span className={styles.userDatailItem__itemTitle}>Nickname</span>
          <span className={styles.userDatailItem__itemText}>{nickname}</span>
        </li>
        <li className={styles.userDatailItem__item}>
          <span className={styles.userDatailItem__itemTitle}>RAW</span>
          <span className={styles.userDatailItem__itemLeft}>
            <InconStar className={styles.userDatailItem__itemIcon} />
            <span className={styles.userDatailItem__itemText}>7,000</span>
          </span>
        </li>
        <li className={styles.userDatailItem__item}>
          <span className={styles.userDatailItem__itemTitle}>Counted</span>
          <span className={styles.userDatailItem__itemLeft}>
            <InconStar className={styles.userDatailItem__itemIcon} />
            <span className={styles.userDatailItem__itemText}>5,000</span>
          </span>
        </li>
      </ul>
    </div>
  );
}
