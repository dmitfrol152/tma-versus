import styles from "./CommunityLayout.module.scss";
import IconQuestionOffice from "@shared/assets/images/svg/icon-question-office.svg?react";
import clsx from "clsx";
import type { CommunityLayoutProps } from "./types";
import { Link } from "react-router";
import { Referal } from "../Referal";
import { General } from "../General";
import { NewButtonsChoiceCommunity } from "../NewButtonsChoiceCommunity";
import { StatisticCommunityLayout } from "../StatisticCommunityLayout";
import { StructureCommunityLayout } from "../StructureCommunityLayout";
import { PoolCommunityLayout } from "../PoolCommunityLayout";

export function CommunityLayout({
  activeTeam,
  isActiveReferalLink,
  // setIsActiveReferalLink,
  inputRef,
  handleCopyReferal,
  copyStatus,
  isButtonActiveCommunity,
  setIsButtonActiveCommunity,
  GENERAL_ARRAY_COMMUNITY,
  isStartTour,
  stepIndex,
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
          className={clsx(styles.communityLayout__onboard, classNameLink)}
        >
          How it works
        </Link>
      </div>
      <Referal
        activeTeam={activeTeam}
        isActiveReferalLink={isActiveReferalLink}
        // setIsActiveReferalLink={setIsActiveReferalLink}
        inputRef={inputRef}
        handleCopyReferal={handleCopyReferal}
        copyStatus={copyStatus}
        isRefStep={isRefStep}
      />
      <General
        activeTeam={activeTeam}
        GENERAL_ARRAY_COMMUNITY={GENERAL_ARRAY_COMMUNITY}
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
        <StatisticCommunityLayout isButtonsStep={isButtonsStep} />
      )}
      {isButtonActiveCommunity === "structure" && (
        <StructureCommunityLayout activeTeam={activeTeam} />
      )}
      {isButtonActiveCommunity === "pool" && (
        <PoolCommunityLayout activeTeam={activeTeam} />
      )}
      <div className={styles.communityLayout__shadow}></div>
    </div>
  );
}
