import React, {useState, useEffect } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Breed } from '../../services/breed.interface'
import { StarFill, ArrowRight, EyeFill, CaretDownFill, CaretUpFill } from 'react-bootstrap-icons'

interface State {
  selectedBreed: Breed,
  parentSelectedBreed: Breed,
  favoriteBreed: Breed,
  parentFavoriteBreed: Breed
}

interface Props {
  selectedBreed?: Breed,
  parentSelectedBreed?: Breed,
  favoriteBreed?: Breed,
  parentFavoriteBreed?: Breed
}

const Info = ({selectedBreed, parentSelectedBreed, favoriteBreed, parentFavoriteBreed }:Props) => {
  console.log(favoriteBreed, parentFavoriteBreed)
  
  if(selectedBreed || favoriteBreed) {
    return (
      <Container fluid >
        <Row>
          {favoriteBreed &&
            <Col xs={6} sm={4} md={6} lg={4}>
              <Card className="mt-4">
                <Card.Body>
                  <small><StarFill color="gold" /> Favorite Breed:</small>
                  <h4>
                    {parentFavoriteBreed &&
                      <>{parentFavoriteBreed.name} <ArrowRight />{' '}</>
                    }
                    {favoriteBreed.name}</h4>
                </Card.Body>
              </Card>
            </Col>
          }
          {parentSelectedBreed &&
            <Col xs={6} sm={4} md={6} lg={4}>
              <Card className="mt-4">
                <Card.Body>
                  <small>Parent Breed:</small>
                  <h4>{parentSelectedBreed.name}</h4>
                </Card.Body>
              </Card>
            </Col>
          }
          {selectedBreed &&
            <Col xs={6} sm={4} md={6} lg={4}>
              <Card className="mt-4">
                <Card.Body>
                  <small>Selected Breed:</small>
                  <h4>{selectedBreed.name}</h4>
                </Card.Body>
              </Card>
            </Col>
          }
        </Row>
      </Container>
    )
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4 mb-5">Welcome to Lion Breeds</h1>
          <p>You can view dog breed photos when do you click the {' '}
            <Button size="sm"><EyeFill /></Button> in the left sidebar.</p>
          <p>If do you click in {' '}
            <Button size="sm" variant="secondary"><CaretDownFill /></Button> sub breeds of breed are showed.</p>
          <p>You can hide sub breeds with this button: <Button size="sm" variant="secondary"><CaretUpFill /></Button></p>
          <p>You can select a favorite breed! Use this button <Button size="sm" variant="outline-secondary"><StarFill /></Button></p>
          <p>That's it all, enjoy it!</p>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state:State) => {
  return {
    selectedBreed: state.selectedBreed,
    parentSelectedBreed: state.parentSelectedBreed,
    favoriteBreed: state.favoriteBreed,
    parentFavoriteBreed: state.parentFavoriteBreed
  }
}

export const BreedInfo = connect(
  mapStateToProps, null
)(Info)