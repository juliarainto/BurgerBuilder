import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from '../../containers/Checkout/ContactData/ContactData'

const Checkout = (props) => {

  const [ingridients, setIngridients] = useState({
    salad: 1,
    patty: 1,
    cheese: 1,
    tomato: 1,
  })

  const [totalPrice, setTotalPrice] = useState({})

  useEffect(() => {
    const query = props.location.state
    const price = props.location.price
    setIngridients({
      ...query
    })
    setTotalPrice(price)
    console.log(price)
  }, []);

  function checkoutCancelled() {
    props.history.goBack()
  }

  function checkoutContinued() {
    props.history.replace('/checkout/contact-data')
  }


  return (
    < div >
      <CheckoutSummary
        ingridients={ingridients}
        checkoutCancelled={checkoutCancelled}
        checkoutContinued={checkoutContinued} />
      <Route
        path={props.match.path + '/contact-data'}
        render={(props) => <ContactData ingridients={ingridients} totalPrice={totalPrice} {...props} />} />
    </div >
  )
}

export default Checkout
