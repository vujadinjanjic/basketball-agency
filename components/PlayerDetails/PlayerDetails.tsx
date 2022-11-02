import Image from "next/image";
import styles from "./PlayerDetails.module.scss";
import profile from "../../images/batum.svg";

const PlayerDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.playerDetails}>
        <Image alt="" src={profile} className={styles.image} />
        <div className={styles.details}>
          <div>
            <span className={styles.name}> JOHN DOE</span>
            <div className={styles.about}>
              <span className={styles.first}>Visina:</span>
              <span className={styles.second}>197cm</span>
            </div>
            <div className={styles.about}>
              <span className={styles.first}>Tezina:</span>
              <span className={styles.second}>98kg</span>
            </div>
            <div className={styles.about}>
              <span className={styles.first}>Godine:</span>
              <span className={styles.second}>27</span>
            </div>
            <div className={styles.about}>
              <span className={styles.first}>Pozicija:</span>
              <span className={styles.second}>Playmaker</span>
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
