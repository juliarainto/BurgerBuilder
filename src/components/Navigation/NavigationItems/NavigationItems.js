import React from 'react'
import * as containers from '../../../styled/styledNav'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <containers.NavigationItems>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </containers.NavigationItems>
)

export default navigationItems
