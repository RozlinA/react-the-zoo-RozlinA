import { IAnimal } from "../models/IAnimal"
import "./../components/ShowAnimals.css"

interface IShowAnimalProps {
  animal: IAnimal;
}

export const ShowAnimals = ({animal}: IShowAnimalProps) => {
  return <>
    {/* <section className="animals-section">
      <section className="animal-item"> */}
        <h3>{animal.name}</h3>
        <img src={animal.imageUrl} alt={animal.name} />
        <p>{animal.isFed ? "I'm happy" : "I'm hungry!"}</p>
        <button>Read more</button>
      {/* </section>
    </section> */}
  </>
}