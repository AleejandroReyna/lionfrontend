import React, {ReactElement } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { User } from '../../services/user.interface'
import { connect } from 'react-redux'

interface State {
  user: User | null | undefined
}

interface AnalyzerProps {
  user?: User | null | undefined,
  children: ReactElement,
  path: string
}


const Analyzer = ({children, user, path}:AnalyzerProps) => {
  return (
    <Route
        path={path}
        render={({ location }) =>  user ? children : <Redirect to={{pathname: "/login/", state: {from: location}}} />}
    />
  )
}

const mapStateToProps = (state:State) => {
  return {
    user: state.user
  }
}

export const PrivateRoute = connect(
  mapStateToProps,
  null
)(Analyzer)