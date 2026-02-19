import { useState } from "react";

export function useNewModalStatus() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return {
    isOpenModal,
    setIsOpenModal,
  };
}
