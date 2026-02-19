import styles from "./Pool.module.scss";
import clsx from "clsx";
import { POOL_ARRAY_COMMUNITY } from "@/shared/lib/constants/POOL_ARRAY_COMMUNITY";
import { NewBlockInfoUi } from "@/shared/ui/NewBlockInfoUi/NewBlockInfoUi";
import type { PoolProps } from "./types";

export function Pool({ activeTeam }: PoolProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["pool--1"]
      : activeTeam === "2"
        ? styles["pool--2"]
        : styles["pool--default"];

  return (
    <div className={clsx(styles.pool, activeClassName)}>
      <div className={styles.pool__title}>
        <span className={styles.pool__titleTranslator}></span>
        <h3 className={styles.pool__titleText}>Pool</h3>
      </div>
      <ul className={styles.pool__list}>
        {POOL_ARRAY_COMMUNITY.map((item, index) => {
          return (
            <li className={styles.pool__item} key={index}>
              <NewBlockInfoUi
                data={item.data}
                text={item.text}
                icon={item.icon}
                sign={false}
                isActiveData={false}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
