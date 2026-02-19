import { useState } from "react";

export function useNewActiveButtonsStoreManager() {
  const [isButtonActiveTradersOffices, setIsButtonActiveTradersOffices] =
    useState<"traders" | "offices">("traders");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return {
    isButtonActiveTradersOffices,
    setIsButtonActiveTradersOffices,
    isOpenModal,
    setIsOpenModal,
  };
}
