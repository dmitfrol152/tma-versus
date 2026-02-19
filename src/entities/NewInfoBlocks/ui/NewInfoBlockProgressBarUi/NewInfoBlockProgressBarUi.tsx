import clsx from "clsx";
import type { NewInfoBlockProgressBarUiProps } from "./types";
import styles from "./NewInfoBlockProgressBarUi.module.scss";
import { useNewPercent } from "../../model/hooks/useNewPercent";

export function NewInfoBlockProgressBarUi({
  activeTeam,
  startValue,
  endValue,
  textProgressBar,
}: NewInfoBlockProgressBarUiProps) {
  const { percent } = useNewPercent({
    startValue,
    endValue,
  });

  const classNameTextColor =
    activeTeam === "1"
      ? styles["infoBlockProgressBarUi__data--1"]
      : activeTeam === "2"
        ? styles["infoBlockProgressBarUi__data--2"]
        : styles["infoBlockProgressBarUi__data--default"];

  const classNameProgressBarColor =
    activeTeam === "1"
      ? styles["infoBlockProgressBarUi__progressFill--1"]
      : activeTeam === "2"
        ? styles["infoBlockProgressBarUi__progressFill--2"]
        : styles["infoBlockProgressBarUi__progressFill--default"];

  return (
    <>
      <div className={styles.infoBlockProgressBarUi}>
        <div className={styles.infoBlockProgressBarUi__progress}>
          <div
            className={clsx(
              styles.infoBlockProgressBarUi__progressFill,
              classNameProgressBarColor,
            )}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
      <span
        className={clsx(
          styles.infoBlockProgressBarUi__data,
          classNameTextColor,
        )}
      >
        {startValue.toLocaleString("en-EN")}/{endValue.toLocaleString("en-EN")}{" "}
        {textProgressBar}
      </span>
    </>
  );
}
