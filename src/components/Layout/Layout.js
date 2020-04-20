import React, { useState } from 'react'
import Aux from '../../hoc/AuxHoc'
import { Main } from '../../styled/index'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(true)

  return (
    <Aux>
      <Toolbar />
      <SideDrawer
        open={showSideDrawer}
        closed={() => setShowSideDrawer(false)}
      />
      <Main>{props.children}</Main>
    </Aux>
  )
}

export default Layout
