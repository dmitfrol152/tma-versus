import type { NewHomeLayoutDataProps } from "./model/types";
import styles from "./NewHomeLayout.module.scss";
import { NewSeason } from "@/pages/NewHomePage/ui/NewSeason";
import { NewMarqueeInfo } from "../NewMarqueeInfo";
import { NewMarqueeUi } from "@/shared/ui/NewMarqueeUi";
import { NewMarqueeText } from "../NewMarqueeText";
import { NewHomeLayoutBackground } from "../NewHomeLayoutBackground";
import { NewHomeLayoutLight } from "../NewHomeLayoutLight";
import { NewClans } from "@/widgets/NewClans";
import { NewModalUi } from "@/shared/ui/NewModalUi";
import { NewModalConfirmPay } from "../NewModalConfirmPay";
import { NewModalStatus } from "../NewModalStatus";

export function NewHomeLayout({
  season,
  activeTeam,
  isOpenModalConfirm,
  isOpenModalStatus,
  isOpenModalStatusText,
  orderedClans,
  handleClickTeamOne,
  handleClickTeamTwo,
  handleClickChangeTeamConfirm,
  handleCloseModal,
  handleClickChangeTeam,
  isLoadingPayChangeTeam,
  isStartTour,
  stepIndex,
  setIsStartTour,
  countForChangeTeam,
}: NewHomeLayoutDataProps) {
  const isSeasonStep = isStartTour && stepIndex === 0;
  const isClansStep = isStartTour && stepIndex === 1;

  const isActiveOverlay = isClansStep || isSeasonStep;

  return (
    <div className={styles.homeLayout}>
      {isActiveOverlay && <div className={styles.homeLayout__tourOverlay} />}

      <div className={isSeasonStep ? styles.homeLayout__tourOnboarding : ""}>
        <NewSeason
          data={season}
          // isStartTour={isStartTour}
          // stepIndex={stepIndex}
        />
      </div>
      <div className={isClansStep ? styles.homeLayout__tourOnboarding : ""}>
        <NewClans
          data={season}
          activeTeam={activeTeam}
          orderedClans={orderedClans}
          handleClickTeamOne={handleClickTeamOne}
          handleClickTeamTwo={handleClickTeamTwo}
          handleClickChangeTeamConfirm={handleClickChangeTeamConfirm}
          isStartTour={isStartTour}
          setIsStartTour={setIsStartTour}
        />
      </div>
      <NewMarqueeInfo>
        <NewMarqueeUi>
          <NewMarqueeText />
        </NewMarqueeUi>
      </NewMarqueeInfo>
      <NewHomeLayoutLight activeTeam={activeTeam} />
      <NewHomeLayoutBackground activeTeam={activeTeam} />
      <NewModalUi isOpenModal={!!isOpenModalConfirm}>
        <NewModalConfirmPay
          handleCloseModal={handleCloseModal}
          orderedClans={orderedClans}
          activeTeam={activeTeam}
          handleClickChangeTeam={handleClickChangeTeam}
          countForChangeTeam={countForChangeTeam}
        />
      </NewModalUi>
      {isOpenModalStatus && (
        <NewModalStatus
          orderedClans={orderedClans}
          activeTeam={activeTeam}
          payStatus={isOpenModalStatusText}
        />
      )}
      <NewModalUi isOpenModal={!!isLoadingPayChangeTeam}>
        <span className={styles.homeLayout__text}>Loading..</span>
      </NewModalUi>
    </div>
  );
}
