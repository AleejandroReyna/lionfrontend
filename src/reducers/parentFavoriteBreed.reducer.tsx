import { Breed } from '../services/breed.interface'
import { SET_PARENT_FAVORITE_BREED, CLEAR_PARENT_FAVORITE_BREED } from '../actions'

const initialState:Breed | null = null

interface Action {
  type: string,
  breed: Breed
}

export function parentFavoriteBreed(state = initialState, action:Action) {
  switch(action.type) {
    case SET_PARENT_FAVORITE_BREED:
      return {...action.breed}
    case CLEAR_PARENT_FAVORITE_BREED:
      return null
    default:
      return state
  }
}