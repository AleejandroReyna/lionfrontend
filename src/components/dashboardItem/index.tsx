import React, { useState } from 'react'
import { Breed } from "../../services/breed.interface"
import { ListItem } from '../listItem'

interface Props {
  breed: Breed
}

export const DashboardItem = ({breed} : Props) => {
  const [showSubs, setShowSubs] = useState<boolean>(false)

  const toggleSubs = () => setShowSubs(!showSubs)

  return (
    <>
      <ListItem breed={breed} showSubs={showSubs} toggleSubs={toggleSubs} />
      {(breed.subBreeds && showSubs) &&
        breed.subBreeds.map(subBreed => 
          <ListItem breed={subBreed} parent={breed} key={subBreed.name} />
        )
      }
    </>
  )
}