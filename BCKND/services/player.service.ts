import { collections } from "../database";
import { IPlayer } from "../models/IPlayer";

export const getPlayers = async () => {
    if (!collections.users) {
      return;
    }
    return (await collections.users
      .find({})
      .toArray()) as unknown as IPlayer[];
  };
  