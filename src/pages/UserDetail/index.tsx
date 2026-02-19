import { getUserDetail } from "@/shared/lib/helpers/getUserDetail";
import { useParams } from "react-router";
import styles from "./index.module.scss";
import { ButtonBackCommunity } from "./ui/ButtonBackCommunity";
import { UserDatailItem } from "./ui/UserDatailItem";
import { useSelector } from "react-redux";
import type { NewSelectorProps } from "@/shared/lib/store/types";
import { Limited } from "./ui/Limited";

export default function UserDetail() {
  const { layerNumber, nickname } = useParams();
  const activeTeam = useSelector(
    (state: NewSelectorProps) => state.teamName.teamValue,
  );

  if (!nickname) return;

  const user = getUserDetail(nickname, Number(layerNumber));

  if (!user)
    return (
      <div className={styles.userDetail}>
        <span className={styles.userDetail__text}> User not found</span>
      </div>
    );

  // TODO: нужна отдельная ручка на конкретного пользака

  return (
    <div className={styles.userDetail__main}>
      <ButtonBackCommunity />
      <UserDatailItem layerNumber={Number(layerNumber)} nickname={nickname} />
      <Limited activeTeam={activeTeam} />
      <div className={styles.userDetail__shadow}></div>
    </div>
  );
}
