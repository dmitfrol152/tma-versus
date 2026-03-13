import type {
  NewSelectorProps,
  NewSelectorReferalLinkProps,
} from "@/shared/lib/store/types";
import { CommunityLayout } from "./ui/CommunityLayout";
import { useSelector } from "react-redux";
import { useNewReferal } from "./model/hooks/useNewReferal";
import { useNewActiveButtonsManagerCommunity } from "./model/hooks/useNewActiveButtonsManagerCommunity";
import { useCallback, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Joyride, type CallBackProps } from "react-joyride";
import { NewTooltipOnboardingUi } from "@/shared/ui/NewTooltipOnboardingUi";
import { COMMUNITY_TOUR_STEPS } from "./lib/constants/COMMUNITY_TOUR_STEPS";
import { useNewFetchCommunity } from "@/shared/api/newFetchCommunity/model/hooks/useNewFetchCommunity";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import styles from "./index.module.scss";

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

  const {
    data: dataCommunityPage,
    isError: isErrorCommunityPage,
    isLoading: isLoadingCommunityPage,
    isSuccess: isSuccessCommunityPage,
    refetch: refetchCommunityPage,
  } = useNewFetchCommunity();

  const [isStartTour, setIsStartTour] = useState<boolean>(
    location.state?.startCommunityTour ?? false,
  );
  const [stepIndex, setStepIndex] = useState<number>(0);

  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );

  const referalLink = useSelector(
    (state: NewSelectorReferalLinkProps) =>
      state.referalLinkName.referalLinkValue.invite_link,
  );

  const {
    isActiveReferalLink,
    copyStatus,
    handleCopyReferal,
    inputRef,
    isOpenModalStatus,
  } = useNewReferal({ referalLink });

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

  console.log(dataCommunityPage);

  if (isErrorCommunityPage) {
    return (
      <div className={styles.community}>
        <div className={styles.community__error}>
          <span className={styles.community__text}>
            Error fetch data. Please try again.
          </span>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            color="blue"
            onClickButton={() => {
              if (isErrorCommunityPage) {
                refetchCommunityPage();
              }
            }}
          >
            Click here
          </NewButtonUi>
        </div>
      </div>
    );
  }

  if (isLoadingCommunityPage) {
    return (
      <div className={styles.community__loading}>
        <span className={styles.community__text}>Loading..</span>
      </div>
    );
  }

  if (isSuccessCommunityPage && dataCommunityPage) {
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
          isStartTour={isStartTour}
          stepIndex={stepIndex}
          isOpenModalStatus={isOpenModalStatus}
          dataCommunityPage={dataCommunityPage}
        />
      </>
    );
  }

  if (isSuccessCommunityPage && !dataCommunityPage) {
    return (
      <div className={styles.community}>
        <span className={styles.community__text}>Empty</span>
      </div>
    );
  }

  return (
    <div className={styles.community}>
      <span className={styles.community__text}>Something went wrong..</span>
    </div>
  );
}
