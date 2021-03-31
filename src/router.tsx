import React, { FC, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom"
import { connect } from 'react-redux'
import { User } from './services/user.interface'
import { DashboardScreen } from './views/dashboard.view'
import { LoginScreen } from './views/login.view'
import { SignupScreen } from './views/singup.view'
import { PrivateRoute } from './components/privateRoute'
import { OnlyPublicRoute } from './components/onlyPublicRoute'
import { MainHeader } from './components/mainHeader'
import { Dispatch } from 'redux'
import { setUser } from './actions'

interface LoginProps {
  logUser(user: User): void
}

export const MainRouter:FC<LoginProps> = ({logUser}:LoginProps) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let username = localStorage.getItem("username")
    let token = localStorage.getItem("token")
    if(username && token) {
      logUser({username, token})
    }
    setLoading(false)
  }, [loading])

  if (loading) { return null }

  return (
    <Router>
      <MainHeader />
      <Switch>
        <OnlyPublicRoute path="/signup/">
          <SignupScreen />
        </OnlyPublicRoute>
        <OnlyPublicRoute path="/login/">
          <LoginScreen />
        </OnlyPublicRoute>
        <PrivateRoute path="/">
          <DashboardScreen />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    logUser: (user:User) => {
      dispatch(setUser(user))
    }
  }
}

export const AppRouter = connect(
  null,
  mapDispatchToProps
)(MainRouter)