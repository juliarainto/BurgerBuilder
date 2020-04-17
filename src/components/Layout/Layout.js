import React from 'react'
import Aux from '../../hoc/AuxHoc'
import { Main } from '../../styled/index'

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Main>{props.children}</Main>
  </Aux>
)

export default layout
