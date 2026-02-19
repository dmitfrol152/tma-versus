import type { NewInfoPersonProps } from "@/shared/lib/store/types";
import styles from "./NewHeaderName.module.scss";
import type { NewUserBalanceProps } from "@/shared/lib/types/NewUserBalance/model/types";

export function NewHeaderName({
  activeTeam,
  clan,
  user,
}: {
  activeTeam: "1" | "2" | null;
  clan: NewUserBalanceProps | null;
  user: NewInfoPersonProps;
}) {
  if (!user) return null;

  return (
    <div className={styles.headerName}>
      <span className={styles.headerName__name}>@{user.nickname}</span>
      {activeTeam !== null && clan && clan.team ? (
        <div className={styles.headerName__team}>
          <span className={styles.headerName__teamBulls}>{clan.team.name}</span>
          <span className={styles.headerName__teamTextGreen}>Team</span>
          <span className={styles.headerName__teamSlash}>//</span>
        </div>
      ) : (
        <div className={styles.headerName__team}>
          <span className={styles.headerName__teamText}>Team</span>
          <span className={styles.headerName__teamSlash}>//</span>
        </div>
      )}
    </div>
  );
}
