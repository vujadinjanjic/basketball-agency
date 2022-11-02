import styles from "./ThirdHomeComponent.module.scss";
import batum from "../../images/batum.svg";
import basket from "../../images/club.svg";
import Image from "next/image";

const players = [
  {
    name: "John Doe",
    img: batum,
  },
  {
    name: "Nikola Jokic",
    img: batum,
  },
  {
    name: "Sava Savanovic",
    img: batum,
  },
  {
    name: "Vujadin Janjic",
    img: batum,
  },
];

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
  return (
    <div className={styles.container}>
      <span className={styles.title}>Lorem ipsum</span>
      <div className={styles.playerContainer}>
        {players.map((player) => (
          <div className={styles.player} key={player.name}>
            <Image src={player.img} alt="" height={350} />
            <span className={styles.name}>{player.name}</span>
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
