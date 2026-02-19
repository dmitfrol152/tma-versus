import type { NewSelectorProps } from "@/shared/lib/store/types";
import { useSelector } from "react-redux";
import { NewTeamLayoutPage } from "./ui/NewTeamLayoutPage";
import styles from "./index.module.scss";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { useNewFetchTeam } from "@/shared/api/newFetchTeam/model/hooks/useNewFetchTeam";
import { useNewActiveButtonsManagerTeam } from "./model/hooks/useNewActiveButtonsManagerTeam";
import { useNewActiveButtonsManagerLeadboard } from "./model/hooks/useActiveButtonsManagerLeadboard";
import { useCallback, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Joyride, type CallBackProps } from "react-joyride";
import { NewTooltipOnboardingUi } from "@/shared/ui/NewTooltipOnboardingUi";
import { TEAM_TOUR_STEPS } from "./lib/constants/TEAM_TOUR_STEPS";

export default function NewTeamPage() {
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

  const [currentActiveStatus, setCurrentActiveStatus] = useState<number>(1);

  const [isStartTour, setIsStartTour] = useState<boolean>(
    location.state?.startTeamTour ?? false,
  );
  const [stepIndex, setStepIndex] = useState<number>(0);

  const teamQuery = useNewFetchTeam();

  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );
  const { isButtonActiveTeam, setIsButtonActiveTeam } =
    useNewActiveButtonsManagerTeam();
  const { isButtonActiveLeadboard, setIsButtonActiveLeadboard } =
    useNewActiveButtonsManagerLeadboard();

  const steps = useMemo(() => {
    return TEAM_TOUR_STEPS.map((item) => ({
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
        navigate("/office", { state: { startOfficeTour: true } });

        return;
      }

      if (status === "skipped" || type === "tour:end") {
        document.body.style.overflow = "";
        setIsStartTour(false);
        setStepIndex(0);
        navigate("/team");
        return;
      }
    },
    [navigate],
  );

  if (teamQuery.isError) {
    return (
      <div className={styles.team}>
        <div className={styles.team__error}>
          <span className={styles.team__text}>
            Error fetch data. Please try again.
          </span>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            color="blue"
            onClickButton={() => teamQuery.refetch()}
          >
            Click here
          </NewButtonUi>
        </div>
      </div>
    );
  }

  if (teamQuery.isLoading) {
    return (
      <div className={styles.team__loading}>
        <span className={styles.team__text}>Loading..</span>
      </div>
    );
  }

  if (teamQuery.data && teamQuery.isSuccess) {
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
        <NewTeamLayoutPage
          activeTeam={activeTeam}
          isButtonActiveTeam={isButtonActiveTeam}
          setIsButtonActiveTeam={setIsButtonActiveTeam}
          isButtonActiveLeadboard={isButtonActiveLeadboard}
          setIsButtonActiveLeadboard={setIsButtonActiveLeadboard}
          teamQuery={teamQuery.data}
          currentActiveStatus={currentActiveStatus}
          setCurrentActiveStatus={setCurrentActiveStatus}
          isStartTour={isStartTour}
          setIsStartTour={setIsStartTour}
          stepIndex={stepIndex}
        />
      </>
    );
  }

  return (
    <div className={styles.team}>
      <span className={styles.team__text}>Something went wrong..</span>
    </div>
  );
}
