import React, {useState, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Breed } from '../../services/breed.interface'

interface State {
  selectedBreed: Breed,
  parentSelectedBreed: Breed
}

interface Props {
  selectedBreed?: Breed,
  parentSelectedBreed?: Breed
}

const Info = ({selectedBreed, parentSelectedBreed}:Props) => {
  
  if(selectedBreed) {
    return (
      <Container>
        <Row>
          {parentSelectedBreed &&
            <Col xs={4}>
              <Card className="mt-4">
                <Card.Body>
                  <small>Parent Breed:</small>
                  <h4>{parentSelectedBreed.name}</h4>
                </Card.Body>
              </Card>
            </Col>
          }
          <Col xs={4}>
            <Card className="mt-4">
              <Card.Body>
                <small>Selected Breed:</small>
                <h4>{selectedBreed.name}</h4>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
  return null
}

const mapStateToProps = (state:State) => {
  return {
    selectedBreed: state.selectedBreed,
    parentSelectedBreed: state.parentSelectedBreed
  }
}

export const BreedInfo = connect(
  mapStateToProps, null
)(Info)