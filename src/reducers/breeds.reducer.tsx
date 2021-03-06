import { Breed } from '../services/breed.interface'
import { SET_BREEDS } from '../actions'

const initialState: Breed[] | null = null

interface Action {
  type: string,
  breeds: Breed[]
}

export function breeds(state = initialState, action:Action) {
  switch(action.type) {
    case SET_BREEDS:
      return [...action.breeds]
    default:
      return state
  }
}