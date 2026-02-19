import styles from "./NewStoreLayout.module.scss";
import IconQuestionOffice from "@shared/assets/images/svg/icon-question-office.svg?react";
import type { NewStoreLayoutProps } from "./types";
import clsx from "clsx";
import { NewButtonsChoiceTradersOffices } from "../NewButtonsChoiceTradersOffices";
import { NewTradersLayout } from "../NewTradersLayout";
import { NewOfficesLayout } from "../NewOfficesLayout";

export function NewStoreLayout({
  activeTeam,
  isButtonActiveTradersOffices,
  setIsButtonActiveTradersOffices,
  handleOpenModal,
  isOpenModal,
  setIsOpenModal,
  queryTraders,
  queryOffices,
  selectedTrader,
  currentLevel,
  handleClickBuyOffice,
  setStepIndex,
  isStartTour,
  stepIndex,
}: NewStoreLayoutProps) {
  const classNameIcon =
    activeTeam === "1"
      ? styles["storeLayout__titleIcon--1"]
      : activeTeam === "2"
        ? styles["storeLayout__titleIcon--2"]
        : styles["storeLayout__titleIcon--default"];

  const isTradersStep = isStartTour && stepIndex === 0;
  const isOfficesStep = isStartTour && stepIndex === 1;

  return (
    <div className={styles.storeLayout}>
      {isStartTour && <div className={styles.storeLayout__tourOverlay} />}

      <div className={styles.storeLayout__title}>
        <h2 className={styles.storeLayout__titleText}>Store</h2>
        <IconQuestionOffice
          className={clsx(styles.storeLayout__titleIcon, classNameIcon)}
        />
      </div>
      <NewButtonsChoiceTradersOffices
        activeTeam={activeTeam}
        setIsButtonActiveTradersOffices={setIsButtonActiveTradersOffices}
        activeButton={isButtonActiveTradersOffices}
        setStepIndex={setStepIndex}
        isStartTour={isStartTour}
        stepIndex={stepIndex}
      />
      {isButtonActiveTradersOffices === "traders" && (
        <NewTradersLayout
          activeTeam={activeTeam}
          handleOpenModal={handleOpenModal}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          queryTraders={queryTraders}
          selectedTrader={selectedTrader}
          isTradersStep={isTradersStep}
        />
      )}
      {isButtonActiveTradersOffices === "offices" && (
        <NewOfficesLayout
          currentLevel={currentLevel}
          queryOffices={queryOffices}
          handleClickBuyOffice={handleClickBuyOffice}
          isOfficesStep={isOfficesStep}
        />
      )}
      <div className={styles.storeLayout__shadow}></div>
      <div
        className={clsx(
          styles.storeLayout__tourTraders,
          isTradersStep && styles.storeLayout__tourOnboarding,
        )}
        data-tour="storePageTraders"
      ></div>
      <div
        className={clsx(
          styles.storeLayout__tourOffices,
          isOfficesStep && styles.storeLayout__tourOnboarding,
        )}
        data-tour="storePageOffices"
      ></div>
    </div>
  );
}
