import { useEffect, useState } from "react";
import { DirectorService } from "../services/director.service";
import { IDirector } from "../types/IDirector";

const useDirectors = () => {
  const [allDirectors, setAllDirectors] = useState<IDirector[]>([]);
  useEffect(() => {
    DirectorService.getDirectors().then((res) => {
      setAllDirectors(res?.data);
    });
  }, []);

  return allDirectors;
};

export default useDirectors;
