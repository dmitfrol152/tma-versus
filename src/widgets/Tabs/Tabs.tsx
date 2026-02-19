import { LINKS } from "@/shared/lib/constants/LINKS";
import styles from "./Tabs.module.scss";
import IconTarget from "@shared/assets/images/svg/target-empty.svg?react";
import clsx from "clsx";
import { NavLink } from "react-router";

export function Tabs({ theme }: { theme: "blue" | "green" | "pink" }) {
  const themeClassName = styles[`tabs__link_${theme}`] ?? "";

  return (
    <ul className={styles.tabs}>
      {LINKS.map((link) => (
        <li className={styles.tabs__item} key={link.path}>
          <NavLink
            className={({ isActive }) =>
              clsx(styles.tabs__link, isActive && themeClassName)
            }
            to={link.path}
          >
            <IconTarget className={styles.tabs__icon} />
            <span className={styles.tabs__text}>{link.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
