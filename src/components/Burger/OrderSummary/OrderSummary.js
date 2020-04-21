import React, { useEffect } from 'react'
import Aux from '../../../hoc/AuxHoc'
import * as containers from '../../../styled/styledUI'

const OrderSummary = (props) => {
  useEffect(() => console.log('[OrderSummary] updated'))

  const ingridientsSummary = Object.keys(props.ingridients.ingr).map(
    (igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {props.ingridients.ingr[igKey]}
        </li>
      )
    }
  )
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Burger ingridients:</p>
      <ul>{ingridientsSummary}</ul>
      <p>
        <strong>TotalPrice: {props.ingridients.totalPrice.toFixed(2)}€</strong>
      </p>
      <p>Continue to Checkout?</p>
      <containers.ButtonContainer>
        <containers.ButtonDanger onClick={props.closeModal}>
          CANCEL
        </containers.ButtonDanger>
        <containers.ButtonSuccess onClick={props.continue}>
          CONTINUE
        </containers.ButtonSuccess>
      </containers.ButtonContainer>
    </Aux>
  )
}

export default OrderSummary
