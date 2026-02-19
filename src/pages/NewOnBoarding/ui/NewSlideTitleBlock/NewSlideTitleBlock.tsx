import clsx from "clsx";
import styles from "./NewSlideTitleBlock.module.scss";
import type { NewSlideTitleProps } from "./types";

export function NewSlideTitleBlock({
  title,
  description,
  target,
  classNameWidthContainer,
}: NewSlideTitleProps) {
  const className = clsx(
    `${styles.slideTitle}`,
    {
      welcome: `${styles.slideTitleWelcome}`,
      season: `${styles.slideTitleSeason}`,
      victory: `${styles.slideTitleVictory}`,
    }[classNameWidthContainer],
  );

  return (
    <div className={className}>
      <p className={styles.slideTitle__title}>{title}</p>
      <span className={styles.slideTitle__description}>{description}</span>
      <span className={styles.slideTitle__target}>{target}</span>
    </div>
  );
}
