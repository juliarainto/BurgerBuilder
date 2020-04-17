import React from 'react'
import propTypes from 'prop-types'
import * as containers from '../styledBurger'

const burgerIngridient = (props) => {
  let ingridient = null

  switch (props.type) {
    case 'bread-bottom':
      ingridient = <containers.BreadBottom />
      break
    case 'bread-top':
      ingridient = (
        <containers.BreadTop>
          <containers.Seeds1 />
          <containers.Seeds2 />
        </containers.BreadTop>
      )
      break
    case 'patty':
      ingridient = <containers.Patty />
      break
    case 'cheese':
      ingridient = <containers.Cheese />
      break
    case 'salad':
      ingridient = <containers.Salad />
      break
    case 'bacon':
      ingridient = <containers.Bacon />
      break
    default:
      ingridient = null
      break
  }
  return ingridient
}

burgerIngridient.propTypes = {
  type: propTypes.string.isRequired,
}

export default burgerIngridient
