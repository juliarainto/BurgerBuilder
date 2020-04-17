import React from 'react'
import * as containers from '../styledBurger'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Patty', type: 'patty' },
]

const BuildControls = (props) => (
  <containers.BuildControls>
    {controls.map((crtl) => (
      <BuildControl
        key={crtl.label}
        label={crtl.label}
        added={() => props.ingridientAdded(crtl.type)}
        removed={() => props.ingridientRemoved(crtl.type)}
        disabled={props.disabled[crtl.type]}
      />
    ))}
  </containers.BuildControls>
)

export default BuildControls
