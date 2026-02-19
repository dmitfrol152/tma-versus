import clsx from "clsx";
import IconCoin from "@shared/assets/images/svg/icon-coin.svg?react";
import styles from "./NewClansItem.module.scss";
import { NewClansImage } from "@/entities/NewClansItem/ui/NewClansImage";
import { NewClansBackground } from "@/entities/NewClansItem/ui/NewClansBackground";
import type { NewClansItemProps } from "./model/types";
import { NewClansLight } from "./ui/NewClansLight";

export function NewClansItem({
  clan,
  activeClan,
  isStartTour,
}: NewClansItemProps) {
  const clanName = String(clan.id);
  const clanCoins = clan.money_team.toLocaleString("en-EN");

  const isActive = activeClan === clanName;
  const isOtherActive = activeClan !== null && activeClan !== clanName;

  return (
    <div className={clsx(styles.clansItem)}>
      <div
        className={clsx(
          styles.clansItem__wrapper,
          styles[`clansItem__wrapper--${clanName}`],
          {
            [styles["clansItem__wrapper--active"]]: isActive,
            [styles["clansItem__wrapper--inactive"]]: isOtherActive,
          },
        )}
      >
        <div className={styles.clansItem__inner}>
          <div className={styles.clansItem__team}>
            <h2 className={styles.clansItem__teamTitle}>{clan.name}</h2>
            <span className={styles.clansItem__teamText}>//</span>
            <span className={styles.clansItem__teamText}>{clan.percent}%</span>
          </div>

          <div className={styles.clansItem__coin}>
            <IconCoin className={styles.clansItem__coinIcon} />
            <span className={styles.clansItem__coinText}>{clanCoins}</span>
          </div>
        </div>

        <div className={styles.clansItem__down}>
          <NewClansImage clan={clan} />
        </div>
      </div>
      <NewClansLight
        clanName={clanName}
        isActive={isActive}
        activeClan={activeClan}
      />
      <NewClansBackground clanName={clanName} isStartTour={isStartTour} />
    </div>
  );
}
