import { useMutation } from "@tanstack/react-query";
import { newPostBuySomething } from "../../newPostBuySomething";

export function useNewPostBuySomething() {
  const mutationPostBuySomething = useMutation({
    mutationFn: ({
      model,
      productId,
      count,
    }: {
      model: string;
      productId: number;
      count?: number;
    }) => newPostBuySomething({ model, productId, count }),
    mutationKey: ["buySomething"],
  });

  return mutationPostBuySomething;
}
