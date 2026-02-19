import styles from "./NewMarqueeInfo.module.scss";
import type { NewMarqueeInfoProps } from "./model/types";

export function NewMarqueeInfo({ children }: NewMarqueeInfoProps) {
  return <div className={styles.marqueeInfo}>{children}</div>;
}
