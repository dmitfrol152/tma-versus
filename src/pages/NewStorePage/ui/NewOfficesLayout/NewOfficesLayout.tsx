import styles from "./NewOfficesLayout.module.scss";
import { NewBasicBlock } from "@/widgets/NewBasicBlock";
import type { NewOfficesLayoutProps } from "./types";

export function NewOfficesLayout({
  currentLevel,
  queryOffices,
  handleClickBuyOffice,
  isOfficesStep,
}: NewOfficesLayoutProps) {
  if (!queryOffices.length)
    return (
      <div className={styles.officesLayout__empty}>
        <span className={styles.officesLayout__emptyText}>Empty</span>
      </div>
    );

  return (
    <ul className={styles.officesLayout}>
      {queryOffices.slice(0, 3).map((level, index) => {
        return (
          <li
            key={level.id}
            className={
              isOfficesStep && (index === 0 || index === 1)
                ? styles.isOfficesStep
                : ""
            }
          >
            <NewBasicBlock
              level={level}
              isButton
              activeTeamTariff={currentLevel}
              handleClickButton={handleClickBuyOffice}
            />
          </li>
        );
      })}
    </ul>
  );
}
