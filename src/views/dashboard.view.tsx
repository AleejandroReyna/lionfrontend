import React, {FC, useState, useEffect} from 'react'
import { Breed } from '../services/breed.interface'
import { Dispatch } from 'redux'
import { setBreeds} from '../actions'
import { connect } from 'react-redux'
import { getBreedsService } from '../services/getBreeds.service'
import {Container, Row, Col} from 'react-bootstrap'
import { DashboardSidebar } from '../components/dashboardSidebar'
import { BreedInfo } from '../components/breedInfo'

interface State {
  breeds: Breed[] | null | undefined,
  favoriteBreed: Breed | null | undefined
}

interface DashboardProps {
  insertBreeds(breeds:Breed[]): void,
  breeds: Breed[] | null | undefined,
  favoriteBreed: Breed | null | undefined 
}

const Dashboard:FC<DashboardProps> = ({insertBreeds, breeds, favoriteBreed }:DashboardProps) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      if(!breeds && loading) {
        let request = await getBreedsService()
        if("errors" in request) {
          console.log("errors here")
        } else {
          insertBreeds(request)
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
    }
  }
}

export const DashboardScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)