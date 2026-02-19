import { NewUsersRatingCardUi } from "@/shared/ui/NewUsersRatingCardUi/NewUsersRatingCardUi";
import type { NewTopLeaderboardProps } from "./types";
import styles from "./NewTopLeaderboard.module.scss";

export function NewTopLeaderboard({ leaderboard }: NewTopLeaderboardProps) {
  return (
    <div className={styles.topLeaderboard}>
      <h4 className={styles.topLeaderboard__title}>Top 10</h4>
      {!leaderboard.length && (
        <div className={styles.topLeaderboard__empty}>
          <span className={styles.topLeaderboard__emptyText}>Empty</span>
        </div>
      )}
      <ul className={styles.topLeaderboard__list}>
        {leaderboard.map((item) => {
          return (
            <li key={item.id} className={styles.topLeaderboard__item}>
              <NewUsersRatingCardUi position={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
