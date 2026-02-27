import { NewStatsBlock } from "@/features/NewStatsBlock";
import type { NewOfficeLayoutProps } from "./types";
import { NewBasicBlock } from "@/widgets/NewBasicBlock";
import { NewDayTradersBlock } from "@/pages/NewOfficePage/ui/NewDayTradersBlock";
import { NewHystoryBlock } from "@/widgets/NewHystoryBlock";
import { NewInfoBlockYourSafe } from "@/widgets/NewInfoBlockYourSafe";
import styles from "./NewOfficeLayout.module.scss";
import { NewModalUi } from "@/shared/ui/NewModalUi";
import { NewOfficeModalInventar } from "../NewOfficeModalInventar";
import clsx from "clsx";

export function NewOfficeLayout({
  activeTeam,
  activeButton,
  setIsButtonActiveDayTraders,
  userBalanse,
  officeQuery,
  user,
  // prize,
  handleClaimBank,
  handleOpenModalInventar,
  isOpenModal,
  setIsOpenModal,
  handleClickAddCoinTrader,
  isStartTour,
  stepIndex,
}: NewOfficeLayoutProps) {
  const isBasicStep = isStartTour && stepIndex === 0;
  const isSafeStep = isStartTour && stepIndex === 1;
  const isTradersStep = isStartTour && stepIndex === 2;

  return (
    <>
      <div
        className={clsx(
          styles.officeLayout__tour,
          isBasicStep && styles.officeLayout__tourOnboarding,
        )}
        data-tour="officePageBasic"
      >
        <div className={styles.officeLayout__basic}>
          <NewBasicBlock level={userBalanse?.my_ofice.ofice} isButton={false} />
        </div>
        <NewStatsBlock
          officeQuery={officeQuery}
          activeTeam={activeTeam}
          user={user}
          userBalanse={userBalanse}
        />
      </div>
      <div
        className={clsx(
          styles.officeLayout,
          isSafeStep && styles.officeLayout__tourOnboarding,
        )}
        data-tour="officePageSafe"
      >
        <NewInfoBlockYourSafe
          buttonName="Claim"
          activeTeam={activeTeam}
          // prize={prize}
          // user={user}
          userBalanse={userBalanse}
          handleClaimBank={handleClaimBank}
        />
      </div>
      <div
        className={isTradersStep ? styles.officeLayout__tourOnboarding : ""}
        data-tour="officePageTraders"
      >
        <NewDayTradersBlock
          activeTeam={activeTeam}
          activeButton={activeButton}
          setIsButtonActiveDayTraders={setIsButtonActiveDayTraders}
          traders={userBalanse.my_ofice.traders}
          handleOpenModalInventar={handleOpenModalInventar}
        />
      </div>
      <NewHystoryBlock
        hystoryClaims={officeQuery.history_claims}
        activeTeam={activeTeam}
      />
      <NewModalUi isOpenModal={!!isOpenModal}>
        {
          <NewOfficeModalInventar
            setIsOpenModal={setIsOpenModal}
            listOfMyTraders={userBalanse.list_of_my_traders}
            activeTeam={activeTeam}
            handleClickAddCoinTrader={handleClickAddCoinTrader}
          />
        }
      </NewModalUi>
    </>
  );
}
