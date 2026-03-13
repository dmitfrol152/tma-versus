import type { newFetchReferalLinkProps } from "@/shared/api/newFetchReferalLink/model/types";
import { setReferalLink } from "@/shared/lib/store/newReferalLinkSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useNewReferalLinkInit(
  referalLinkData: newFetchReferalLinkProps | undefined,
  referalLinkSuccess: boolean,
) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (referalLinkSuccess && referalLinkData) {
      dispatch(setReferalLink(referalLinkData.invite_link));
    }
  }, [dispatch, referalLinkData, referalLinkSuccess]);
}
