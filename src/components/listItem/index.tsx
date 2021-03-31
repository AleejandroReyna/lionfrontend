import React, { useState } from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Breed } from '../../services/breed.interface'
import {EyeFill, StarFill, ArrowRight, CaretDownFill, CaretUpFill } from 'react-bootstrap-icons'
import { setSelectedBreed, setParentSelectedBreed, clearParentSelectedBreed } from '../../actions'
import { setFavoriteBreedService } from '../../services/setFavoriteBreed.service'
import { Dispatch } from 'redux'

interface Props {
  breed: Breed,
  parent?: Breed,
  setBreed(breed:Breed): void,
  setParent(breed:Breed): void,
  clearParent(): void,
  showSubs?: boolean,
  toggleSubs?(): void 
}

interface favoriteParams {
  breed: string,
  parent: string | null
}

const Item = ({ breed, parent, setBreed, setParent, clearParent, showSubs, toggleSubs }:Props) => {
  const [settingFavorite, setSettingFavorite] = useState<boolean>(false) 

  const viewBreed = () => {
    setBreed(breed)
    if(parent) {
      setParent(parent)
    } else {
      clearParent()
    }
  }

  const applyFavorite = async () => {
    setSettingFavorite(true)
    let params:favoriteParams = {breed: breed.name, parent: null}
    if(parent) {
      params.parent = parent.name
    }
    let request = await setFavoriteBreedService(params)
    if("id" in request) {
      //change favorite redux state here
    }
    setSettingFavorite(false)
  }

  return (
    <ListGroupItem className="d-flex align-items-center justify-content-between">
      <div>
        {'  '}
        {parent &&
          <ArrowRight />
        }
        {' '}<span>{breed.name}</span>{' '}
        {breed.subBreeds &&
          <Button variant="secondary" onClick={toggleSubs} size="sm">
            {showSubs ? <CaretUpFill /> : <CaretDownFill /> }
          </Button>
        }
      </div>
      <div>
        <Button onClick={viewBreed}><EyeFill /></Button>{' '}
        <Button variant="outline-secondary" onClick={applyFavorite} disabled={settingFavorite}><StarFill /></Button>
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