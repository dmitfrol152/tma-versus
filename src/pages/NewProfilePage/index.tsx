import { useSelector } from "react-redux";
import type {
  NewSelectorProps,
  NewInfoPersonNameProps,
} from "@/shared/lib/store/types";
import { useNewInputManager } from "./model/hooks/useNewInputManager";
import { NewProfileLayout } from "./ui/NewProfileLayout";
import { useNewReferalCopyLink } from "./model/hooks/useNewReferalCopyLink";
// import { useFetchUser } from "@/shared/api/newFetchUser/model/hooks/useFetchUser";

export default function NewProfilePage() {
  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );
  const user = useSelector(
    (state: NewInfoPersonNameProps) => state.infoPersonName.infoPerson,
  );
  // const { data: user } = useFetchUser();

  const { value, setValue, handleChangeButton, isEditing, refField } =
    useNewInputManager(user.nickname);

  const { handleCopyLinkButton, copyStatus } = useNewReferalCopyLink();

  const handleWithdrawalButton = () => {
    alert("click withdrawal");
  };

  console.log(user);

  const handleShareButton = (url: string) => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}`;

    tg.openTelegramLink(shareUrl);

    // TODO: удалить стары код
    // if (!url) return;
    // const tg = window.Telegram?.WebApp;
    // const isTelegramLink = url.includes("t.me") || url.startsWith("tg://");
    // if (isTelegramLink) {
    //   tg.openTelegramLink(url);
    // } else {
    //   tg.openLink(url);
    // }
  };

  return (
    <NewProfileLayout
      value={value}
      setValue={setValue}
      activeTeam={activeTeam}
      handleChangeButton={handleChangeButton}
      isEditing={isEditing}
      user={user}
      refField={refField}
      handleWithdrawalButton={handleWithdrawalButton}
      handleShareButton={handleShareButton}
      handleCopyLinkButton={handleCopyLinkButton}
      copyStatus={copyStatus}
    />
  );
}
