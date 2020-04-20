import React from 'react'
import burgerLogo from '../../assets/images/burger_logo.png'
import * as containers from '../../styled/styledNav'

const logo = (props) => (
  <containers.Logo style={{ height: props.height, margin: props.margin }}>
    <containers.LogoImg src={burgerLogo} alt="BurgerLogo" />
  </containers.Logo>
)

export default logo
