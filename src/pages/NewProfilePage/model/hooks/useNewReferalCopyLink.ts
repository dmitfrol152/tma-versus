import { useState } from "react";

export function useNewReferalCopyLink() {
  const [copyStatus, setCopyStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({ message: "", type: null });

  const handleCopyLinkButton = (url: string) => {
    navigator.clipboard
      .writeText(url)
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
  };

  return {
    copyStatus,
    handleCopyLinkButton,
  };
}
