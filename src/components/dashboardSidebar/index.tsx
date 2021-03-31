import React, {FC, useState, useEffect} from 'react'
import { Breed } from '../../services/breed.interface'
import { connect } from 'react-redux'
import { Card, Spinner, ListGroup } from 'react-bootstrap'
import {DashboardItem } from '../dashboardItem'
import './index.css'
 
interface SidebarProps {
  breeds?: Breed[] | null | undefined
}

interface State {
  breeds: Breed[] | null | undefined
}

const Sidebar:FC<SidebarProps> = ({ breeds }:SidebarProps) => {
  return (
    <Card className="mt-4 sidebar-card">
      <Card.Body>
        {breeds ?
          <ListGroup> 
            { breeds?.map(breed => <DashboardItem key={breed.name} breed={breed} />) }
          </ListGroup>
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