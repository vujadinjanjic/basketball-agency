import { useEffect, useState } from "react";
import { PlayerServicve } from "../services/players.services";
import { IPlayer } from "../types/IPlayer";

const usePlayers = () => {
  const [allPlayers, setAllPlayers] = useState<IPlayer[]>([]);
  useEffect(() => {
    PlayerServicve.getPlayers().then((res) => {
      setAllPlayers(res?.data);
    });
  }, []);

  return allPlayers;
};

export default usePlayers;
