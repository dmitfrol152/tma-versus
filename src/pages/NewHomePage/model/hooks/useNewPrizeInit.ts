import { setPrize } from "@/shared/lib/store/newPrizeSlice";
import type { NewSeasonProps } from "@/shared/lib/types/NewSeason/model/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useNewPrizeInit(
  sesson: NewSeasonProps | null,
  isSuccessHomePage: boolean,
) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccessHomePage && sesson) {
      dispatch(setPrize(sesson.prize));
    }
  }, [dispatch, isSuccessHomePage, sesson]);
}
