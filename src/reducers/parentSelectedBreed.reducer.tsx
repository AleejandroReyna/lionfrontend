import { Breed } from '../services/breed.interface'
import { SET_PARENT_SELECTED_BREED, CLEAR_PARENT_SELECTED_BREED } from '../actions'

const initialState:Breed | null = null

interface Action {
  type: string,
  breed: Breed
}

export function parentSelectedBreed(state = initialState, action:Action) {
  switch(action.type) {
    case SET_PARENT_SELECTED_BREED:
      return {...action.breed}
    case CLEAR_PARENT_SELECTED_BREED:
      return null
    default:
      return state
  }
}