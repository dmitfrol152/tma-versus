import styles from "./NewDayTradersItemBackground.module.scss";
import ImageBackgroundGreen from "@shared/assets/images/png/png-background-green.png";
import ImageBackgroundPink from "@shared/assets/images/png/png-background-pink.png";

export function NewDayTradersItemBackground({
  activeTeam,
}: {
  activeTeam: "1" | "2" | null;
}) {
  if (activeTeam === "1") {
    return (
      <div className={styles.dayTradersItemBackground__green}>
        <img src={ImageBackgroundGreen} alt="Background" />
      </div>
    );
  }

  if (activeTeam === "2") {
    return (
      <div className={styles.dayTradersItemBackground__pink}>
        <img src={ImageBackgroundPink} alt="Background" />
      </div>
    );
  }

  return (
    <div className={styles.dayTradersItemBackground__default}>
      <img src={ImageBackgroundPink} alt="Background" />
    </div>
  );
}
