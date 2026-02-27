import { setUser } from "@/shared/lib/store/newUserSlice";
import type { NewUserProps } from "@/shared/lib/types/NewUser/model/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useNewUseMainPageInit(
  user: NewUserProps | null,
  isSuccessHomePage: boolean,
) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccessHomePage && user) {
      dispatch(setUser(user));
    }
  }, [dispatch, isSuccessHomePage, user]);
}
