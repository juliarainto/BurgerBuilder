import React from 'react'
import * as containers from '../../../styled/styledNav'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
  <containers.Toolbar>
    <div>MENU</div>
    <Logo height="80%" margin="0" />
    <containers.ToolbarNav>
      <NavigationItems />
    </containers.ToolbarNav>
  </containers.Toolbar>
)

export default toolbar
