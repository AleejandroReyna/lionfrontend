import { Errors } from './errors.interface'

interface Params {
  username: string,
  password: string
}

export interface SuccessResponse {
  id: number,
  username: string,
  createdAt: string
}

export const signupService = async ({username, password}:Params):Promise<Errors | SuccessResponse> => {
  try {
    const request = await fetch(`${process.env.REACT_APP_SIGNUP_URL}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
    const response = await request.json()
    let _response:SuccessResponse | Errors = {...response}
    return _response
  } catch(e) {
    return {errors: [{field: "", error: `${e}`}]}
  }
}