import { useParams } from "react-router-dom";
import { useAnimals } from "../hooks/useAnimals"

export const Animal = () => {
  const {getAnimalById, feedAnimal} = useAnimals();

  const {animalId} = useParams();


  let animal;
  if (animalId) {
   animal = getAnimalById(+animalId);
  }

  console.log("ANIMAL:", animal);

  if (animal){
    const lastFed = new Date(animal.lastFed);
    const currentDate = new Date();
    const hoursSinceLastFed = ((currentDate.getTime()) - (lastFed.getTime())) / 3600000;

    if(hoursSinceLastFed > 3){
      feedAnimal(animal);
    }
  }

  return <>
    {animal && <>
      <h2>{animal.name}</h2>
        <p>Födelseår: {animal.yearOfBirth}</p>
        <img src={animal.imageUrl} alt={animal.name} />
        <p>{animal.shortDescription}</p>
        <p>Fakta: {animal.longDescription}</p>
        <button onClick={() => feedAnimal(animal)} disabled={animal.isFed===true}>Mata {animal.name}</button>
        {animal.isFed === true && (
        <>
          <p>Tack! Nu är {animal.name} mätt igen :)</p>
          <p>Senast matad: {animal.lastFed}</p>
        </>
      )}
    </>}
  </>
}