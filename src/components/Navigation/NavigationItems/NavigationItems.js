import React from 'react'
import * as containers from '../../../styled/styledNav'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
import { NavLink } from 'react-router-dom'

const navigationItems = (props) => {

  return (
    <containers.NavigationItems>
      <NavigationItem link="/" active>
        Burger Builder
    </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </containers.NavigationItems>
  )
}

export default navigationItems
