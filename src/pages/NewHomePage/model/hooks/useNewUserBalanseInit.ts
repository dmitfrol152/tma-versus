import { setUserBalanse } from "@/shared/lib/store/newUserBalanseSlice";
import type { NewUserBalanceProps } from "@/shared/lib/types/NewUserBalance/model/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useNewUserBalanseInit(
  userBalanse: NewUserBalanceProps | null,
  isSuccessHomePage: boolean,
) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccessHomePage && userBalanse) {
      dispatch(setUserBalanse(userBalanse));
    }
  }, [dispatch, isSuccessHomePage, userBalanse]);
}
