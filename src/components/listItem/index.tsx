import React from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Breed } from '../../services/breed.interface'
import {EyeFill, StarFill, ArrowRight } from 'react-bootstrap-icons'
import { setSelectedBreed, setParentSelectedBreed, clearParentSelectedBreed } from '../../actions'
import { Dispatch } from 'redux'

interface Props {
  breed: Breed,
  parent?: Breed,
  setBreed(breed:Breed): void,
  setParent(breed:Breed): void,
  clearParent(): void
}

const Item = ({ breed, parent, setBreed, setParent, clearParent }:Props) => {

  const viewBreed = () => {
    setBreed(breed)
    if(parent) {
      setParent(parent)
    } else {
      clearParent()
    }
  }

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
        <Button onClick={viewBreed}><EyeFill /></Button>{' '}
        <Button variant="outline-secondary"><StarFill /></Button>
      </div>
    </ListGroupItem>
  )
} 

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    setBreed: (breed:Breed) => {
      dispatch(setSelectedBreed(breed))
    },
    setParent: (breed:Breed) => {
      dispatch(setParentSelectedBreed(breed))
    },
    clearParent: () => {
      dispatch(clearParentSelectedBreed())
    }
  }
}

export const ListItem = connect(
  null,
  mapDispatchToProps
)(Item)