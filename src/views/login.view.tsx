import React, { useState } from 'react'
import { connect } from 'react-redux'
import { User } from '../services/user.interface'
import { Dispatch } from 'redux'
import { setUser } from '../actions'

interface LoginProps {
  logUser(user: User): void,
  user: User | null | undefined
}

interface State {
  user: User | null | undefined
}

const Login : React.FC<LoginProps> = ( {user, logUser}:LoginProps) => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [submitting, setSubmitting] = useState<boolean>(false)

  const submit = () => {
    console.log(username, password)
  }
  
  return (
    <>
      <div>Login</div>
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
      <button onClick={submit} disabled={!username || !password || submitting}>Login</button>
    </>
  )
}

const mapStateToProps = (state:State) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    logUser: (user:User) => {
      dispatch(setUser(user))
    }
  }
}

export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)