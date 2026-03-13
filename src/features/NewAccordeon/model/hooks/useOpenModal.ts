import { useState } from "react";

export function useOpenModal() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return {
    isOpenModal,
    setIsOpenModal,
  };
}
