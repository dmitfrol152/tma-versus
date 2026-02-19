import { useEffect } from "react";

export function useNewScrollActive({ isOpenModal }: { isOpenModal: boolean }) {
  useEffect(() => {
    if (!isOpenModal) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenModal]);
}
