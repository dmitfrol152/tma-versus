import styles from "./NewOfficeModalInventar.module.scss";
import type { NewOfficeModalInventarProps } from "./types";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import IconClose from "@shared/assets/images/svg/icon-close.svg?react";
import { NewTraderWidget } from "@/widgets/NewTraderWidget";

export function NewOfficeModalInventar({
  setIsOpenModal,
  listOfMyTraders,
  activeTeam,
  handleClickAddCoinTrader,
}: NewOfficeModalInventarProps) {
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const filtredListOfMyTrader = listOfMyTraders.filter(
    (item) => !item.isActive,
  );

  return (
    <div className="container">
      <div className={styles.newOfficeModalInventar}>
        <div className={styles.newOfficeModalInventar__wrapper}>
          <p className={styles.newOfficeModalInventar__title}>
            Select a trader
          </p>
          {!filtredListOfMyTrader.length && (
            <div className={styles.newOfficeModalInventar__empty}>
              <span className={styles.newOfficeModalInventar__emptyText}>
                Empty
              </span>
            </div>
          )}
          {filtredListOfMyTrader.length > 0 && (
            <ul className={styles.newOfficeModalInventar__list}>
              {filtredListOfMyTrader.map((trader) => {
                return (
                  <li
                    className={styles.newOfficeModalInventar__item}
                    key={trader.trader.id}
                  >
                    <NewTraderWidget
                      trader={trader}
                      buttonName="Add"
                      activeTeam={activeTeam}
                      isButton={true}
                      handleClickButton={handleClickAddCoinTrader}
                    />
                  </li>
                );
              })}
            </ul>
          )}
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            className={styles.newOfficeModalInventar__close}
            onClickButton={() => handleCloseModal()}
          >
            <IconClose className={styles.newOfficeModalInventar__closeIcon} />
          </NewButtonUi>
        </div>
      </div>
    </div>
  );
}
