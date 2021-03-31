import { Errors } from './errors.interface'

interface Response {
  breed: string,
  parent: string | null
}

export const getFavoriteBreedSerice = async ():Promise<Response | Errors> => {
  try {
    const token = localStorage.getItem("token")
    let request = await fetch(`${process.env.REACT_APP_GET_FAVORITE_URL}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const response:Response | Errors = await request.json()
    console.log(response)
    return response
  }catch(e) {
    return {errors: [{error: `${e}`, field: ""}]}
  }
}