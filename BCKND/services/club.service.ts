import { collections } from "../database";
import { IClub } from "../models/IClub";

export const getClubs = async () => {
  if (!collections.clubs) {
    return;
  }
  return (await collections.clubs.find({}).toArray()) as unknown as IClub[];
};
