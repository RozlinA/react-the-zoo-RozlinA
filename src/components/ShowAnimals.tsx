import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal"
import "./../components/ShowAnimals.css"
import { feedingTime } from "../services/feedingTime";

interface IShowAnimalProps {
  animal: IAnimal;
}

export const ShowAnimals = ({animal}: IShowAnimalProps) => {
  const navigate = useNavigate();

  const handleclick = (id:number) => {
    navigate("/animals/" + id);
  }

  const isAnimalFed = feedingTime(animal);

  // let hoursSinceLastFed = 0;

  // if (animal){
  //   const lastFed = new Date(animal.lastFed);
  //   const currentDate = new Date();
  //   hoursSinceLastFed = ((currentDate.getTime()) - (lastFed.getTime())) / 3600000;

  // }

  return <>
    <h3>{animal.name}</h3>
    <img src={animal.imageUrl} alt={animal.name} />
    <p>{isAnimalFed ? "I'm hungry!" : "I'm happy"}</p>
    <button onClick={() => handleclick(animal.id)}>Read more</button>
  </>
}