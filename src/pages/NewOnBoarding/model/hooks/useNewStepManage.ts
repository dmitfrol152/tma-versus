import { useState } from "react";
import { useNavigate } from "react-router";

export function useNewStepManage() {
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();

  const getNextStep = () => {
    setStep((prev: number) => Math.min(prev + 1, 3));
  };

  const getPrevStep = () => {
    setStep((prev: number) => Math.max(prev - 1, 1));
  };

  const getSkipSteps = () => {
    navigate("/home");
  };

  const getStartDetailedTour = () => {
    navigate("/home", { state: { startHomeTour: true } });
  };

  return { step, getNextStep, getPrevStep, getSkipSteps, getStartDetailedTour };
}
