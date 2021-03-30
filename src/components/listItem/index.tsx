import React from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Breed } from '../../services/breed.interface'
import {EyeFill, StarFill, ArrowRight } from 'react-bootstrap-icons'
import { setSelectedBreed } from '../../actions'
import { Dispatch } from 'redux'

interface Props {
  breed: Breed,
  parent?: Breed,
  setBreed(breed:Breed): void 
}

const Item = ({ breed, parent, setBreed }:Props) => {

  return (
    <ListGroupItem className="d-flex align-items-center justify-content-between">
      <div>
        {parent &&
          <>
          <span>{parent.name}</span>{' '}<ArrowRight />{' '}
          </>
        }
        <span>{breed.name}</span>
      </div>
      <div>
        <Button onClick={() => {setBreed(breed)}}><EyeFill /></Button>{' '}
        <Button variant="outline-secondary"><StarFill /></Button>
      </div>
    </ListGroupItem>
  )
} 

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    setBreed: (breed:Breed) => {
      dispatch(setSelectedBreed(breed))
    }
  }
}

export const ListItem = connect(
  null,
  mapDispatchToProps
)(Item)