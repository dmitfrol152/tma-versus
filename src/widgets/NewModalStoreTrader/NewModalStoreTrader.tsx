import styles from "./NewModalStoreTrader.module.scss";
import ImageManDefault from "@shared/assets/images/png/png-man-default.png";
import ImageManSuccessfull from "@shared/assets/images/png/png-man-successfull.png";
import IconRainbow from "@shared/assets/images/svg/icon-rainbow.svg?react";
import IconCoin from "@shared/assets/images/svg/icon-coin.svg?react";
import IconClose from "@shared/assets/images/svg/icon-close.svg?react";
import type { ModalStoreTraderProps } from "./model/types";
import { useNewTraderAdd } from "./model/hooks/useNewTraderAdd";
import { NewModalStoreTraderDefault } from "./ui/NewModalStoreTraderDefault/NewModalStoreTraderDefault";
import { NewModalStoreTraderSuccess } from "./ui/NewModalStoreTraderSuccess/NewModalStoreTraderSuccess";
import { useCallback } from "react";
import { NewModalStoreTraderError } from "./ui/NewModalStoreTraderError/NewModalStoreTraderError";
import { useNavigate } from "react-router";
import { useNewPostBuySomething } from "@/shared/api/newPostBuySomething/model/hooks/useNewPostBuySomething";

export function NewModalStoreTrader({
  setIsOpenModal,
  selectedTrader,
}: ModalStoreTraderProps) {
  const mutationPostBuySomething = useNewPostBuySomething();

  const { traderCount, setTraderCount, isSuccess, setIsSuccess } =
    useNewTraderAdd();
  const navigate = useNavigate();

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
    setIsSuccess("default");
  }, [setIsOpenModal, setIsSuccess]);

  const handleSubCoint = useCallback(() => {
    setTraderCount((prev) => Math.max(prev + 1, 1));
  }, [setTraderCount]);

  const handleAddCoint = useCallback(() => {
    setTraderCount((prev) => Math.max(prev - 1, 1));
  }, [setTraderCount]);

  const handleBuyCoint = (selectTraderId: number, count: number) => {
    mutationPostBuySomething.mutate(
      {
        model: "trader",
        productId: selectTraderId,
        count,
      },
      {
        onSuccess: () => {
          setIsSuccess("success");
        },
        onError: (error) => {
          setIsSuccess("error");
          console.error(error);
        },
      },
    );
  };

  const handleContinue = useCallback(() => {
    setIsOpenModal(false);
    setIsSuccess("default");
  }, [setIsOpenModal, setIsSuccess]);

  const handleNavigateOffice = useCallback(() => {
    navigate("/office");
  }, [navigate]);

  if (!selectedTrader) return;

  if (isSuccess === "success") {
    return (
      <NewModalStoreTraderSuccess
        ImageMan={ImageManSuccessfull}
        IconRainbow={
          <IconRainbow className={styles.modalStoreTrader__imageIcon} />
        }
        handleContinue={handleContinue}
        handleCloseModal={handleCloseModal}
        IconClose={<IconClose className={styles.modalStoreTrader__closeIcon} />}
      />
    );
  }

  if (isSuccess === "error") {
    return (
      <NewModalStoreTraderError
        ImageMan={ImageManSuccessfull}
        IconRainbow={
          <IconRainbow className={styles.modalStoreTrader__imageIcon} />
        }
        handleNavigateOffice={handleNavigateOffice}
        handleCloseModal={handleCloseModal}
        IconClose={<IconClose className={styles.modalStoreTrader__closeIcon} />}
      />
    );
  }

  return (
    <NewModalStoreTraderDefault
      selectedTrader={selectedTrader}
      traderCount={traderCount}
      ImageMan={ImageManDefault}
      IconRainbow={
        <IconRainbow className={styles.modalStoreTrader__imageIcon} />
      }
      IconCoin={<IconCoin className={styles.modalStoreTrader__infoCoinIcon} />}
      handleAddCoint={handleAddCoint}
      handleSubCoint={handleSubCoint}
      handleBuyCoint={handleBuyCoint}
      handleCloseModal={handleCloseModal}
      IconClose={<IconClose className={styles.modalStoreTrader__closeIcon} />}
    />
  );
}
