import { useFetchUser } from "@/shared/api/newFetchUser/model/hooks/useFetchUser";
import { setPerson } from "@/shared/lib/store/newInfoPersonSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useNewUserInit() {
  const dispatch = useDispatch();

  const { data } = useFetchUser();

  useEffect(() => {
    if (data) {
      dispatch(setPerson(data));
    }
  }, [data, dispatch]);

  return data;
}
