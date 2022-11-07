import styles from "./ThirdHomeComponent.module.scss";
import batum from "../../images/batum.svg";
import basket from "../../images/club.svg";
import Image from "next/image";
import usePlayers from "../../hooks/usePlayers";
import { useRouter } from "next/router";

const partners = [
  {
    name: "Boston",
    img: basket,
  },
  {
    name: "LA Clippers",
    img: basket,
  },
  {
    name: "LA Angeles",
    img: basket,
  },
  {
    name: "Minesotta",
    img: basket,
  },
];
const ThirdHomeComponent = () => {
  const router = useRouter();
  const players = usePlayers();
  return (
    <div className={styles.container}>
      <span className={styles.title}>Lorem ipsum</span>
      <div className={styles.playerContainer}>
        {players.map((player) => (
          <div
            className={styles.player}
            key={player._id}
            onClick={() => router.push(`/player/${player._id}`)}
          >
            <Image src={batum} alt="" height={350} />
            <span className={styles.name}>{player.firstName}</span>
            <span className={styles.name}>{player.lastName}</span>
          </div>
        ))}
      </div>
      <span className={styles.subtitle}>Partners</span>
      <div className={styles.clubContainer}>
        {partners.map((club) => (
          <div className={styles.player} key={club.name}>
            <Image src={club.img} alt="" width={300} />
            <span className={styles.name}>{club.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdHomeComponent;
