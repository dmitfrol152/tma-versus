import type { NewDayTradersOccupiedProps } from "./types";
import styles from "./NewDayTradersOccupied.module.scss";
import { NewTraderWidget } from "@/widgets/NewTraderWidget";

export function NewDayTradersOccupied({
  traders,
  activeTeam,
}: NewDayTradersOccupiedProps) {
  if (!traders.length) {
    return (
      <div className={styles.newDayTradersOccupied__empty}>
        <span className={styles.newDayTradersOccupied__emptyText}>Empty</span>
      </div>
    );
  }

  return (
    <ul className={styles.newDayTradersOccupied}>
      {traders
        .filter((item) => item.isActive)
        .map((trader) => {
          return (
            <li
              className={styles.newDayTradersOccupied__item}
              key={trader.trader.id}
            >
              <NewTraderWidget trader={trader} activeTeam={activeTeam} />
            </li>
          );
        })}
    </ul>
  );
}
