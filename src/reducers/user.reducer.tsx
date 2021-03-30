import { User } from '../services/user.interface'
import { SET_USER, CLEAR_USER } from '../actions'

const initialState:undefined | User = undefined

interface Action {
  type: string,
  user: User | null | undefined
}

export function user(state = initialState, action:Action) {
  switch(action.type) {
    case SET_USER:
      return {...action.user}
    case CLEAR_USER:
      return undefined
    default:
      return state
  }
}