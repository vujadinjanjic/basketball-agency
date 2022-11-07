import Image from "next/image";
import styles from "./PlayerDetails.module.scss";
import profile from "../../images/batum.svg";
import { IPlayer } from "../../types/IPlayer";
import { useTranslations } from "use-intl";

interface IPlayerDetailsProps {
  player: IPlayer;
}

const PlayerDetails = ({ player }: IPlayerDetailsProps) => {
  const t: any = useTranslations("playerDetails");

  return (
    <div className={styles.container}>
      <div className={styles.playerDetails}>
        <Image alt="" src={profile} className={styles.image} />
        <div className={styles.details}>
          <div>
            <span className={styles.name}> {player.lastName}</span>
            <div className={styles.about}>
              <span className={styles.first}>{t("height")}</span>
              <span className={styles.second}>{player?.height}cm</span>
            </div>
            <div className={styles.about}>
              <span className={styles.first}>{t("weight")}</span>
              <span className={styles.second}>{player?.weight}kg</span>
            </div>
            <div className={styles.about}>
              <span className={styles.first}>{t("age")}</span>
              <span className={styles.second}>{player?.age}</span>
            </div>
            <div className={styles.about}>
              <span className={styles.first}>{t("position")}</span>
              <span className={styles.second}>{player?.position}</span>
            </div>
            <div className={styles.about}>
              <span className={styles.first}>Novo:</span>
              <span className={styles.second}>Nesto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
