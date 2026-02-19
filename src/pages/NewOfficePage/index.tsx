import { useSelector } from "react-redux";
import type {
  NewInfoPersonNameProps,
  NewSelectorPrizeProps,
  NewSelectorProps,
  NewuserBalanseStoreNameProps,
} from "@/shared/lib/store/types";
import { useNewActiveButtonsManager } from "./hooks/useNewActiveButtonsManager";
import { NewOfficeLayoutPage } from "./ui/NewOfficeLayoutPage";
import { useNewFetchOffice } from "@/shared/api/newFetchOffice/model/hooks/useNewFetchOffice";
import { useNewPostClaimBank } from "@/shared/api/newPostClaimBank/model/hooks/useNewPostClaimBank";
import { queryClient } from "@/shared/lib/store/queryClient";
import { useNewModalStatus } from "./ui/NewDayTradersBlock/model/hooks/useNewModalStatus";
import { useNewScrollActive } from "@/shared/lib/hooks/useNewScrollActive";
import { useNewPostAddOrChangeTrader } from "@/shared/api/newPostAddOrChangeTrader/model/hooks/useNewPostAddOrChangeTrader";
import type { NewUserTradersProps } from "@/shared/lib/types/NewUserTraders/model/types";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./index.module.scss";
import { useLocation, useNavigate } from "react-router";
import { useCallback, useMemo, useState } from "react";
import { Joyride, type CallBackProps } from "react-joyride";
import { NewTooltipOnboardingUi } from "@/shared/ui/NewTooltipOnboardingUi";
import { OFFICE_TOUR_STEPS } from "./lib/constants/OFFICE_TOUR_STEPS";
import { TASKS_TOUR_STEPS } from "./lib/constants/TASKS_TOUR_STEPS";

