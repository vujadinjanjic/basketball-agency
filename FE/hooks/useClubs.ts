import { useEffect, useState } from "react";
import { ClubServicve } from "../services/club.services";
import { IClub } from "../types/IClub";

const useClubs = () => {
  const [allClubs, setAllClubs] = useState<IClub[]>([]);
  useEffect(() => {
    ClubServicve.getClubs().then((res) => {
      setAllClubs(res?.data);
    });
  }, []);

  return allClubs;
};

export default useClubs;
