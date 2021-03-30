import React, { useState } from 'react'
import { connect } from 'react-redux'
import { User } from '../services/user.interface'
import { Dispatch } from 'redux'
import { setUser } from '../actions'
import { loginService } from '../services/login.service'
import { Error } from '../services/errors.interface'
import { useHistory } from 'react-router-dom'
import {Card, Container, Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap'

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
  const [errors, setErrors] = useState<Error[]>([])
  const history = useHistory()

  const submit = async () => {
    setSubmitting(true)
    try {
      const request = await loginService({username, password})
      if("username" in request && "token" in request) {
        localStorage.setItem("username", request.username)
        localStorage.setItem("token", request.token)
        logUser(request)
        history.push("/")
      } else if("errors" in request) {
        setErrors(request.errors)
      }
    } catch(e) {
      if("errors" in e) {
        setErrors(e.errors)
      }
    }
    setSubmitting(false)
  }
  
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card className="mt-4">
              <Card.Header className="text-center">
                  Login
              </Card.Header>
              <Card.Body>
               {errors.length ?
                  <ul>
                    {errors.map((error, index) => 
                      <li key={index} >{error.field} - {error.error}</li>  
                    )}
                  </ul>
                : null }
                <Form>
                  <FormGroup>
                    <label htmlFor="username">Username: </label>
                    <FormControl 
                          type="text" 
                          value={username} 
                          onChange={e => setUsername(e.target.value)}
                          disabled={submitting} />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="password">Password: </label>
                    <FormControl 
                          type="password" 
                          value={password} 
                          onChange={e => setPassword(e.target.value)}
                          disabled={submitting} />
                  </FormGroup>
                  <Button onClick={submit} disabled={!username || !password || submitting}>Login</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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