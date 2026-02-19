import styles from "./NewMarqueeText.module.scss";

export function NewMarqueeText() {
  return (
    <div className={styles.marqueeText}>
      {Array.from({ length: 3 }, (_, index) => {
        return (
          <div className={styles.marqueeText__block} key={index}>
            <span className={styles.marqueeText__text}>Weekend Boost +20%</span>
            <span className={styles.marqueeText__slash}>//</span>
          </div>
        );
      })}
    </div>
  );
}
