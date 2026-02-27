import type {
  NewuserBalanseStoreNameProps,
  NewInfoPersonNameProps,
  NewSelectorProps,
  NewUserNameProps,
} from "@/shared/lib/store/types";
import styles from "./NewHeader.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NewHeaderName } from "./ui/NewHeaderName";
import { NewButtonUi } from "@/shared/ui/NewButtonUi";
import { useNewTonConnect } from "./model/hooks/useNewTonConnect";
import { NewHeaderWallet } from "./ui/NewHeaderWallet";
// import { useFetchUser } from "@/shared/api/newFetchUser/model/hooks/useFetchUser";

export function NewHeader() {
  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );
  const userBalanse = useSelector(
    (state: NewuserBalanseStoreNameProps) => state.userBalanseName.userBalanse,
  );
  const person = useSelector(
    (state: NewInfoPersonNameProps) => state.infoPersonName.infoPerson,
  );
  const user = useSelector(
    (state: NewUserNameProps) => state.userUserName.user,
  );
  // const { data: user } = useFetchUser();

  const navigate = useNavigate();

  const { openWallet, isConnected, isWalletError, isWalletOpenModal } =
    useNewTonConnect({ user });

  console.log(user);

  const handleClickToProfile = () => {
    navigate("/profile");
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <NewButtonUi
            type="button"
            size="textXS"
            variant="buttonUiText"
            onClickButton={handleClickToProfile}
          >
            <NewHeaderName
              activeTeam={activeTeam}
              clan={userBalanse}
              user={person}
            />
          </NewButtonUi>
          <NewHeaderWallet
            isConnectWallet={isConnected}
            openWallet={openWallet}
            activeTeam={activeTeam}
            userBalanse={userBalanse}
            userMain={user}
          />
          {isWalletError && (
            <div className={styles.header__error}>
              <span className={styles.header__errorText}>{isWalletError}</span>
            </div>
          )}
          {isWalletOpenModal && <div className={styles.header__blur}></div>}
        </div>
      </div>
    </header>
  );
}
