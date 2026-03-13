import { useRef, useState } from "react";

export function useNewReferal({ referalLink }: { referalLink: string }) {
  const inputRef = useRef(null);
  // const [isActiveReferalLink, setIsActiveReferalLink] = useState<string>(
  //   user.invite_link || "",
  // );
  const [copyStatus, setCopyStatus] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({ message: "", type: "" });
  const [isOpenModalStatus, setIsOpenModalStatus] = useState<boolean>(false);

  const isActiveReferalLink = referalLink || "";

  const handleCopyReferal = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(isActiveReferalLink)
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
    }
  };

  return {
    isActiveReferalLink,
    // setIsActiveReferalLink,
    copyStatus,
    setCopyStatus,
    handleCopyReferal,
    inputRef,
    isOpenModalStatus,
  };
}
