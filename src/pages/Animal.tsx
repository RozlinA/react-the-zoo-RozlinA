import { useParams } from "react-router-dom";
import { useAnimals } from "../hooks/useAnimals"
import { feedingTime } from "../services/feedingTime";

export const Animal = () => {
  const {getAnimalById, feedAnimal} = useAnimals();

  const {animalId} = useParams();


  let animal;
  if (animalId) {
   animal = getAnimalById(+animalId);
  }

  let isAnimalFed;
  if (animal){
    isAnimalFed = feedingTime(animal);
  }
  

  console.log("ANIMAL:", animal);

  // let hoursSinceLastFed = 0;

  // if (animal){
  //   const lastFed = new Date(animal.lastFed);
  //   const currentDate = new Date();
  //   hoursSinceLastFed = ((currentDate.getTime()) - (lastFed.getTime())) / 3600000;

  //   // if(hoursSinceLastFed > 3){
  //   //   animal.isFed = false;
  //   // }
  // }

  

  console.log("Hours:", isAnimalFed);
  

  return <>
    {animal && <>
      <h2>{animal.name}</h2>
        <p>Födelseår: {animal.yearOfBirth}</p>
        <img src={animal.imageUrl} alt={animal.name} />
        <p>{animal.shortDescription}</p>
        <p>Fakta: {animal.longDescription}</p>
        <button onClick={() => feedAnimal(animal)} disabled={!isAnimalFed}>Mata {animal.name}</button>
        {!isAnimalFed && (
        <>
          <p>Tack! Nu är {animal.name} mätt igen :)</p>
          <p>Senast matad: {animal.lastFed}</p>
        </>
      )}
    </>}
  </>
}