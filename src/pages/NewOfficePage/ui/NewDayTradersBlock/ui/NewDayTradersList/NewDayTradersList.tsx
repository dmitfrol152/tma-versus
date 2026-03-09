import type { NewDayTradersListProps } from "./types";
import styles from "./NewDayTradersList.module.scss";
import { NewTraderWidget } from "@/widgets/NewTraderWidget";

export function NewDayTradersList({
  activeTeam,
  handleOpenModalInventar,
  userBalanse,
  handleOpenModalInventarWithTrader,
}: NewDayTradersListProps) {
  const countOfTraders = userBalanse.my_ofice.ofice.count_of_traders;
  const traders = userBalanse.my_ofice.traders;

  if (!countOfTraders) {
    return (
      <div className={styles.dayTradersList__empty}>
        <span className={styles.dayTradersList__emptyText}>Empty</span>
      </div>
    );
  }

  const countEmtySlots = countOfTraders - traders.length;

  return (
    <ul className={styles.dayTradersList}>
      {traders
        // .filter((item) => item.isActive)
        .map((trader) => {
          return (
            <li className={styles.dayTradersList__item} key={trader.id}>
              <NewTraderWidget
                trader={trader}
                activeTeam={activeTeam}
                isChangeBtn={true}
                handleOpenModalInventarWithTrader={
                  handleOpenModalInventarWithTrader
                }
              />
            </li>
          );
        })}
      {countEmtySlots > 0 &&
        Array.from({ length: countEmtySlots }, (_, index) => {
          return (
            <li
              className={styles.dayTradersList__item}
              key={`empty-slot-${index}`}
            >
              <NewTraderWidget
                activeTeam={activeTeam}
                isLast={true}
                handleOpenModalInventar={handleOpenModalInventar}
              />
            </li>
          );
        })}
    </ul>
  );
}
