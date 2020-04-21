import React, { useState } from 'react'
import Aux from '../../hoc/AuxHoc'
import { Main } from '../../styled/index'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  return (
    <Aux>
      <Toolbar drawerToggle={() => setShowSideDrawer(!showSideDrawer)} />
      <SideDrawer
        open={showSideDrawer}
        closed={() => setShowSideDrawer(false)}
      />
      <Main>{props.children}</Main>
    </Aux>
  )
}

export default Layout
