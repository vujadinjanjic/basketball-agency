import styles from "./PlayersComponent.module.scss";
import Image from "next/image";
import player from "../../images/batum.svg";
import director from "../../images/director.svg";

const players = [
  {
    name: "Joca Mikic",
    img: player,
  },
  {
    name: "Steva Jokic",
    img: player,
  },
  {
    name: "Joca Mikic",
    img: player,
  },
  {
    name: "Joca Mikic",
    img: player,
  },
  {
    name: "Steva Jokic",
    img: player,
  },
  {
    name: "Joca Mikic",
    img: player,
  },
  {
    name: "Joca Mikic",
    img: player,
  },
  {
    name: "Steva Jokic",
    img: player,
  },
];

const PlayersComponent = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Lorem ipsum</span>
      <div className={styles.playerContainer}>
        {players.map((player) => (
          <div className={styles.player} key={player.name}>
            <Image alt="" src={player.img} className={styles.img} />
            <span>{player.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersComponent;
