import { useMutation } from "@tanstack/react-query";
import { newPostTonConnectAdress } from "@shared/api/newPostTonConnectAdress/newPostTonConnectAdress";

export function useNewTonConnect() {
  const mutationTonConnect = useMutation({
    mutationFn: ({ adress }: { adress: string }) =>
      newPostTonConnectAdress({ adress }),
    mutationKey: ["tonConnectAdress"],
  });

  return mutationTonConnect;
}
