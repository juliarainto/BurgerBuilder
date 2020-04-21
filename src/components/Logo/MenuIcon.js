import React from 'react'
import MenuIcon from '../../assets/images/bars-solid.svg'
import * as containers from '../../styled/styledNav'

const logo = (props) => (
  <containers.MenuIcon
    onClick={props.clicked}
    style={{ height: props.height, margin: props.margin }}>
    <containers.MenuIconImg src={MenuIcon} alt="MenuIcon" />
  </containers.MenuIcon>
)

export default logo
