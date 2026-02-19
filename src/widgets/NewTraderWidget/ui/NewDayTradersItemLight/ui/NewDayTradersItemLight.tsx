import clsx from "clsx";
import styles from "./NewDayTradersItemLight.module.scss";

export function NewDayTradersItemLight({
  activeTeam,
}: {
  activeTeam: "1" | "2" | null;
}) {
  if (activeTeam === "1") {
    return (
      <div
        className={clsx(
          styles.dayTradersItemLight,
          styles.dayTradersItemLight__green,
        )}
      ></div>
    );
  }
  if (activeTeam === "2") {
    return (
      <div
        className={clsx(
          styles.dayTradersItemLight,
          styles.dayTradersItemLight__pink,
        )}
      ></div>
    );
  }
  return null;
}
