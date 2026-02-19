import type { NewHystoryBlockBlockDataProps } from "./model/types";
import styles from "./NewHystoryBlock.module.scss";
import clsx from "clsx";
import { NewHystoryBlockEmpty } from "./ui/NewHystoryBlockEmpty";
import { NewHystoryBlockList } from "./ui/NewHystoryBlockList";

export function NewHystoryBlock({
  hystoryClaims,
  activeTeam,
}: NewHystoryBlockBlockDataProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["hystoryBlock--1"]
      : activeTeam === "2"
        ? styles["hystoryBlock--2"]
        : styles["hystoryBlock--default"];

  return (
    <div className={clsx(styles.hystoryBlock, activeClassName)}>
      <div className={styles.hystoryBlock__title}>
        <span className={styles.hystoryBlock__titleTranslator}></span>
        <h3 className={styles.hystoryBlock__titleText}>Hystory</h3>
      </div>
      {!hystoryClaims.length ? (
        <NewHystoryBlockEmpty />
      ) : (
        <NewHystoryBlockList hystoryClaims={hystoryClaims} />
      )}
    </div>
  );
}
