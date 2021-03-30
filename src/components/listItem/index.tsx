import React from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Breed } from '../../services/breed.interface'
import {EyeFill, StarFill, ArrowRight } from 'react-bootstrap-icons'

interface Props {
  breed: Breed,
  parent?: Breed
}

const Item = ({ breed, parent }:Props) => {
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
        <Button><EyeFill /></Button>{' '}
        <Button variant="outline-secondary"><StarFill /></Button>
      </div>
    </ListGroupItem>
  )
} 

export const ListItem = connect(
  null,
  null
)(Item)