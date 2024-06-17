import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";

export const useAxios = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animals.length > 0) return;
    const getData = async () => {
      const response = await axios.get<IAnimal[]>(
        "https://animals.azurewebsites.net/api/animals"
      );
      localStorage.setItem("animals", JSON.stringify(response.data));
      setAnimals(response.data);
    };
    getData();
  }, [animals]);
  return { animals };
};
