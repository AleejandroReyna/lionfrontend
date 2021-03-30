import React, { useState, FC } from 'react'
import { signupService } from '../services/signup.service'
import { useHistory } from 'react-router-dom'
import { Error } from '../services/errors.interface'

export const SignupScreen:FC = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [errors, setErrors] = useState<Error[]>([])
  const history = useHistory()

  const submit = async () => {
    setSubmitting(true)
    const request = await signupService({username, password})
    if("id" in request) {
      history.push("/login/")
    } else if("errors" in request) {
      setErrors(request.errors)
    }
    setSubmitting(false)
  }

  return (
    <>
      {errors &&
        <ul>
          {errors.map((error, index) => 
            <li key={index} >{error.field} - {error.error}</li>  
          )}
        </ul>
      }
      <div>Signup</div>
      <input 
        type="text"
        value={username}
        placeholder="username"
        onChange={e => setUsername(e.target.value)} />
      <br/>
      <input 
        type="password" 
        value={password}
        placeholder="password"
        onChange={e => setPassword(e.target.value)} />
      <br/>
      <input
        type="password" 
        value={passwordConfirmation}
        placeholder="passwordConfirmation"
        onChange={e => setPasswordConfirmation(e.target.value)} />
      <br/>
      <button
        disabled={!username || !password || !passwordConfirmation || password !== passwordConfirmation || submitting}
        onClick={submit}
      >Signup</button>
    </>
  )
}