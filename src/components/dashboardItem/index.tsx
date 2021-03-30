import { Breed } from "../../services/breed.interface"
import { ListItem } from '../listItem'

interface Props {
  breed: Breed
}

export const DashboardItem = ({breed} : Props) => {
  console.log(breed.subBreeds)
  return (
    <>
      <ListItem breed={breed} />
      {breed.subBreeds &&
        breed.subBreeds.map(subBreed => 
          <ListItem breed={subBreed} parent={breed} />
        )
      }
    </>
  )
}