// TODO: delete - import { LAYER_ARRAY_COMMUNITY } from "@/shared/lib/constants/LAYER_ARRAY_COMMUNITY";
import styles from "./NewLayer.module.scss";
import { NewBlockInfoUi } from "@/shared/ui/NewBlockInfoUi/NewBlockInfoUi";
import clsx from "clsx";
import type { newFetchCommunityProps } from "@/shared/api/newFetchCommunity/model/types";

export function NewLayer({
  isButtonsStep,
  dataCommunityPage,
}: {
  isButtonsStep: boolean;
  dataCommunityPage: newFetchCommunityProps;
}) {
  const layers = [];

  for (let i = 0; i < 5; i++) {
    const key = `Layer_${i + 1}` as keyof typeof dataCommunityPage.Counts;
    const percent =
      i === 0 ? "10%" : i === 1 ? "8%" : i === 2 ? "6%" : i === 3 ? "4%" : "2%";
    const count = dataCommunityPage.Counts[key];
    const volume = dataCommunityPage.total_volume[key];
    const earned = dataCommunityPage.total_earned[key];

    layers.push({
      id: i + 1,
      percent,
      items: [
        { data: count, text: "People", icon: false },
        { data: volume, text: "Volume", icon: true },
        { data: earned, text: "Earned", icon: true },
      ],
    });
  }

  return (
    <ul className={styles.layer}>
      {layers.map((item, index) => {
        return (
          <li
            className={clsx(
              styles.layer__item,
              isButtonsStep && index === 0 && styles.layer__tourOnboarding,
            )}
            key={item.id}
          >
            <div className={styles.layer__itemTop}>
              <span className={styles.layer__itemTopLayer}>
                {`Layer ${item.id}`}
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
