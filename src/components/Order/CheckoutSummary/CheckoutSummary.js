import React from 'react'
import Burger from '../../Burger/Burger'
import * as containers from '../../../styled/styledUI'
import { CheckoutSummaryContainer } from '../../../styled/styledCheckout'

const CheckoutSummary = (props) => {
  return (
    <CheckoutSummaryContainer>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
        <Burger ingridients={props.ingridients} />
      </div>
      <containers.ButtonContainerCheck>
        <containers.ButtonDangerCheck onClick={props.checkoutCancelled}>
          CANCEL
        </containers.ButtonDangerCheck>
        <containers.ButtonSuccess onClick={props.checkoutContinued}>
          CONTINUE
        </containers.ButtonSuccess>
      </containers.ButtonContainerCheck>
    </CheckoutSummaryContainer>
  )
}

export default CheckoutSummary