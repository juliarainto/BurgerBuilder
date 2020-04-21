import React from 'react'
import * as containers from '../../../styled/styledNav'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/AuxHoc'

const sideDrawer = (props) => {
  return (
    console.log(props.open),
    (
      <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <containers.SideDrawer show={props.open}>
          <Logo height="11%" />

          <nav>
            <NavigationItems />
          </nav>
        </containers.SideDrawer>
      </Aux>
    )
  )
}

export default sideDrawer
