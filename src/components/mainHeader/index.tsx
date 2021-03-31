import React, { FC } from 'react'
import {
  Link, useHistory
} from "react-router-dom"
import { connect } from 'react-redux'
import { User } from '../../services/user.interface'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import { Dispatch } from 'redux'
import { clearUser } from '../../actions'
import './index.css'

interface State {
  user: User | null | undefined
}

interface HeaderProps {
  user?: User | null | undefined,
  removeUser?(): void
}

const BackHeader:FC<HeaderProps> = ({user, removeUser}:HeaderProps) => {
  const history = useHistory()

  const logout = () => {
    if(removeUser) {
      localStorage.clear()
      removeUser()
      history.push('login')
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Lion Breeds</Navbar.Brand>
      <Nav className="ml-auto custom-navbar">
        {user ?
          <>
              <NavItem>
                  <Link to="/" className="nav-link">Dashboard</Link>
              </NavItem>
              <NavItem>
                  <Button variant="outline-secondary" onClick={logout}>Logout</Button>
              </NavItem>
          </>
      :   
          <>
              <NavItem>
                  <Link to="/login/" className="nav-link">Login</Link>
              </NavItem>
              <NavItem>
                  <Link to="/signup/" className="nav-link">Singup</Link>
              </NavItem>
          </>
        }
      </Nav>
    </Navbar>
  )
}

const mapStateToProps = (state:State) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    removeUser: () => {
      dispatch(clearUser())
    }
  }
}

export const MainHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackHeader)

export default BackHeader