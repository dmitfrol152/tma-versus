import type {
  NewInfoPersonNameProps,
  NewSelectorProps,
} from "@/shared/lib/store/types";
import { CommunityLayout } from "./ui/CommunityLayout";
import { useSelector } from "react-redux";
import { useNewReferal } from "./model/hooks/useNewReferal";
import { useNewActiveButtonsManagerCommunity } from "./model/hooks/useNewActiveButtonsManagerCommunity";
import { GENERAL_ARRAY_COMMUNITY } from "@/shared/lib/constants/GENERAL_ARRAY_COMMUNITY";
import { useCallback, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Joyride, type CallBackProps } from "react-joyride";
import { NewTooltipOnboardingUi } from "@/shared/ui/NewTooltipOnboardingUi";
import { COMMUNITY_TOUR_STEPS } from "./lib/constants/COMMUNITY_TOUR_STEPS";

export default function Community() {
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
    location.state?.startCommunityTour ?? false,
  );
  const [stepIndex, setStepIndex] = useState<number>(0);

  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );

  const user = useSelector(
    (state: NewInfoPersonNameProps) => state.infoPersonName.infoPerson,
  );

  const { isActiveReferalLink, copyStatus, handleCopyReferal, inputRef } =
    useNewReferal({ user });

  const { isButtonActiveCommunity, setIsButtonActiveCommunity } =
    useNewActiveButtonsManagerCommunity();

  const steps = useMemo(() => {
    return COMMUNITY_TOUR_STEPS.map((item) => ({
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
        navigate("/home", { state: { startCommunityTour: false } });

        return;
      }

      if (status === "skipped" || type === "tour:end") {
        document.body.style.overflow = "";
        setIsStartTour(false);
        setStepIndex(0);
        navigate("/community", { state: { startCommunityTour: false } });

        return;
      }
    },
    [navigate],
  );

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
      <CommunityLayout
        activeTeam={activeTeam}
        isActiveReferalLink={isActiveReferalLink}
        inputRef={inputRef}
        handleCopyReferal={handleCopyReferal}
        copyStatus={copyStatus}
        isButtonActiveCommunity={isButtonActiveCommunity}
        setIsButtonActiveCommunity={setIsButtonActiveCommunity}
        GENERAL_ARRAY_COMMUNITY={GENERAL_ARRAY_COMMUNITY}
        isStartTour={isStartTour}
        stepIndex={stepIndex}
      />
    </>
  );
}
