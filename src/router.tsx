import React, { FC } from 'react'
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

interface State {
  user: User | null | undefined
}

interface RouterProps {
  user?: User | null | undefined
}

export const MainRouter:FC<RouterProps> = ({user}:RouterProps) => (
  <>
  <Router>
    <ul>
      {user ?
        <li><Link to="/">Dashboard</Link></li>
      :
        <>
          <li><Link to="/login/">Login</Link></li>
          <li><Link to="/signup/">Sign Up</Link></li>
        </>
      }
    </ul>
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
  </>
)

const mapStateToProps = (state:State) => {
  return {
    user: state.user
  }
}

export const AppRouter = connect(
  mapStateToProps,
  null
)(MainRouter)