import type { NewDayTradersBlockProps } from "./model/types";
import styles from "./NewDayTradersBlock.module.scss";
import clsx from "clsx";
import { NewButtonsChoiceDayTraders } from "./ui/NewButtonsChoiceDayTraders";
import { NewDayTradersList } from "./ui/NewDayTradersList";

export function NewDayTradersBlock({
  activeTeam,
  activeButton,
  setIsButtonActiveDayTraders,
  traders,
  handleOpenModalInventar,
}: NewDayTradersBlockProps) {
  const activeClassName =
    activeTeam === "1"
      ? styles["dayTradersBlock--1"]
      : activeTeam === "2"
        ? styles["dayTradersBlock--2"]
        : styles["dayTradersBlock--default"];

  const showList = activeButton === "all" && activeTeam;

  return (
    <div className={clsx(styles.dayTradersBlock, activeClassName)}>
      <div className={styles.dayTradersBlock__title}>
        <span className={styles.dayTradersBlock__titleTranslator}></span>
        <h3 className={styles.dayTradersBlock__titleText}>Day traders</h3>
      </div>
      <NewButtonsChoiceDayTraders
        setIsButtonActiveDayTraders={setIsButtonActiveDayTraders}
        activeTeam={activeTeam}
        activeButton={activeButton}
      />
      {showList ? (
        <NewDayTradersList
          traders={traders}
          activeTeam={activeTeam}
          handleOpenModalInventar={handleOpenModalInventar}
        />
      ) : (
        <div className={styles.dayTradersBlock__empty}>
          <span className={styles.dayTradersBlock__emptyText}>Empty</span>
        </div>
      )}
    </div>
  );
}
