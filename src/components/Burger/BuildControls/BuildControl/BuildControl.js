import React from 'react'
import * as containers from '../../../../styled/styledBurger'

const BuildControl = (props) => {
  return (
    <containers.BuildControl>
      <containers.BuildControlLabel>{props.label}</containers.BuildControlLabel>
      <containers.BuildControlButtonLess
        onClick={props.removed}
        disabled={props.disabled}>
        Less
      </containers.BuildControlButtonLess>
      <containers.BuildControlButtonMore onClick={props.added}>
        More
      </containers.BuildControlButtonMore>
    </containers.BuildControl>
  )
}

export default BuildControl
