import React from 'react'
import * as containers from '../../../styled/styledNav'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import MenuIcon from '../../Logo/MenuIcon'

const toolbar = (props) => (
  <containers.Toolbar>
    <MenuIcon clicked={props.drawerToggle} height="80%" margin="0" />
    <Logo height="80%" margin="0" />
    <containers.ToolbarNav>
      <NavigationItems />
    </containers.ToolbarNav>
  </containers.Toolbar>
)

export default toolbar
