import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { DashboardScreen } from './views/dashboard.view'
import { LoginScreen } from './views/login.view'
import { SignupScreen } from './views/singup.view'

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/signup/">
        <SignupScreen />
      </Route>
      <Route path="/login/">
        <LoginScreen />
      </Route>
      <Route exact path="/">
        <DashboardScreen />
      </Route>
    </Switch>
  </Router>
)