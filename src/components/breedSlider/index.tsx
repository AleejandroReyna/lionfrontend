import React, {useState} from 'react'
import { connect } from "react-redux"
import {Carousel, Card, Container, Row, Col} from 'react-bootstrap'
import './index.css'
import { Breed } from '../../services/breed.interface'

interface State {
  selectedBreed: Breed,
  parentSelectedBreed: Breed
}

interface Props {
  selectedBreed?: Breed,
  parentSelectedBreed?: Breed
}

const PureSlider = ({selectedBreed, parentSelectedBreed}:Props) => {

  if(selectedBreed) {

    return (
      <Container>
        <Row>
          <Col>
            <Card className="mt-4 carousel-card">
              <Card.Body>
              <Carousel controls={false} className="carousel-controller">
                <Carousel.Item className="carousel-item">
                  <div className="image-container">
                    <img src="https://place-hold.it/600x400" alt="" className="d-block"/>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                  <div className="image-container">
                    <img src="https://place-hold.it/600x400" alt="" className="d-block"/>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                  <div className="image-container">
                    <img src="https://place-hold.it/600x400" alt="" className="d-block"/>
                  </div>
                </Carousel.Item>
              </Carousel>
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

export const BreedSlider = connect(
  mapStateToProps, null
)(PureSlider)