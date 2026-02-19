import styles from "./NewSlideLayout.module.scss";
import type { NewSlideLayoutProps } from "./types";

export function NewSlideLayout({
  buttonLeft,
  buttonRight,
  slideTitle,
  slideDescription,
  backgroundImage,
  slideStepInfo,
  buttonNextStep,
  buttonSkipInfo,
}: NewSlideLayoutProps) {
  return (
    <div className="container">
      <div className={styles.slideLayout}>
        <div className={styles.slideLayout__wrapper}>
          <div className={styles.slideLayout__blur}></div>
          <div className={styles.slideLayout__empty}></div>
          <div className={styles.slideLayout__buttons}>
            {buttonLeft}
            {buttonRight}
          </div>
          <div className={styles.slideLayout__description}>
            {slideTitle}
            {slideDescription}
            <div className={styles.slideLayout__img}>
              <img src={backgroundImage} alt="Background image" />
            </div>
          </div>
        </div>
        <div className={styles.slideLayout__steps}>
          {slideStepInfo}
          {buttonNextStep}
        </div>
        <div className={styles.slideLayout__skip}>{buttonSkipInfo}</div>
      </div>
    </div>
  );
}
