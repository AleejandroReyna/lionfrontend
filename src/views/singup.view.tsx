import React, { useState, FC } from 'react'
import { signupService } from '../services/signup.service'
import { useHistory } from 'react-router-dom'
import { Error } from '../services/errors.interface'
import {Card, Container, Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap'

export const SignupScreen:FC = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [errors, setErrors] = useState<Error[]>([])
  const history = useHistory()

  const submit = async () => {
    setSubmitting(true)
    const request = await signupService({username, password})
    if("id" in request) {
      history.push("/login/")
    } else if("errors" in request) {
      setErrors(request.errors)
    }
    setSubmitting(false)
  }

  return (
    <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card className="mt-4">
              <Card.Header className="text-center">
                  Signup
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
                  <FormGroup>
                    <label htmlFor="passwordConf">Password Confirmation: </label>
                    <FormControl 
                          type="password" 
                          value={passwordConfirmation} 
                          onChange={e => setPasswordConfirmation(e.target.value)}
                          disabled={submitting} />
                  </FormGroup>
                  <Button 
                    onClick={submit} 
                    disabled={ !username || !password || !passwordConfirmation || submitting || password !== passwordConfirmation }
                    >Signup</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}