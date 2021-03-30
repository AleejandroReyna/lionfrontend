import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { DashboardScreen } from './views/dashboard.view'
import { LoginScreen } from './views/login.view'
import { SignupScreen } from './views/singup.view'
import { PrivateRoute } from './components/privateRoute'

export const AppRouter = () => (
  <>
  <Router>
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/login/">Login</Link></li>
      <li><Link to="/signup/">Sign Up</Link></li>
    </ul>
    <Switch>
      <Route path="/signup/">
        <SignupScreen />
      </Route>
      <Route path="/login/">
        <LoginScreen />
      </Route>
      <PrivateRoute path="/">
        <DashboardScreen />
      </PrivateRoute>
    </Switch>
  </Router>
  </>
)