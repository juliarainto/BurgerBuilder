import React from 'react'
import * as containers from '../../../styled/styledBurger'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Patty', type: 'patty' },
]

const BuildControls = (props) => (
  <containers.BuildControls>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((crtl) => (
      <BuildControl
        key={crtl.label}
        label={crtl.label}
        added={() => props.ingridientAdded(crtl.type)}
        removed={() => props.ingridientRemoved(crtl.type)}
        disabled={props.disabled[crtl.type]}
      />
    ))}
    <containers.BuildControlOrderButton
      disabled={!props.purchaseable}
      onClick={props.ordered}>
      ORDER NOW
    </containers.BuildControlOrderButton>
  </containers.BuildControls>
)

export default BuildControls
