import { NewStatisticsCardUi } from "@/shared/ui/NewStatisticsCardUi/NewStatisticsCardUi";
import styles from "./NewStatisticsWidget.module.scss";
import type { NewInfoPersonProps } from "@/shared/lib/store/types";

export function NewStatisticsWidget({ user }: { user: NewInfoPersonProps }) {
  return (
    <ul className={styles.statisticsWidget}>
      <li className={styles.statisticsWidget__item}>
        <NewStatisticsCardUi
          item={{ title: "Your total profit", count: user.total_rewards }}
        />
      </li>
      <li className={styles.statisticsWidget__item}>
        <NewStatisticsCardUi
          item={{
            title: "Received coins from referrals",
            count: user.received_coins_from_referrals,
          }}
        />
      </li>
      <li className={styles.statisticsWidget__item}>
        <NewStatisticsCardUi
          item={{
            title: "Friends are invited",
            count: user.friends_are_inv,
          }}
        />
      </li>
      <li className={styles.statisticsWidget__item}>
        <NewStatisticsCardUi
          item={{
            title: "Total profit of friends",
            count: user.total_friends_earnings,
          }}
          isLast={true}
        />
      </li>
    </ul>
  );
}
