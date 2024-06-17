import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal"
import "./../components/ShowAnimals.css"

interface IShowAnimalProps {
  animal: IAnimal;
}

export const ShowAnimals = ({animal}: IShowAnimalProps) => {
  const navigate = useNavigate();

  const handleclick = (id:number) => {
    navigate("/animals/" + id);
  }

  return <>
    <h3>{animal.name}</h3>
    <img src={animal.imageUrl} alt={animal.name} />
    <p>{animal.isFed ? "I'm happy" : "I'm hungry!"}</p>
    <button onClick={() => handleclick(animal.id)}>Read more</button>
  </>
}