import clsx from "clsx";
import styles from "./General.module.scss";
import type { GeneralProps } from "./types";
import { NewBlockInfoUi } from "@/shared/ui/NewBlockInfoUi/NewBlockInfoUi";

export function General({
  activeTeam,
  GENERAL_ARRAY_COMMUNITY,
  isGeneralStep,
}: GeneralProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["general--1"]
      : activeTeam === "2"
        ? styles["general--2"]
        : styles["general--default"];

  return (
    <div
      className={clsx(
        styles.general,
        activeClassName,
        isGeneralStep && styles.general__tourOnboarding,
      )}
      data-tour="communityPageGeneral"
    >
      <div className={styles.general__title}>
        <span className={styles.general__titleTranslator}></span>
        <h3 className={styles.general__titleText}>General</h3>
      </div>
      <ul className={styles.general__list}>
        {GENERAL_ARRAY_COMMUNITY.map((item, index) => {
          return (
            <li className={styles.general__item} key={index}>
              <NewBlockInfoUi
                icon={item.icon}
                data={item.data}
                text={item.text}
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
