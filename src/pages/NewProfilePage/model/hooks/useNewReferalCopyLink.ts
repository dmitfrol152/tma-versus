import { useState } from "react";

export function useNewReferalCopyLink() {
  const [copyStatus, setCopyStatus] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({ message: "", type: "" });
  const [isOpenModalStatus, setIsOpenModalStatus] = useState<boolean>(false);

  const handleCopyLinkButton = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setIsOpenModalStatus(true);
        setCopyStatus((prev) => ({
          ...prev,
          message: "The link was copied successfully!",
          type: "success",
        }));
        setTimeout(() => {
          setIsOpenModalStatus(false);
          setCopyStatus((prev) => ({ ...prev, message: "", type: "" }));
        }, 3000);
      })
      .catch((error) => {
        setIsOpenModalStatus(true);
        setCopyStatus((prev) => ({
          ...prev,
          message: `The link was copied with an error! ${error.message}`,
          type: "error",
        }));
        setTimeout(() => {
          setIsOpenModalStatus(false);
          setCopyStatus((prev) => ({
            ...prev,
            message: "",
            type: "",
          }));
        }, 3000);
      });
  };

  return {
    isOpenModalStatus,
    copyStatus,
    handleCopyLinkButton,
  };
}
