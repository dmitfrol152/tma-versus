import { useMutation } from "@tanstack/react-query";
import { newPostChangeNickname } from "../../newPostChangeNickname";

export function usePostChangeNickname() {
  const mutationPostChangeNickname = useMutation({
    mutationFn: ({ nickname }: { nickname: string }) =>
      newPostChangeNickname({ nickname }),
    mutationKey: ["ChangeNickname"],
  });

  return mutationPostChangeNickname;
}
