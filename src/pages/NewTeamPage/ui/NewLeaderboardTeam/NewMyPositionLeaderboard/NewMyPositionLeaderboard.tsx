import { NewUsersRatingCardUi } from "@/shared/ui/NewUsersRatingCardUi/NewUsersRatingCardUi";
import type { NewMyPositionLeaderboardProps } from "./types";
import styles from "./NewMyPositionLeaderboard.module.scss";

export function NewMyPositionLeaderboard({
  myPosition,
}: NewMyPositionLeaderboardProps) {
  return (
    <div className={styles.myPositionLeaderboard}>
      <h4 className={styles.myPositionLeaderboard__title}>My position</h4>
      <NewUsersRatingCardUi position={myPosition} />
    </div>
  );
}
