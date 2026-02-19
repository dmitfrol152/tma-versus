import styles from "./Progress.module.scss";
import clsx from "clsx";
import { NewBlockInfoUi } from "@/shared/ui/NewBlockInfoUi/NewBlockInfoUi";
import type { ProgressProps } from "./types";
import { PROGRESS_ARRAY_COMMUNITY } from "@/shared/lib/constants/PROGRESS_ARRAY_COMMUNITY";
import { InfoBlockLong } from "@/widgets/InfoBlockLong";

export function Progress({ activeTeam }: ProgressProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["progress--1"]
      : activeTeam === "2"
        ? styles["progress--2"]
        : styles["progress--default"];

  return (
    <div className={clsx(styles.progress, activeClassName)}>
      <div className={styles.progress__title}>
        <span className={styles.progress__titleTranslator}></span>
        <h3 className={styles.progress__titleText}>Your progress</h3>
      </div>
      <ul className={styles.progress__list}>
        {PROGRESS_ARRAY_COMMUNITY.map((item, index) => {
          return (
            <li className={styles.progress__item} key={index}>
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
      <InfoBlockLong
        title="Participation in the pool"
        currentValue={2000}
        maxValue={3000}
        addTextProgressBar="left to start"
        activeTeam={activeTeam}
      />
    </div>
  );
}
