import type { NewInfoPersonProps } from "@/shared/lib/store/types";
import { useRef, useState } from "react";

export function useNewReferal({ user }: { user: NewInfoPersonProps }) {
  const inputRef = useRef(null);
  // const [isActiveReferalLink, setIsActiveReferalLink] = useState<string>(
  //   user.invite_link || "",
  // );
  const [copyStatus, setCopyStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({ message: "", type: null });

  const isActiveReferalLink = user?.invite_link || "";

  const handleCopyReferal = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(isActiveReferalLink)
        .then(() => {
          setCopyStatus((prev) => ({
            ...prev,
            message: "The link was copied successfully!",
            type: "success",
          }));
          setTimeout(() => {
            setCopyStatus((prev) => ({ ...prev, message: "", type: null }));
          }, 3000);
        })
        .catch((error) => {
          setCopyStatus((prev) => ({
            ...prev,
            message: `The link was copied with an error! ${error.message}`,
            type: "error",
          }));
          setTimeout(() => {
            setCopyStatus((prev) => ({
              ...prev,
              message: "",
              type: null,
            }));
          }, 3000);
        });
    }
  };

  return {
    isActiveReferalLink,
    // setIsActiveReferalLink,
    copyStatus,
    setCopyStatus,
    handleCopyReferal,
    inputRef,
  };
}
