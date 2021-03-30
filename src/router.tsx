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
import { MainHeader } from './components/mainHeader'


export const AppRouter:FC = () => (
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
