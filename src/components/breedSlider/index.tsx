import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"
import {Carousel, Card, Container, Row, Col, Spinner} from 'react-bootstrap'
import './index.css'
import { Breed } from '../../services/breed.interface'
import { breedImagesService } from '../../services/breedImages.service'

interface State {
  selectedBreed: Breed,
  parentSelectedBreed: Breed
}

interface Props {
  selectedBreed?: Breed,
  parentSelectedBreed?: Breed
}


interface Params {
  breed: string,
  parent: string | null
}

const PureSlider = ({selectedBreed, parentSelectedBreed}:Props) => {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if(selectedBreed) {
      const fetchImages = async () => {
        setLoading(true)
        let params:Params = {breed: selectedBreed.name, parent: null}
        if(parentSelectedBreed) {
          params.parent = parentSelectedBreed.name
        }
        const data = await breedImagesService(params)
        if(!("errors" in data)) {
          setImages(data)
        }
        setLoading(false)
      }
      fetchImages()
    }
  }, [selectedBreed])

  if(selectedBreed) {

    return (
      <Container>
        <Row>
          <Col>
            <Card className="mt-4 carousel-card">
              <Card.Body>
                {loading ? 
                  <div className="loading-content">
                    <Spinner variant="primary" animation="border" />
                  </div>
                : 
                  <Carousel controls={false} className="carousel-controller">
                    {images &&
                      images.map((image, index) => 
                          <Carousel.Item className="carousel-item" key={`carousel-item-${index}`}>
                            <div className="image-container">
                              <img src={image} alt="" className="d-block"/>
                            </div>
                          </Carousel.Item>
                        )

                    }
                  </Carousel>
                }
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