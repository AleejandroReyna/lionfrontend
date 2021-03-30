import React, {FC, useState, useEffect} from 'react'
import { Breed } from '../services/breed.interface'
import { Dispatch } from 'redux'
import { setBreeds} from '../actions'
import { connect } from 'react-redux'
import { getBreedsService } from '../services/getBreeds.service'

interface State {
  breeds: Breed[] | null | undefined,
  favoriteBreed: Breed | null | undefined
}

interface DashboardProps {
  insertBreeds(breeds:Breed[]): void,
  breeds: Breed[] | null | undefined,
  favoriteBreed: Breed | null | undefined 
}

const Dashboard:FC<DashboardProps> = ({insertBreeds, breeds, favoriteBreed }:DashboardProps) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      if(!breeds && loading) {
        let request = await getBreedsService()
        if("errors" in request) {
          console.log("errors here")
        } else {
          insertBreeds(request)
        }
      }
    }
    fetchData()
    setLoading(false)
  }, [loading])
  return (
    <>
    <div>Dashboard</div>
      {loading ?
        <span>loading</span>
        :
        <ul>
        {breeds?.map(breed => 
          <li key={breed.name}>{breed.name}
            {breed?.subBreeds &&
              <ul key={`subs-${breed.name}`}>
                {breed?.subBreeds?.map(sub =>
                  <li key={sub.name} >{sub.name}</li>
                )}
              </ul>
            }
          </li>
        )}
        </ul>
      }
    </>
  )
}

const mapStateToProps = (state:State) => {
  return {
    breeds: state.breeds,
    favoriteBreed: state.favoriteBreed
  }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    insertBreeds: (breeds:Breed[]) => {
      dispatch(setBreeds(breeds))
    }
  }
}

export const DashboardScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)