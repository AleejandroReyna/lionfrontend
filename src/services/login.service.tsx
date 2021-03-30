import { Errors } from './errors.interface'
import { User } from './user.interface'

interface Params {
  username: string,
  password: string
}

export const loginService = async ({username, password}:Params):Promise<Errors | User> => {
  try {
    const request = await fetch(`${process.env.REACT_APP_LOGIN_URL}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
    const response = await request.json()
    let _response:User | Errors = {...response}
    return _response
  } catch(e) {
    return {errors: [{field: "", error: `${e}`}]}
  }
}