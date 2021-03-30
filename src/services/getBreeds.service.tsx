import { Errors } from './errors.interface'
import { Breed } from './breed.interface' 

export const getBreedsService = async ():Promise<Breed[] | Errors> => {
  try {
    const token = localStorage.getItem("token")
    let request = await fetch(`${process.env.REACT_APP_DATA_URL}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    let response:Breed[] | Errors = await request.json()
    return response
  } catch (e) {
    return {errors: [{field: "", error: `${e}`}]}
  }
}