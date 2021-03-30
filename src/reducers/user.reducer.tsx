import { User } from '../services/user.interface'
import { SET_USER, CLEAR_USER } from '../actions'

const initialState:null | User = null

interface actionInterface {
  type: string,
  user: User | null | undefined
}

export function user(state = initialState, action:actionInterface) {
  switch(action.type) {
    case SET_USER:
      return {...action.user}
    case CLEAR_USER:
      return null
    default:
      return state
  }
}