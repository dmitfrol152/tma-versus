import { NewButtonBack } from "../NewButtonBack";
import { NewNickName } from "../NewNickName";
import { NewRewards } from "../NewRewards";
import type { NewProfileLayoutProps } from "./types";
import styles from "./NewProfileLayout.module.scss";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { NewStatistics } from "../NewStatistics";
import { NewInfoStatisticsBlock } from "@/widgets/NewInfoStatisticsBlock";
import IconShare from "@shared/assets/images/svg/icon-share.svg?react";

export function NewProfileLayout({
  value,
  setValue,
  activeTeam,
  handleChangeButton,
  isEditing,
  user,
  refField,
  handleWithdrawalButton,
  handleShareButton,
  handleCopyLinkButton,
  copyStatus,
}: NewProfileLayoutProps) {
  return (
    <div className={styles.profileLayout}>
      <NewButtonBack />
      <NewNickName
        value={value}
        setValue={setValue}
        activeTeam={activeTeam}
        handleChangeButton={handleChangeButton}
        isEditing={isEditing}
        profileName={user.nickname}
        refField={refField}
      />
      <NewRewards
        activeTeam={activeTeam}
        balance={user.balance}
        totalRewards={user.total_rewards}
      />
      <div className={styles.profileLayout__withdrawal}>
        <NewButtonUi
          type="button"
          size="connectWallet"
          variant="connectWallet"
          className={styles.profileLayout__withdrawalButton}
          onClickButton={handleWithdrawalButton}
        >
          Withdrawal
        </NewButtonUi>
      </div>
      <NewStatistics activeTeam={activeTeam} user={user} />
      <div className={styles.profileLayout__info}>
        <NewInfoStatisticsBlock title="For you and your mate" amount="+500" />
        <NewInfoStatisticsBlock
          title="For you and your mate"
          amount="+3K with Telegram Premium"
        />
      </div>
      <div className={styles.profileLayout__buttons}>
        <NewButtonUi
          type="button"
          size="connectWallet"
          variant="connectWallet"
          className={styles.profileLayout__share}
          onClickButton={() => handleShareButton(user.invite_link)}
        >
          Share
        </NewButtonUi>
        <div className={styles.profileLayout__buttonShareBlock}>
          <NewButtonUi
            className={styles.profileLayout__buttonShare}
            type="button"
            size="walletBtn"
            variant="walletBtn"
            onClickButton={() => handleCopyLinkButton(user.invite_link)}
          >
            <IconShare className={styles.profileLayout__shareIcon} />
          </NewButtonUi>
        </div>
      </div>
      <div className={styles.profileLayout__shadow}></div>
      {copyStatus.type && (
        <div className={styles.profileLayout__copy}>
          <span className={styles.profileLayout__copyText}>
            {copyStatus.message}
          </span>
        </div>
      )}
    </div>
  );
}
