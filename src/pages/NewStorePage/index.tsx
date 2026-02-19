import { useSelector } from "react-redux";
import { NewStoreLayout } from "./ui/NewStoreLayout";
import type {
  NewSelectorProps,
  NewuserBalanseStoreNameProps,
} from "@/shared/lib/store/types";
import { useNewActiveButtonsStoreManager } from "./model/hooks/useNewActiveButtonsStoreManager";
import { useNewScrollActive } from "@/shared/lib/hooks/useNewScrollActive";
import { useNewFetchStore } from "@/shared/api/newFetchStore/model/hooks/useNewFetchStore";
import { useCallback, useMemo, useState } from "react";
import type { NewUserTradersProps } from "@/shared/lib/types/NewUserTraders/model/types";
import type { NewOfficeProps } from "@/shared/lib/types/NewOffice/model/types";
import { useNewPostBuySomething } from "@/shared/api/newPostBuySomething/model/hooks/useNewPostBuySomething";
import styles from "./index.module.scss";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { useLocation, useNavigate } from "react-router";
import { Joyride, type CallBackProps } from "react-joyride";
import { NewTooltipOnboardingUi } from "@/shared/ui/NewTooltipOnboardingUi";
import { STORE_TOUR_STEPS } from "./lib/constants/STORE_TOUR_STEPS";

export default function NewStorePage() {
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
    !!location.state?.startStoreTour || false,
  );
  const [stepIndex, setStepIndex] = useState<number>(0);

  const [selectedTrader, setSelectedTrader] = useState<
    NewUserTradersProps | undefined
  >(undefined);

  const shopQuery = useNewFetchStore();
  const mutationPostBuySomething = useNewPostBuySomething();

  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );

  const userBalanse = useSelector(
    (state: NewuserBalanseStoreNameProps) => state.userBalanseName.userBalanse,
  );

  const {
    isButtonActiveTradersOffices,
    setIsButtonActiveTradersOffices,
    isOpenModal,
    setIsOpenModal,
  } = useNewActiveButtonsStoreManager();
  useNewScrollActive({ isOpenModal });

  const currentLevel = userBalanse.my_ofice.ofice.lvl ?? 0;

  const steps = useMemo(() => {
    return STORE_TOUR_STEPS.map((item) => ({
      ...item,
      data: { setIsStartTour },
    }));
  }, [setIsStartTour]);

  const handleJoyrideCallback = useCallback(
    (data: CallBackProps) => {
      const { index, status, type, action, lifecycle } = data;

      if (type === "tour:start") {
        document.body.style.overflow = "hidden";
      }

      if (type === "step:after" && lifecycle === "complete") {
        if (action === "next") {
          if (index === 0) {
            setIsButtonActiveTradersOffices("offices");
            setStepIndex(1);
          } else {
            setStepIndex(index + 1);
          }
        } else if (action === "prev") {
          setStepIndex(index - 1);
        }
      }

      if (status === "finished") {
        document.body.style.overflow = "";
        setIsStartTour(false);
        setStepIndex(0);
        navigate("/community", { state: { startCommunityTour: true } });

        return;
      }

      if (status === "skipped" || type === "tour:end") {
        document.body.style.overflow = "";
        setIsStartTour(false);
        setStepIndex(0);
        navigate("/store");
        return;
      }
    },
    [navigate, setIsButtonActiveTradersOffices],
  );

  const handleOpenModal = (trader?: NewUserTradersProps) => {
    if (!trader) return;

    setSelectedTrader(trader);
    setIsOpenModal(true);
  };

  const handleClickBuyOffice = (level?: NewOfficeProps) => {
    if (!level) return;

    mutationPostBuySomething.mutate(
      {
        model: "ofice",
        productId: level.id,
      },
      {
        onSuccess: (data) => {
          console.log("Success:", data);
        },
        onError: (error) => {
          console.error(error);
        },
      },
    );
  };

  if (shopQuery.isError) {
    return (
      <div className={styles.store}>
        <div className={styles.store__error}>
          <span className={styles.store__text}>
            Error fetch data. Please try again.
          </span>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="textXS"
            color="blue"
            onClickButton={() => shopQuery.refetch()}
          >
            Click here
          </NewButtonUi>
        </div>
      </div>
    );
  }

  if (shopQuery.isLoading) {
    return (
      <div className={styles.store__loading}>
        <span className={styles.store__text}>Loading..</span>
      </div>
    );
  }

  if (shopQuery.data && shopQuery.isSuccess) {
    return (
      <>
        <Joyride
          steps={steps}
          run={isStartTour}
          stepIndex={stepIndex}
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
        <NewStoreLayout
          activeTeam={activeTeam}
          isButtonActiveTradersOffices={isButtonActiveTradersOffices}
          setIsButtonActiveTradersOffices={setIsButtonActiveTradersOffices}
          handleOpenModal={handleOpenModal}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          queryTraders={shopQuery.data.traders ?? []}
          queryOffices={shopQuery.data.ofices ?? []}
          selectedTrader={selectedTrader}
          currentLevel={currentLevel}
          handleClickBuyOffice={handleClickBuyOffice}
          setStepIndex={setStepIndex}
          isStartTour={isStartTour}
          stepIndex={stepIndex}
        />
      </>
    );
  }

  return (
    <div className={styles.store}>
      <span className={styles.store__text}>Something went wrong..</span>
    </div>
  );
}
