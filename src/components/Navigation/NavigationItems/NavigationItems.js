import React from 'react'
import * as containers from '../../../styled/styledNav'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

const navigationItems = (props) => {

  return (
    <containers.NavigationItems>
      <NavigationItem link="/" exact>
        Burger Builder
    </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </containers.NavigationItems>
  )
}

export default navigationItems
