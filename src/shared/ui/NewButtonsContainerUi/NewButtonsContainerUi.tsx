import clsx from "clsx";
import styles from "./NewButtonsContainerUi.module.scss";
import type { NewButtonsContainerUiProps } from "./types";
import React from "react";

export function NewButtonsContainerUi({
  children,
  className = "",
}: NewButtonsContainerUiProps) {
  const newClassName = {
    ten: `${styles.paddingTen}`,
    fourEight: `${styles.paddingFourEight}`,
  }[className];

  return (
    <ul className={clsx(styles.buttonsContainerUi, newClassName)}>
      {React.Children.map(children, (child, index) => (
        <li key={index} className={styles.buttonsContainerUi__item}>
          {child}
        </li>
      ))}
    </ul>
  );
}
