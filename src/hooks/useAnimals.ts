import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";

export const useAnimals = () => {
  const animalsFromLocalStorage: IAnimal[] = JSON.parse(
    localStorage.getItem("animals") || "[]"
  );
  const [animals, setAnimals] = useState<IAnimal[]>(animalsFromLocalStorage);

  const getAnimalById = (id: number) => {
    const animal = animals.find((animal) => animal.id === id);
    return animal;
  };

  const feedAnimal = (animal: IAnimal) => {
    const updatedAnimal = animals.map((a) => {
      if (a.id === animal.id) {
        return { ...animal, isFed: true, lastFed: Date() };
      } else {
        return a;
      }
    });
    localStorage.setItem("animals", JSON.stringify(updatedAnimal));
    setAnimals(updatedAnimal);
    console.log(updatedAnimal);
  };

  useEffect(() => {
    if (localStorage.getItem("animals")) return;
    const getData = async () => {
      const response = await axios.get<IAnimal[]>(
        "https://animals.azurewebsites.net/api/animals"
      );
      localStorage.setItem("animals", JSON.stringify(response.data));
      setAnimals(response.data);
    };
    getData();
  }, [animals]);
  return { animals, getAnimalById, feedAnimal };
};
