import styles from "./index.module.scss";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { NewHomeLayout } from "./ui/NewHomeLayout";
import { useFetchHomePage } from "@/shared/api/newFetchHomePage/model/hooks/useFetchHomePage";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNewToggleTeam } from "@/widgets/NewClans/model/hooks/useNewToggleTeam";
import { usePostOnboardingApplyTeam } from "@/shared/api/newPostOnboardingApplyTeam/model/hooks/usePostOnboardingApplyTeam";
import { usePostChangeTeam } from "@/shared/api/newPostChangeTeam/model/hooks/usePostChangeTeam";
import { useSelector } from "react-redux";
import type { NewSelectorProps } from "@/shared/lib/store/types";
import { useLocation, useNavigate } from "react-router";
import { Joyride, type CallBackProps } from "react-joyride";
import { NewTooltipOnboardingUi } from "@/shared/ui/NewTooltipOnboardingUi";
import { HOME_TOUR_STEPS } from "./lib/constants/HOME_TOUR_STEPS";

export default function NewHomePage() {
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
  const navigation = useNavigate();

  const [isStartTour, setIsStartTour] = useState<boolean>(
    location.state?.startHomeTour ?? false,
  );
  const [stepIndex, setStepIndex] = useState<number>(0);

  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState<boolean>(false);
  const [isOpenModalStatus, setIsOpenModalStatus] = useState<boolean>(false);
  const [isOpenModalStatusText, setIsOpenModalStatusText] =
    useState<string>("");
  const [isLoadingPayChangeTeam, setIsLoadingPayChangeTeam] =
    useState<boolean>(false);

  const {
    data: dataHomePage,
    isError: isErrorHomePage,
    isLoading: isLoadingHomePage,
    isSuccess: isSuccessHomePage,
    refetch: refetchHomePage,
  } = useFetchHomePage();

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );

  // Change team
  const { setActiveClan, orderedClans, onToggleClans } = useNewToggleTeam(
    dataHomePage ? dataHomePage.season : null,
  );

  const mutationOnboardingApplyTeam = usePostOnboardingApplyTeam();
  const mutationPostChangeTeam = usePostChangeTeam();

  const countForChangeTeam =
    dataHomePage?.user_balance.price_per_change_team || 0;

  const steps = useMemo(() => {
    return HOME_TOUR_STEPS.map((item) => ({
      ...item,
      data: { setIsStartTour },
    }));
  }, [setIsStartTour]);

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
        setStepIndex(0);
        navigation("/team", { state: { startTeamTour: true } });

        return;
      }

      if (status === "skipped" || type === "tour:end") {
        document.body.style.overflow = "";
        setIsStartTour(false);
        setStepIndex(0);
        navigation("/home");
        return;
      }
    },
    [navigation],
  );

  function openStatusModal(status: "success" | "error") {
    setIsOpenModalStatus(true);
    setIsOpenModalStatusText(status);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setIsOpenModalStatus(false);
      setIsOpenModalStatusText("");
    }, 3000);
  }

  function handleClickTeamOne() {
    mutationOnboardingApplyTeam.mutate(
      { team_id: 1 },
      {
        onSuccess: () => {
          setActiveClan("1");

          if (isStartTour) {
            setIsStartTour(false);
            setStepIndex(0);
            navigation("/home");
          }
        },
      },
    );
  }

  function handleClickTeamTwo() {
    mutationOnboardingApplyTeam.mutate(
      { team_id: 2 },
      {
        onSuccess: () => {
          setActiveClan("2");

          if (isStartTour) {
            setIsStartTour(false);
            setStepIndex(0);
            navigation("/home");
          }
        },
      },
    );
  }

  function handleClickChangeTeam() {
    if (activeTeam === null) return;

    setIsOpenModalConfirm(false);
    setIsLoadingPayChangeTeam(true);

    const balance = dataHomePage?.user_balance;

    if (
      // balance?.game_coin &&
      // balance.game_coin > 500 &&
      balance &&
      balance.can_change_team_for_pay
    ) {
      setIsOpenModalStatus(true);

      const nextTeamId = activeTeam === "1" ? 2 : 1;

      mutationPostChangeTeam.mutate(
        { team_id: nextTeamId, currency: "game_coin" },
        {
          onSuccess: () => {
            setIsLoadingPayChangeTeam(false);
            onToggleClans();
            refetchHomePage();
            openStatusModal("success");
          },
          onError: () => {
            setIsLoadingPayChangeTeam(false);
            openStatusModal("error");
          },
        },
      );
    } else {
      // TODO за донат
      openStatusModal("error");
    }
  }

  function handleClickChangeTeamConfirm() {
    setIsOpenModalConfirm(true);

    if (isStartTour) {
      setIsStartTour(false);
      setStepIndex(0);
    }
  }

  function handleCloseModal() {
    setIsOpenModalConfirm(false);
    setIsOpenModalStatus(false);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (isErrorHomePage) {
    return (
      <div className={styles.home}>
        <div className={styles.home__error}>
          <span className={styles.home__text}>
            Error fetch data. Please try again.
          </span>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            color="blue"
            onClickButton={() => {
              if (isErrorHomePage) {
                refetchHomePage();
              }
            }}
          >
            Click here
          </NewButtonUi>
        </div>
      </div>
    );
  }

  if (isLoadingHomePage) {
    return (
      <div className={styles.home__loading}>
        <span className={styles.home__text}>Loading..</span>
      </div>
    );
  }

  if (isSuccessHomePage && dataHomePage) {
    return (
      <>
        <Joyride
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
        <NewHomeLayout
          season={dataHomePage.season}
          activeTeam={activeTeam}
          isOpenModalConfirm={isOpenModalConfirm}
          isOpenModalStatusText={isOpenModalStatusText}
          isOpenModalStatus={isOpenModalStatus}
          orderedClans={orderedClans}
          handleClickTeamOne={handleClickTeamOne}
          handleClickTeamTwo={handleClickTeamTwo}
          handleClickChangeTeamConfirm={handleClickChangeTeamConfirm}
          handleCloseModal={handleCloseModal}
          handleClickChangeTeam={handleClickChangeTeam}
          isLoadingPayChangeTeam={isLoadingPayChangeTeam}
          isStartTour={isStartTour}
          stepIndex={stepIndex}
          setIsStartTour={setIsStartTour}
          countForChangeTeam={countForChangeTeam}
        />
      </>
    );
  }

  if (isSuccessHomePage && !dataHomePage) {
    return (
      <div className={styles.home}>
        <span className={styles.home__text}>Empty</span>
      </div>
    );
  }

  return (
    <div className={styles.home}>
      <span className={styles.home__text}>Something went wrong..</span>
    </div>
  );
}
