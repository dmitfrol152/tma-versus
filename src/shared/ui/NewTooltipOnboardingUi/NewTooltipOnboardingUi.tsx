import type { TooltipRenderProps } from "react-joyride";
import styles from "./NewTooltipOnboardingUi.module.scss";
import { createPortal } from "react-dom";
import { memo } from "react";

export const NewTooltipOnboardingUi = memo((props: TooltipRenderProps) => {
  const { index, step, primaryProps, skipProps, size } = props;
  const isLast = index === size - 1;
  const { onClick: originalSkipClick } = skipProps;
  const { onClick: originalFinishClick } = primaryProps;

  const handleCustomSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (originalSkipClick) {
      originalSkipClick(e);
    }

    document.body.style.overflow = "";
    step.data.setIsStartTour(false);
  };

  const handleCustomFinish = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (originalFinishClick) {
      originalFinishClick(e);
    }

    if (isLast) {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <div className={styles.newTooltipOnboardingUi}>
        <p className={styles.newTooltipOnboardingUi__title}>{step.content}</p>
        <div className={styles.newTooltipOnboardingUi__buttons}>
          {index + 1 < props.size && (
            <span className={styles.newTooltipOnboardingUi__steps}>
              {index + 1}/{props.size}
            </span>
          )}
          <div className={styles.newTooltipOnboardingUi__buttonsOne}>
            <button
              {...primaryProps}
              onClick={handleCustomFinish}
              className={styles.newTooltipOnboardingUi__buttonsNext}
            >
              {!isLast ? "Next step" : "Finish"}
            </button>
          </div>
        </div>
      </div>
      {index + 1 < props.size &&
        createPortal(
          <button
            {...skipProps}
            className={styles.newTooltipOnboardingUi__buttonsSkip}
            onClick={handleCustomSkip}
          >
            Skip Guide
          </button>,
          document.body,
        )}
    </>
  );
});
