import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { NewSlideLayout } from "@/pages/NewOnBoarding/ui/NewSlideLayout";
import type { NewStepProps } from "./types";
import { NewSlideTitleBlock } from "@/pages/NewOnBoarding/ui/NewSlideTitleBlock";
import { NewSlideDescriptionBlock } from "../NewSlideDescriptionBlock";
import BackgroundImage from "@shared/assets/images/png/onboarding-bg.png";
import { NewSlideStepInfo } from "@/pages/NewOnBoarding/ui/NewSlideStepInfo";

export function NewSlideVictory({
  currentStep,
  onNextStep,
  onPrevStep,
  onSkipSteps,
}: NewStepProps) {
  return (
    <NewSlideLayout
      buttonLeft={
        <NewButtonUi
          type="button"
          size="xs"
          variant="onboarding"
          onClickButton={onPrevStep}
        />
      }
      buttonRight={
        <NewButtonUi
          type="button"
          size="xs"
          variant="onboarding"
          onClickButton={onNextStep}
        />
      }
      slideTitle={
        <NewSlideTitleBlock
          title="<VICTORY!"
          description="More points"
          target="— share of prize pool>"
          classNameWidthContainer="season"
        />
      }
      slideDescription={
        <NewSlideDescriptionBlock description="To begin, select one of the two teams to start competing and earning." />
      }
      backgroundImage={BackgroundImage}
      slideStepInfo={<NewSlideStepInfo currentStep={currentStep} />}
      buttonNextStep={
        <NewButtonUi
          type="button"
          size="textXS"
          variant="textXS"
          color="blue"
          onClickButton={onNextStep}
        >
          Start play
        </NewButtonUi>
      }
      buttonSkipInfo={
        <NewButtonUi
          type="button"
          size="textXS"
          variant="textXS"
          color="gray"
          onClickButton={onSkipSteps}
        >
          Skip
        </NewButtonUi>
      }
    />
  );
}
