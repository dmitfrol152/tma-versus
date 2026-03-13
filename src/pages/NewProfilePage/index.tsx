import { useSelector } from "react-redux";
import type {
  NewSelectorProps,
  NewInfoPersonNameProps,
  NewSelectorReferalLinkProps,
} from "@/shared/lib/store/types";
import { useNewInputManager } from "./model/hooks/useNewInputManager";
import { NewProfileLayout } from "./ui/NewProfileLayout";
import { useNewReferalCopyLink } from "./model/hooks/useNewReferalCopyLink";

export default function NewProfilePage() {
  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );
  const user = useSelector(
    (state: NewInfoPersonNameProps) => state.infoPersonName.infoPerson,
  );
  const referalLink = useSelector(
    (state: NewSelectorReferalLinkProps) =>
      state.referalLinkName.referalLinkValue.invite_link,
  );

  const { value, setValue, handleChangeButton, isEditing, refField } =
    useNewInputManager(user.nickname);

  const { handleCopyLinkButton, copyStatus, isOpenModalStatus } =
    useNewReferalCopyLink();

  const handleWithdrawalButton = () => {
    alert("click withdrawal");
  };

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
      isOpenModalStatus={isOpenModalStatus}
      referalLink={referalLink}
    />
  );
}