export default function NewOfficePage() {
  const [offsetOnboarding] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const rootStyles = window.getComputedStyle(document.documentElement);
      const safePadding = rootStyles
        .getPropertyValue("--app-padding-top")
        .trim();
      const numberPadding = parseInt(safePadding);
      return !isNaN(numberPadding) ? numberPadding + 20 : 20;
    }
    return 20;
  });

  const location = useLocation();
  const navigate = useNavigate();

  const [isStartTour, setIsStartTour] = useState<boolean>(
    !!(location.state?.startOfficeTour || location.state?.startTasksTour) ||
      false,
  );
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [currentTourType, setCurrentTourType] = useState(
    location.state?.startOfficeTour
      ? "office"
      : location.state?.startTasksTour
        ? "tasks"
        : "none",
  );

  const {
    isButtonActiveOfficeTasks,
    setIsButtonActiveOfficeTasks,
    isButtonActiveDayTraders,
    setIsButtonActiveDayTraders,
    isButtonActiveTasks,
    setIsButtonActiveTasks,
  } = useNewActiveButtonsManager();

  const officeQuery = useNewFetchOffice();

  const claimBank = useNewPostClaimBank();
  const mutationAddorChangeTrader = useNewPostAddOrChangeTrader();

  const { isOpenModal, setIsOpenModal } = useNewModalStatus();
  useNewScrollActive({ isOpenModal });

  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );
  const userBalanse = useSelector(
    (state: NewuserBalanseStoreNameProps) => state.userBalanseName.userBalanse,
  );

  const user = useSelector(
    (state: NewInfoPersonNameProps) => state.infoPersonName.infoPerson,
  );

  const prize = useSelector(
    (state: NewSelectorPrizeProps) => state.prizeName.prizeValue,
  );

  const nextTourType = location.state?.startOfficeTour
    ? "office"
    : location.state?.startTasksTour
      ? "tasks"
      : "none";

  if (nextTourType !== currentTourType) {
    setCurrentTourType(nextTourType);
    setIsStartTour(nextTourType !== "none");
    setStepIndex(0);
  }

  const actualListTour = location.state?.startOfficeTour
    ? OFFICE_TOUR_STEPS
    : TASKS_TOUR_STEPS;

  const steps = useMemo(() => {
    return actualListTour.map((item) => ({
      ...item,
      data: { setIsStartTour },
    }));
  }, [actualListTour]);

  const handleJoyrideCallback = useCallback(
    (data: CallBackProps) => {
      const { index, status, type } = data;

      if (type === "tour:start") {
        document.body.style.overflow = "hidden";
      }

      if (type === "step:after" || type === "step:before") {
        setStepIndex(index);
      }

      if (status === "finished") {
        document.body.style.overflow = "";
        setIsStartTour(false);

        if (location.state?.startOfficeTour) {
          setStepIndex(0);
          setIsButtonActiveOfficeTasks("tasks");
          navigate("/office", {
            state: { startTasksTour: true },
          });
        } else if (location.state?.startTasksTour) {
          setStepIndex(0);
          navigate("/store", {
            state: { startStoreTour: true },
          });
        }
        return;
      }

      if (status === "skipped" || type === "tour:end") {
        document.body.style.overflow = "";
        setIsStartTour(false);
        navigate("/office", { replace: true, state: {} });
        return;
      }
    },
    [
      location.state?.startOfficeTour,
      location.state?.startTasksTour,
      navigate,
      setIsButtonActiveOfficeTasks,
    ],
  );

  const handleClaimBank = () => {
    claimBank.mutate(undefined, {
      onSuccess: (data) => {
        console.log("Success:", data);
        queryClient.invalidateQueries({ queryKey: ["user"] });
      },
      onError: (error) => {
        console.error(error.message);
      },
    });
  };

  const handleOpenModalInventar = () => {
    setIsOpenModal(true);
  };

  const handleClickAddCoinTrader = (trader?: NewUserTradersProps) => {
    if (!trader) return;

    mutationAddorChangeTrader.mutate(
      { currentId: trader.id },
      {
        onSuccess: (data) => {
          console.log("Success:", data);
        },
        onError: (error) => {
          console.error(error.message);
        },
      },
    );
  };

  if (officeQuery.isError) {
    return (
      <div className={styles.office}>
        <div className={styles.office__error}>
          <span className={styles.office__text}>
            Error fetch data. Please try again.
          </span>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            color="blue"
            onClickButton={() => officeQuery.refetch()}
          >
            Click here
          </NewButtonUi>
        </div>
      </div>
    );
  }

  if (officeQuery.isLoading) {
    return (
      <div className={styles.home__loading}>
        <span className={styles.home__text}>Loading..</span>
      </div>
    );
  }

  if (officeQuery.data && officeQuery.isSuccess) {
    return (
      <>
        <Joyride
          key={nextTourType}
          steps={steps}
          run={isStartTour}
          continuous
          showSkipButton
          callback={handleJoyrideCallback}
          tooltipComponent={NewTooltipOnboardingUi}
          styles={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          }}
          // scrollDuration={0}
          floaterProps={{
            styles: {
              floaterOpening: {
                transition: "none",
              },
            },
          }}
          disableOverlayClose={true}
          spotlightClicks={true}
          disableOverlay={true}
          scrollOffset={offsetOnboarding}
        />
        <NewOfficeLayoutPage
          activeTeam={activeTeam}
          isButtonActiveOfficeTasks={isButtonActiveOfficeTasks}
          setIsButtonActiveOfficeTasks={setIsButtonActiveOfficeTasks}
          isButtonActiveDayTraders={isButtonActiveDayTraders}
          setIsButtonActiveDayTraders={setIsButtonActiveDayTraders}
          isButtonActiveTasks={isButtonActiveTasks}
          setIsButtonActiveTasks={setIsButtonActiveTasks}
          userBalanse={userBalanse}
          officeQuery={officeQuery.data}
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
      </>
    );
  }

  return (
    <div className={styles.home}>
      <span className={styles.home__text}>Something went wrong..</span>
    </div>
  );
}
