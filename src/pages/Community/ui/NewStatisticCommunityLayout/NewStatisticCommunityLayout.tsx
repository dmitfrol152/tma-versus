import type { newFetchCommunityProps } from "@/shared/api/newFetchCommunity/model/types";
import { NewLayer } from "./ui/NewLayer/NewLayer";

export function NewStatisticCommunityLayout({
  isButtonsStep,
  dataCommunityPage,
}: {
  isButtonsStep: boolean;
  dataCommunityPage: newFetchCommunityProps;
}) {
  return (
    <NewLayer
      isButtonsStep={isButtonsStep}
      dataCommunityPage={dataCommunityPage}
    />
  );
}
