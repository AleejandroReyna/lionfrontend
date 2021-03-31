import { User } from './services/user.interface'
import { Breed } from './services/breed.interface'

export const SET_USER:string = 'SET_USER'
export const CLEAR_USER:string = 'CLEAR_USER'
export const SET_BREEDS:string = 'SET_BREEDS'
export const SET_FAVORITE_BREED:string = 'SET_FAVORITE_BREED'
export const SET_PARENT_FAVORITE_BREED:string = 'SET_PARENT_FAVORITE_BREED'
export const CLEAR_PARENT_FAVORITE_BREED:string = 'CLEAR_PARENT_FAVORITE_BREED'
export const SET_SELECTED_BREED:string = 'SET_SELECTED_BREED'
export const SET_PARENT_SELECTED_BREED:string = 'SET_PARENT_SELECTED_BREED'
export const CLEAR_PARENT_SELECTED_BREED:string = 'CLEAR_PARENT_SELECTED_BREED'

export function setUser(user:User) {
  return {type: SET_USER, user}
}

export function clearUser() {
  return {type: CLEAR_USER}
}

export function setBreeds(breeds:Breed[]) {
  return {type: SET_BREEDS, breeds}
}

export function setFavoriteBreed(breed:Breed) {
  return {type: SET_FAVORITE_BREED, breed}
}

export function setSelectedBreed(breed:Breed) {
  return {type: SET_SELECTED_BREED, breed}
}

export function setParentSelectedBreed(breed:Breed) {
  return {type: SET_PARENT_SELECTED_BREED, breed}
}

export function clearParentSelectedBreed() {
  return {type: CLEAR_PARENT_SELECTED_BREED}
}

export function setParentFavoriteBreed(breed:Breed) {
  return {type: SET_PARENT_FAVORITE_BREED, breed}
}

export function clearParentFavoriteBreed() {
  return {type: CLEAR_PARENT_FAVORITE_BREED}
}