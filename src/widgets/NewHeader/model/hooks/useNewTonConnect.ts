import { newPostTonConnectAdress } from "@/shared/api/newPostTonConnectAdress/newPostTonConnectAdress";
import { newTonConnect } from "@/shared/lib/tonWallet/newTonConnect";
import { useEffect, useRef, useState } from "react";

export function useNewTonConnect() {
  const [isWalletError, setIsWalletError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isWalletOpenModal, setIsWalletOpenModal] = useState<boolean>(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const unsubscribeModal = newTonConnect.onModalStateChange((state) => {
      if (state.status === "opened") {
        setIsWalletOpenModal(true);
      }
      if (state.status === "closed") {
        setIsWalletOpenModal(false);
      }
    });

    return () => unsubscribeModal();
  }, []);

  const openWallet = () => {
    setIsWalletError(null);
    newTonConnect.openModal();
  };

  // TODO: удалить это мок для проверки
  // const openWallet = async () => {
  //   setIsWalletError(null);
  //   await newPostTonConnectAdress({
  //     adress: "UQCI7d2SQ9ili8W41vpsIuaMyVmBMQcsBxEcM01UE5aL-j5l",
  //   });
  //   setIsConnected(true);
  // };

  useEffect(() => {
    const unsubscribe = newTonConnect.onStatusChange(async (wallet) => {
      if (!wallet) {
        setIsConnected(false);
        setIsWalletError("Wallet connection error");

        timerRef.current = setTimeout(() => {
          setIsWalletError(null);
        }, 3000);

        return;
      }

      try {
        const adress = wallet.account.address;
        setIsWalletError(null);

        const response = await newPostTonConnectAdress({ adress });

        if (response?.error) {
          throw new Error(response.error);
        }

        setIsConnected(true);
      } catch (error) {
        console.error(error);
        setIsConnected(false);
        setIsWalletError("Failed to connect wallet");

        timerRef.current = setTimeout(() => {
          setIsWalletError(null);
        }, 3000);
      }
    });

    return () => {
      unsubscribe();

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return { openWallet, isWalletError, isConnected, isWalletOpenModal };
}
