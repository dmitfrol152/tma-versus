import { useMutation } from "@tanstack/react-query";
import { newPostClaimBank } from "../../newPostClaimBank";

export function useNewPostClaimBank() {
  const mutationPostClaimBank = useMutation({
    mutationFn: () => newPostClaimBank(),
    mutationKey: ["claimBank"],
  });

  return mutationPostClaimBank;
}
