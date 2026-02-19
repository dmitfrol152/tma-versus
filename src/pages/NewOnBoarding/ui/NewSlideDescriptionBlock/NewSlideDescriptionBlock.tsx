import styles from "./NewSlideDescriptionBlock.module.scss";
import type { NewSlideDescriptionProps } from "./types";

export function NewSlideDescriptionBlock({
  description,
}: NewSlideDescriptionProps) {
  return <p className={styles.slideDescription}>{description}</p>;
}
