import React, {FC, useState, useEffect} from 'react'
import { Breed } from '../../services/breed.interface'
import { connect } from 'react-redux'
import { Card, Spinner, ListGroup, FormControl } from 'react-bootstrap'
import {DashboardItem } from '../dashboardItem'
import './index.css'
 
interface SidebarProps {
  breeds?: Breed[] | null | undefined
}

interface State {
  breeds: Breed[] | null | undefined
}

const Sidebar:FC<SidebarProps> = ({ breeds }:SidebarProps) => {
  const [textFilter, setTextFilter] = useState<string>("")

  const getBreeds = ():Breed[] => {
    if(breeds) {
      if(textFilter) {
        let firstFilter = breeds.filter(breed => breed.name.includes(textFilter))
        return [...firstFilter]
      }
      return breeds
    }
    return []
  }
  return (
    <Card className="mt-4 sidebar-card">
      <Card.Body>
        <FormControl 
          placeholder="Ex:// akita"
          value={textFilter}
          onChange={(e) => {setTextFilter(e.target.value)}}
        />
        {getBreeds()?
          <div className="list-group-container">
            <ListGroup> 
              { getBreeds().map(breed => <DashboardItem key={breed.name} breed={breed} />) }
            </ListGroup>
          </div>
        :
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        }
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = (state:State) => {
  return {
    breeds: state.breeds
  }
}


export const DashboardSidebar = connect(
  mapStateToProps,
  null
)(Sidebar)