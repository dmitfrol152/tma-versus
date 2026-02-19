import { useNewStepManage } from "./model/hooks/useNewStepManage";
import { NewSlideWelcome } from "@/pages/NewOnBoarding/ui/NewSlideWelcome";
import { NewSlideSeason } from "@/pages/NewOnBoarding/ui/NewSlideSeason";
import { NewSlideVictory } from "@/pages/NewOnBoarding/ui/NewSlideVictory";
import styles from "./index.module.scss";

export default function NewOnBoarding() {
  const { step, getNextStep, getPrevStep, getSkipSteps, getStartDetailedTour } =
    useNewStepManage();

  return (
    <div className={styles.onboarding}>
      {step === 1 && (
        <NewSlideWelcome
          onNextStep={getNextStep}
          onPrevStep={getPrevStep}
          currentStep={step}
          onSkipSteps={getSkipSteps}
        />
      )}
      {step === 2 && (
        <NewSlideSeason
          onNextStep={getNextStep}
          onPrevStep={getPrevStep}
          currentStep={step}
          onSkipSteps={getSkipSteps}
        />
      )}
      {step === 3 && (
        <NewSlideVictory
          onNextStep={getStartDetailedTour}
          onPrevStep={getPrevStep}
          currentStep={step}
          onSkipSteps={getSkipSteps}
        />
      )}
    </div>
  );
}
