import { Breed } from '../services/breed.interface'
import { SET_SELECTED_BREED } from '../actions'

const initialState:Breed | undefined | null = null

interface Action {
  type: string,
  breed: Breed
}

export function selectedBreed(state = initialState, action:Action) {
  switch(action.type) {
    case SET_SELECTED_BREED:
      return {...action.breed}
    default:
      return state
  }
}