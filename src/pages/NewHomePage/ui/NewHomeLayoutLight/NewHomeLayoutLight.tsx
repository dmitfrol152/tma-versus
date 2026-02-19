import styles from "./NewHomeLayoutLight.module.scss";
import clsx from "clsx";

export function NewHomeLayoutLight({
  activeTeam,
}: {
  activeTeam: "1" | "2" | null;
}) {
  const activeClassName =
    activeTeam === "1"
      ? styles["homeLayoutLight--1"]
      : activeTeam === "2"
        ? styles["homeLayoutLight--2"]
        : styles["homeLayoutLight--default"];

  return <div className={clsx(styles.homeLayoutLight, activeClassName)}></div>;
}
