import styles from "./CommunityLayout.module.scss";
import IconQuestionOffice from "@shared/assets/images/svg/icon-question-office.svg?react";
import clsx from "clsx";
import type { CommunityLayoutProps } from "./types";
import { Link } from "react-router";
import { NewReferal } from "../NewReferal";
import { NewGeneral } from "../NewGeneral";
import { NewButtonsChoiceCommunity } from "../NewButtonsChoiceCommunity";
import { NewStatisticCommunityLayout } from "../NewStatisticCommunityLayout";
import { NewStructureCommunityLayout } from "../NewStructureCommunityLayout";
// import { PoolCommunityLayout } from "../PoolCommunityLayout";
import { NewModalStatusCommunity } from "../NewModalStatusCommunity";

export function CommunityLayout({
  activeTeam,
  isActiveReferalLink,
  // setIsActiveReferalLink,
  inputRef,
  handleCopyReferal,
  copyStatus,
  isButtonActiveCommunity,
  setIsButtonActiveCommunity,
  isStartTour,
  stepIndex,
  isOpenModalStatus,
  dataCommunityPage,
}: CommunityLayoutProps) {
  const classNameIcon =
    activeTeam === "1"
      ? styles["communityLayout__titleIcon--1"]
      : activeTeam === "2"
        ? styles["communityLayout__titleIcon--2"]
        : styles["communityLayout__titleIcon--default"];

  const classNameLink =
    activeTeam === "1"
      ? styles["communityLayout__onboard--1"]
      : activeTeam === "2"
        ? styles["communityLayout__onboard--2"]
        : styles["communityLayout__onboard--default"];

  const isRefStep = isStartTour && stepIndex === 0;
  const isGeneralStep = isStartTour && stepIndex === 1;
  const isButtonsStep = isStartTour && stepIndex === 2;

  return (
    <div className={styles.communityLayout}>
      {isStartTour && <div className={styles.communityLayout__tourOverlay} />}

      <div className={styles.communityLayout__top}>
        <div className={styles.communityLayout__topTitle}>
          <h2 className={styles.communityLayout__topTitleText}>Community</h2>
          <IconQuestionOffice
            className={clsx(
              styles.communityLayout__topTitleIcon,
              classNameIcon,
            )}
          />
        </div>
        <Link
          to={"/"}
          state={{ onboarding: "start" }}
          className={clsx(styles.communityLayout__onboard, classNameLink)}
        >
          How it works
        </Link>
      </div>
      <NewReferal
        activeTeam={activeTeam}
        isActiveReferalLink={isActiveReferalLink}
        // setIsActiveReferalLink={setIsActiveReferalLink}
        inputRef={inputRef}
        handleCopyReferal={handleCopyReferal}
        isRefStep={isRefStep}
      />
      <NewGeneral
        activeTeam={activeTeam}
        dataCommunityPage={dataCommunityPage}
        isGeneralStep={isGeneralStep}
      />
      <div className={styles.communityLayout__buttons}>
        <div
          className={
            isButtonsStep ? styles.communityLayout__tourOnboarding : ""
          }
        >
          <NewButtonsChoiceCommunity
            activeTeam={activeTeam}
            activeButton={isButtonActiveCommunity}
            setIsButtonActiveCommunity={setIsButtonActiveCommunity}
          />
        </div>
        <div
          className={clsx(styles.communityLayout__tour)}
          data-tour="communityPageButtons"
        ></div>
      </div>
      {isButtonActiveCommunity === "statistic" && (
        <NewStatisticCommunityLayout
          isButtonsStep={isButtonsStep}
          dataCommunityPage={dataCommunityPage}
        />
      )}
      {isButtonActiveCommunity === "structure" && (
        <NewStructureCommunityLayout
          activeTeam={activeTeam}
          dataCommunityPage={dataCommunityPage}
        />
      )}
      {isButtonActiveCommunity === "pool" && (
        // <PoolCommunityLayout activeTeam={activeTeam} />
        <div className={styles.communityLayout__empty}>
          <span className={styles.communityLayout__emptyText}>Empty</span>
        </div>
      )}
      <div className={styles.communityLayout__shadow}></div>
      {isOpenModalStatus && <NewModalStatusCommunity copyStatus={copyStatus} />}
    </div>
  );
}
