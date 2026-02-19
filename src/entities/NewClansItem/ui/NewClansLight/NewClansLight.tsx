import clsx from "clsx";
import styles from "./NewClansLight.module.scss";
import type { ActiveClanTypeProps } from "@/shared/lib/types/activeClan";

export function NewClansLight({
  clanName,
  isActive,
  activeClan,
}: {
  clanName: string;
  isActive: boolean;
  activeClan: ActiveClanTypeProps;
}) {
  if (clanName === "1") {
    return (
      <div
        className={clsx(
          styles.clansLight,
          !isActive && activeClan !== null
            ? styles.clansLight__white
            : styles.clansLight__green,
        )}
      ></div>
    );
  }
  if (clanName === "2") {
    return (
      <div
        className={clsx(
          styles.clansLight,
          !isActive && activeClan !== null
            ? styles.clansLight__white
            : styles.clansLight__pink,
        )}
      ></div>
    );
  }
  return null;
}
