import React from 'react'
import * as containers from '../../../../styled/styledNav'

const navigationItem = (props) => (
  <containers.NavigationItem>
    <containers.NavigationItemA
      activeClassName={props.active}
      exact={props.exact}
      to={props.link}>{props.children}
    </containers.NavigationItemA>
  </containers.NavigationItem>
)

export default navigationItem
