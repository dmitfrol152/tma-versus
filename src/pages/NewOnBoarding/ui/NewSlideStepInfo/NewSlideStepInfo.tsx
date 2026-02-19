import type { NewCurrentStepProps } from "./types";
import styles from "./NewSlideStepInfo.module.scss";
import IconCurrentStep from "@/shared/assets/images/svg/target-fill.svg?react";
import IconEmptyStep from "@/shared/assets/images/svg/target-empty.svg?react";
import clsx from "clsx";

export function NewSlideStepInfo({ currentStep }: NewCurrentStepProps) {
  return (
    <div className={styles.slideStepInfo}>
      {Array.from({ length: 3 }, (_, index) =>
        currentStep === index + 1 ? (
          <IconCurrentStep
            key={index}
            className={clsx(styles.slideStepInfo__icon, styles.blue)}
          />
        ) : (
          <IconEmptyStep
            key={index}
            className={clsx(styles.slideStepInfo__icon, styles.gray)}
          />
        ),
      )}
    </div>
  );
}
