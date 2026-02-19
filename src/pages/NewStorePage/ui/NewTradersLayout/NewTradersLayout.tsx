import { NewTraderWidget } from "@/widgets/NewTraderWidget";
import type { NewTradersLayoutProps } from "./types";
import styles from "./NewTradersLayout.module.scss";
import { NewModalUi } from "@/shared/ui/NewModalUi";
import { NewModalStoreTrader } from "@/widgets/NewModalStoreTrader";

export function NewTradersLayout({
  activeTeam,
  handleOpenModal,
  isOpenModal,
  setIsOpenModal,
  queryTraders,
  selectedTrader,
  isTradersStep,
}: NewTradersLayoutProps) {
  if (!queryTraders.length) {
    return (
      <div className={styles.tradersLayout__empty}>
        <span className={styles.tradersLayout__emptyText}>Empty</span>
      </div>
    );
  }

  return (
    <>
      <ul className={styles.tradersLayout}>
        {queryTraders.map((trader, index) => {
          return (
            <li
              key={trader.id}
              className={
                isTradersStep && (index === 0 || index === 1)
                  ? styles.isTradersStep
                  : ""
              }
            >
              <NewTraderWidget
                activeTeam={activeTeam}
                trader={{ trader: trader, total: 0, id: 0, isActive: false }}
                isButton={true}
                handleClickButton={handleOpenModal}
                buttonName={`${trader.price} Coins`}
              />
            </li>
          );
        })}
      </ul>
      <NewModalUi isOpenModal={!!isOpenModal}>
        {
          <NewModalStoreTrader
            setIsOpenModal={setIsOpenModal}
            selectedTrader={selectedTrader}
          />
        }
      </NewModalUi>
    </>
  );
}
