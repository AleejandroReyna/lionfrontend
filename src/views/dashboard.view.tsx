import React, {FC, useState, useEffect} from 'react'
import { Breed } from '../services/breed.interface'
import { Dispatch } from 'redux'
import { setBreeds, setFavoriteBreed, setParentFavoriteBreed } from '../actions'
import { connect } from 'react-redux'
import { getBreedsService } from '../services/getBreeds.service'
import { getFavoriteBreedService } from '../services/getFavoriteBreed.service'
import {Container, Row, Col} from 'react-bootstrap'
import { DashboardSidebar } from '../components/dashboardSidebar'
import { BreedInfo } from '../components/breedInfo'
import { BreedSlider } from '../components/breedSlider'

interface State {
  breeds: Breed[] | null | undefined,
  favoriteBreed: Breed | null | undefined
}

interface DashboardProps {
  insertBreeds(breeds:Breed[]): void,
  setFav(breeds:Breed): void,
  setParentFav(breeds:Breed): void,
  breeds: Breed[] | null | undefined,
  favoriteBreed: Breed | null | undefined 
}

const Dashboard:FC<DashboardProps> = ({insertBreeds, breeds, favoriteBreed, setFav, setParentFav }:DashboardProps) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      if(!breeds && loading) {
        let request = await getBreedsService()
        if("errors" in request) {
          console.log(request)
        } else {
          insertBreeds(request)
          let favoriteRequest = await getFavoriteBreedService()
          if(("breed" in favoriteRequest)) {
            let {breed, parent} = favoriteRequest
            if(parent) {
              let filteredParent = request.filter(_breed => _breed.name === parent)
              if(filteredParent.length > 0) {
                const { subBreeds } = filteredParent[0]
                if(subBreeds) {
                  let filteredBreed = subBreeds.filter(_sub => _sub.name === breed)
                  if(filteredBreed.length > 0) {
                    setFav(filteredBreed[0])
                    setParentFav(filteredParent[0])
                  } else {
                    setFav(filteredParent[0])
                  }
                } else {
                  setFav(filteredParent[0])
                }
              }
            } else{
              let filteredBreed = request.filter(_breed => _breed.name === breed)
              if(filteredBreed.length > 0) {
                setFav(filteredBreed[0])
              }
            }
          }
        }
      }
    }
    fetchData()
    setLoading(false)
  }, [loading])
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <DashboardSidebar />
        </Col>
        <Col xs={8}>
          <BreedInfo />
          <BreedSlider />
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state:State) => {
  return {
    breeds: state.breeds,
    favoriteBreed: state.favoriteBreed
  }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    insertBreeds: (breeds:Breed[]) => {
      dispatch(setBreeds(breeds))
    },
    setFav: (breed:Breed) => {
      dispatch(setFavoriteBreed(breed))
    },
    setParentFav: (breed:Breed) => {
      dispatch(setParentFavoriteBreed(breed))
    }
  }
}

export const DashboardScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)