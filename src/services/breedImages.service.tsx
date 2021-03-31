import { Errors } from "./errors.interface"

interface Props {
  breed: string,
  parent?: string | null
}

export const breedImagesService = async({breed, parent = null}:Props):Promise<Errors | string[]> => {
  
  try{
    let uri: string
    if(parent) {
      uri = `https://dog.ceo/api/breed/${parent}/${breed}/images/random/6`
    } else {
      uri = `https://dog.ceo/api/breed/${breed}/images/random/6`
    }
    let request = await fetch(uri, {method: 'get'})
    if(request.status === 200) {
      let response = await request.json()
      return [...response.message]
    } else {
      return {errors: [{error: `Status code ${request.status}`, field: ""}]}
    }
  } catch(e) {
    return {errors: [{error: `${e}`, field: ""}]}
  }
}