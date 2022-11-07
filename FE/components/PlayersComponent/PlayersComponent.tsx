import styles from "./PlayersComponent.module.scss";
import Image from "next/image";
import batum from "../../images/batum.svg";
import director from "../../images/director.svg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IPlayer } from "../../types/IPlayer";
import usePlayers from "../../hooks/usePlayers";

const PlayersComponent = () => {
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
            <Image alt="" src={batum} className={styles.img} />
            <span>{player.firstName}</span>
            <span>{player.lastName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersComponent;
