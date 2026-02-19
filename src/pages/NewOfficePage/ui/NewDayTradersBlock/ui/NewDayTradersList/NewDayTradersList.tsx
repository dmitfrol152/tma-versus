import type { NewDayTradersListProps } from "./types";
import styles from "./NewDayTradersList.module.scss";
import { NewTraderWidget } from "@/widgets/NewTraderWidget";

export function NewDayTradersList({
  traders,
  activeTeam,
  handleOpenModalInventar,
}: NewDayTradersListProps) {
  if (!traders.length) {
    return <NewTraderWidget activeTeam={activeTeam} isLast={true} />;
  }

  return (
    <ul className={styles.dayTradersList}>
      {traders
        .filter((item) => item.isActive)
        .map((trader) => {
          return (
            <li className={styles.dayTradersList__item} key={trader.trader.id}>
              <NewTraderWidget trader={trader} activeTeam={activeTeam} />
            </li>
          );
        })}
      <li className={styles.dayTradersList__item}>
        <NewTraderWidget
          activeTeam={activeTeam}
          isLast={true}
          handleOpenModalInventar={handleOpenModalInventar}
        />
      </li>
    </ul>
  );
}
