import React from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Breed } from '../../services/breed.interface'

interface Props {
  breed: Breed,
  parent?: Breed
}

const Item = ({ breed, parent }:Props) => {
  return (
    <ListGroupItem className="d-flex align-items-center justify-content-between">
      <span>
        {parent &&
          parent.name + " " 
        }
        {breed.name}
      </span>
      <div>
        <Button>View</Button>{' '}
        <Button variant="outline-secondary">Favorite</Button>
      </div>
    </ListGroupItem>
  )
} 

export const ListItem = connect(
  null,
  null
)(Item)