import React from 'react'
import Aux from '../../../hoc/AuxHoc'
import * as containers from '../../../styled/styledUI'

const orderSummary = (props) => {
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

export default orderSummary