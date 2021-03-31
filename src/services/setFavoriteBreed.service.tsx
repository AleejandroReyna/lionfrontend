import { Errors } from './errors.interface'

interface Props {
  breed: string,
  parent: string | null
}

interface Response {
  id: number,
  status: string
}

export const setFavoriteBreedService = async (props:Props):Promise<Response | Errors> => {
  try{
    const token = localStorage.getItem("token")
    let request = await fetch(`${process.env.REACT_APP_SET_FAVORITE_URL}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(props)
    })
    let response:Response | Errors = await request.json() 
    return response
  } catch(e) {
    return {errors: [{error: `${e}`, field: ""}]}
  }
}