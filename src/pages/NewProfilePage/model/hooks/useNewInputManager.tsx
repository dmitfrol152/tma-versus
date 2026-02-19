import { newPostChangeNickname } from "@/shared/api/newPostChangeNickname/newPostChangeNickname";
import { setNickname } from "@/shared/lib/store/newInfoPersonSlice";
import { queryClient } from "@/shared/lib/store/queryClient";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

export function useNewInputManager(profileName: string) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(profileName);
  const dispatch = useDispatch();
  const refField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && refField.current) {
      refField.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    if (!isEditing) {
      setValue(profileName);
    }
  }, [isEditing, profileName]);

  const handleChangeButton = async () => {
    const sameProfileName = value === profileName;

    if (isEditing && sameProfileName) {
      setIsEditing(false);
      return;
    }
    if (isEditing && !sameProfileName) {
      try {
        const response = await newPostChangeNickname({ nickname: value });

        if (!response) throw new Error("Error: chnage nickname is failed");
        dispatch(setNickname(value));
        await queryClient.invalidateQueries({ queryKey: ["user"] });
      } catch (error) {
        console.log(error);
        throw error;
      }

      setIsEditing(false);
      return;
    }

    setIsEditing(true);
  };

  return { value, setValue, handleChangeButton, isEditing, refField };
}
