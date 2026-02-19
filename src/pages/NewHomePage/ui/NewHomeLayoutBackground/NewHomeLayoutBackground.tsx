import styles from "./NewHomeLayoutBackground.module.scss";
import ImageBackgroundDefault from "@shared/assets/images/png/png-main-background-default.png";
import ImageBackground1 from "@shared/assets/images/png/png-main-background-1.png";
import ImageBackground2 from "@shared/assets/images/png/png-main-background-2.png";

export function NewHomeLayoutBackground({
  activeTeam,
}: {
  activeTeam: "1" | "2" | null;
}) {
  if (activeTeam === "1") {
    return (
      <div className={styles.homeLayoutBackground__1}>
        <img src={ImageBackground1} alt="Background" />
      </div>
    );
  }
  if (activeTeam === "2") {
    return (
      <div className={styles.homeLayoutBackground__2}>
        <img src={ImageBackground2} alt="Background" />
      </div>
    );
  }

  return (
    <div className={styles.homeLayoutBackground__default}>
      <img src={ImageBackgroundDefault} alt="Background" />
    </div>
  );
}
