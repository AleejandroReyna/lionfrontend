import { Breed } from '../services/breed.interface'
import { SET_FAVORITE_BREED } from '../actions'

const initialState:Breed | undefined | null = null

interface Action {
  type: string,
  breed: Breed
}

export function favoriteBreed(state = initialState, action:Action) {
  switch(action.type) {
    case SET_FAVORITE_BREED:
      return {...action.breed}
    default:
      return state
  }
}