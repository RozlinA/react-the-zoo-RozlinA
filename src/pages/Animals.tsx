import { ShowAnimals } from "../components/ShowAnimals";
import { useAnimals } from "../hooks/useAnimals"
import "./Animals.css"

export const Animals = () => {
  const {animals} = useAnimals();

  return <>
    <section className="animals-section">
      <section className="animal-item">
        {animals.map((animal) => (
          <div key={animal.id} className="animal">
            <ShowAnimals animal={animal}></ShowAnimals>
          </div>
        ))}
      </section>
    </section>
  </>
}