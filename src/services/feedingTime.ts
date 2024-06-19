import { IAnimal } from "../models/IAnimal";

export const feedingTime = (animal: IAnimal) => {
  let hoursSinceLastFed = 0;

  const lastFed = new Date(animal.lastFed);
  const currentDate = new Date();
  hoursSinceLastFed = (currentDate.getTime() - lastFed.getTime()) / 3600000;

  return hoursSinceLastFed >= 3;
};
