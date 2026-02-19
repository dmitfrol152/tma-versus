import clsx from "clsx";
import { NewButtonsChoiceOfficeTasks } from "../NewButtonsChoiceOfficeTasks";
import { NewOfficeLayout } from "../NewOfficeLayout/NewOfficeLayout";
import { TasksLayout } from "../TasksLayout";
import styles from "./NewOfficeLayoutPage.module.scss";
import type { NewOfficeLayoutPageProps } from "./types";
import IconQuestionOffice from "@shared/assets/images/svg/icon-question-office.svg?react";

export function NewOfficeLayoutPage({
  activeTeam,
  isButtonActiveOfficeTasks,
  setIsButtonActiveOfficeTasks,
  isButtonActiveDayTraders,
  setIsButtonActiveDayTraders,
  isButtonActiveTasks,
  setIsButtonActiveTasks,
  userBalanse,
  officeQuery,
  user,
  prize,
  handleClaimBank,
  handleOpenModalInventar,
  isOpenModal,
  setIsOpenModal,
  handleClickAddCoinTrader,
  isStartTour,
  stepIndex,
}: NewOfficeLayoutPageProps) {
  const classNameIcon =
    activeTeam === "1"
      ? styles["officeLayoutPage__titleIcon--1"]
      : activeTeam === "2"
        ? styles["officeLayoutPage__titleIcon--2"]
        : styles["officeLayoutPage__titleIcon--default"];

  return (
    <div className={styles.officeLayoutPage}>
      {isStartTour && <div className={styles.officeLayoutPage__tourOverlay} />}

      {isButtonActiveOfficeTasks === "office" && (
        <div className={styles.officeLayoutPage__title}>
          <h2 className={styles.officeLayoutPage__titleText}>My office</h2>
          <IconQuestionOffice
            className={clsx(styles.officeLayoutPage__titleIcon, classNameIcon)}
          />
        </div>
      )}
      <NewButtonsChoiceOfficeTasks
        setIsButtonActiveOfficeTasks={setIsButtonActiveOfficeTasks}
        activeTeam={activeTeam}
        activeButton={isButtonActiveOfficeTasks}
      />
      {isButtonActiveOfficeTasks === "office" && (
        <NewOfficeLayout
          activeTeam={activeTeam}
          activeButton={isButtonActiveDayTraders}
          setIsButtonActiveDayTraders={setIsButtonActiveDayTraders}
          userBalanse={userBalanse}
          officeQuery={officeQuery}
          user={user}
          prize={prize}
          handleClaimBank={handleClaimBank}
          handleOpenModalInventar={handleOpenModalInventar}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          handleClickAddCoinTrader={handleClickAddCoinTrader}
          isStartTour={isStartTour}
          stepIndex={stepIndex}
        />
      )}
      {isButtonActiveOfficeTasks === "tasks" && (
        <TasksLayout
          activeTeam={activeTeam}
          isButtonActiveTasks={isButtonActiveTasks}
          setIsButtonActiveTasks={setIsButtonActiveTasks}
          isStartTour={isStartTour}
          stepIndex={stepIndex}
        />
      )}
      <div className={styles.officeLayoutPage__shadow}></div>
    </div>
  );
}
