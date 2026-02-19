import { useMutation } from "@tanstack/react-query";
import { newPostAddOrChangeTrader } from "../../newPostAddOrChangeTrader";

export function useNewPostAddOrChangeTrader() {
  const mutationPostAddOrChangeTrader = useMutation({
    mutationFn: ({
      currentId,
      targetId,
    }: {
      currentId: number;
      targetId?: number;
    }) => newPostAddOrChangeTrader({ currentId, targetId }),
    mutationKey: ["addOrChangeTrader"],
  });

  return mutationPostAddOrChangeTrader;
}
