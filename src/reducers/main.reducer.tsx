import { user } from './user.reducer'
import { breeds } from './breeds.reducer'
import { favoriteBreed } from './favoriteBreed.reducer'
import { selectedBreed } from './selectedBreed.reducer'
import { parentSelectedBreed } from './parentSelectedBreed.reducer'
import { parentFavoriteBreed } from './parentFavoriteBreed.reducer'
import { combineReducers } from 'redux'

export const mainStore = combineReducers({
  user, 
  breeds,
  favoriteBreed,
  parentFavoriteBreed,
  selectedBreed,
  parentSelectedBreed
})