import styles from "./NewClansBackground.module.scss";
import ImageBackgroundGreen from "@shared/assets/images/png/png-background-green.png";
import ImageBackgroundPink from "@shared/assets/images/png/png-background-pink.png";
import clsx from "clsx";

export function NewClansBackground({
  clanName,
  isStartTour,
}: {
  clanName: string;
  isStartTour: boolean;
}) {
  if (clanName === "1") {
    return (
      <div
        className={clsx(
          styles.clansBackground__green,
          isStartTour && styles.isStartTour,
        )}
      >
        <img src={ImageBackgroundGreen} alt="Background" />
      </div>
    );
  }
  if (clanName === "2") {
    return (
      <div
        className={clsx(
          styles.clansBackground__pink,
          isStartTour && styles.isStartTour,
        )}
      >
        <img src={ImageBackgroundPink} alt="Background" />
      </div>
    );
  }
  return null;
}
