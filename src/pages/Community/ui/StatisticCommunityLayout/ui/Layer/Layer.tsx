import { LAYER_ARRAY_COMMUNITY } from "@/shared/lib/constants/LAYER_ARRAY_COMMUNITY";
import styles from "./Layer.module.scss";
import { NewBlockInfoUi } from "@/shared/ui/NewBlockInfoUi/NewBlockInfoUi";
import clsx from "clsx";

export function Layer({ isButtonsStep }: { isButtonsStep: boolean }) {
  return (
    <ul className={styles.layer}>
      {LAYER_ARRAY_COMMUNITY.map((item, index) => {
        return (
          <li
            className={clsx(
              styles.layer__item,
              isButtonsStep && index === 0 && styles.layer__tourOnboarding,
            )}
            key={index}
          >
            <div className={styles.layer__itemTop}>
              <span className={styles.layer__itemTopLayer}>
                Layer {index + 1}
              </span>
              <span className={styles.layer__itemTopPercent}>
                {item.percent}
              </span>
            </div>
            <ul className={styles.layer__itemList}>
              {item.items.map((itemInner, index) => {
                return (
                  <li key={index}>
                    <NewBlockInfoUi
                      data={itemInner.data}
                      text={itemInner.text}
                      icon={itemInner.icon}
                      isActiveData={false}
                      sign={false}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
