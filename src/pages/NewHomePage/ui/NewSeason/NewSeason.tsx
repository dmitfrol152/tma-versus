import type { NewSeasonDataProps } from "./model/types";
import styles from "./NewSeason.module.scss";
import { useTimer } from "./model/hooks/useTimer";

export function NewSeason({
  data,
  // isStartTour,
  // stepIndex,
}: NewSeasonDataProps) {
  const timer = useTimer(data.timer);
  // const isVisibleOverlay = isStartTour && stepIndex === 0;

  return (
    <div className={styles.season}>
      {/* {isVisibleOverlay && (
        <>
          <div className={styles.season__overlayTop} />
          <div className={styles.season__overlayBottom} />
          <div className={styles.season__overlayLeft} />
          <div className={styles.season__overlayRight} />
        </>
      )} */}

      <div className={styles.season__info} data-tour="homePageSeason">
        <span className={styles.season__infoSeason}>Season #{data.id}</span>
        <p className={styles.season__infoPrize}>${data.prize}</p>
        <span className={styles.season__infoTimer}>{timer}</span>
      </div>

      {/* {isStartTour && (
        <div className={styles.season__tour} data-tour="homePageSeason"></div>
      )} */}
    </div>
  );
}
