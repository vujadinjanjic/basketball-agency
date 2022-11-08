import { collections } from "../database";
import { IDirector } from "../models/IDirector";

export const getDirectors = async () => {
  if (!collections.directors) {
    return;
  }
  return (await collections.directors
    .find({})
    .toArray()) as unknown as IDirector[];
};
