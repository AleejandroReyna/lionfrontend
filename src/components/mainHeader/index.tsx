import React, { FC } from 'react'
import {
  Link
} from "react-router-dom"
import { connect } from 'react-redux'
import { User } from '../../services/user.interface'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

interface State {
  user: User | null | undefined
}

interface HeaderProps {
  user?: User | null | undefined
}

const BackHeader:FC<HeaderProps> = ({user}:HeaderProps) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Nav className="ml-auto">
      {user ?
        <>
            <NavItem>
                <Link to="/" className="nav-link">Dashboard</Link>
            </NavItem>
            <NavItem>
                <Link to="/" className="nav-link">Logout</Link>
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

const mapStateToProps = (state:State) => {
  return {
    user: state.user
  }
}

export const MainHeader = connect(
  mapStateToProps,
  null
)(BackHeader)

export default BackHeader