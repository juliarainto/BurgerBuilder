import React from 'react'
import * as containers from '../../styled/styledBurger'
import Ingridients from './/Ingridients/Ingridients'

const burger = (props) => {
  let transformedIngridients = Object.keys(props.ingridients)
    .map((igKey) => {
      return [...Array(props.ingridients[igKey])].map((_, i) => {
        return <Ingridients key={igKey + i} type={igKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (transformedIngridients.length === 0) {
    transformedIngridients = <p>Please start adding ingredients!</p>
  }

  return (
    <containers.Burger>
      <Ingridients type="bread-top" />
      {transformedIngridients}
      <Ingridients type="bread-bottom" />
    </containers.Burger>
  )
}

export default burger
