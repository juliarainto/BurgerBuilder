import React from 'react'
import { OrderContainer, OrderSpan } from '../../styled/styledCheckout'

const Order = (props) => {

  const ingridients = []

  for (const ingridientName in props.ingridients) {
    ingridients.push({
      name: ingridientName,
      amount: props.ingridients[ingridientName]
    })
  }

  let ingridientOutput = ingridients.map(ig => {
    return <OrderSpan>{ig.name} ({ig.amount}) </OrderSpan>
  })

  return (
    <OrderContainer>
      <p>Ingridients: {ingridientOutput}</p>
      <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
    </OrderContainer>
  )
}

export default Order
