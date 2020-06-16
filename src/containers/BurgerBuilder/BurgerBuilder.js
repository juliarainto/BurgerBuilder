import React, { useState, useEffect } from 'react'
import Aux from '../../hoc/AuxHoc'
import Burger from '../../components/Burger/Burger'
import BurgerControl from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'

const INGRIDIENT_PRICES = {
  salad: 0.2,
  cheese: 0.4,
  tomato: 0.6,
  patty: 1.5,
}

const BurgerBuilder = () => {
  const [ingridients, setIngridients] = useState({
    ingr: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  })

  useEffect(() => {
    // Update the document title using the browser API
    axios.get('https://burger-builder-86bab.firebaseio.com/ingridients.json')
      .then(response => {
        setIngridients({
          ...ingridients,
          ingr: response.data
        })
      }).catch(error => {
        setIngridients({
          ...ingridients,
          error: true
        })
      });
  }, []);

  function updatePurchaseState(newPrice, updatedIngridients) {
    const sum = Object.keys(updatedIngridients)
      .map((igKey) => {
        return updatedIngridients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)

    setIngridients({
      ...ingridients,
      totalPrice: newPrice,
      ingr: updatedIngridients,
      purchaseable: sum > 0,
    })
  }

  function addIngridientHandler(type) {
    const oldCount = ingridients.ingr[type]
    const updatedCount = oldCount + 1
    let updatedIngridients = {
      ...ingridients.ingr,
    }
    updatedIngridients[type] = updatedCount
    const priceAddition = INGRIDIENT_PRICES[type]
    const oldPrice = ingridients.totalPrice
    const newPrice = oldPrice + priceAddition
    setIngridients({
      ...ingridients,
      totalPrice: newPrice,
      ingr: updatedIngridients,
    })
    updatePurchaseState(newPrice, updatedIngridients)
  }

  function removeIngridientHandler(type) {
    const oldCount = ingridients.ingr[type]
    if (oldCount <= 0) {
      return
    }
    const updatedCount = oldCount - 1
    let updatedIngridients = {
      ...ingridients.ingr,
    }
    updatedIngridients[type] = updatedCount
    const priceAddition = INGRIDIENT_PRICES[type]
    const oldPrice = ingridients.totalPrice
    const newPrice = oldPrice - priceAddition
    setIngridients({
      ...ingridients,
      totalPrice: newPrice,
      ingr: updatedIngridients,
    })
    updatePurchaseState(newPrice, updatedIngridients)
  }

  const disabledInfo = {
    ...ingridients.ingr,
  }
  for (const key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  let orderSummary = null
  let burger = ingridients.error ? <p>Ingridients can't be loaded</p> : <Spinner />
  console.log(ingridients)
  if (ingridients.ingr) {
    burger = (
      <Aux>
        <Burger ingridients={ingridients.ingr}></Burger>
        <BurgerControl
          ingridientAdded={addIngridientHandler}
          ingridientRemoved={removeIngridientHandler}
          disabled={disabledInfo}
          purchaseable={ingridients.purchaseable}
          price={ingridients.totalPrice}
          ordered={purchaseHandler}
        />
      </Aux>
    )
    orderSummary = <OrderSummary
      ingridients={ingridients}
      price={ingridients.totalPrice}
      closeModal={purchaseCancelHandler}
      continue={purchaseContinueHandler}
    />
  }

  if (ingridients.loading) {
    orderSummary = <Spinner />
  }

  function purchaseHandler() {
    setIngridients({
      ...ingridients,
      purchasing: true,
    })
  }

  function purchaseCancelHandler() {
    setIngridients({
      ...ingridients,
      purchasing: false,
    })
  }

  function purchaseContinueHandler() {
    // alert('You continue!')
    setIngridients({
      ...ingridients,
      loading: true
    })
    const order = {
      totalPrice: ingridients.totalPrice,
      ingr: ingridients.ingr,
      customer: {
        name: 'Julia Rainto',
        address: {
          street: 'test street',
          zipCode: '33000',
          country: 'Finland',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'now',
    }
    axios
      .post('/orders.json', order)
      .then((response) => {
        setIngridients({
          ...ingridients,
          purchasing: false,
          loading: false
        })
      })
      .catch((error) => {
        setIngridients({
          ...ingridients,
          purchasing: false,
          loading: false
        })
      })
  }

  return (
    <Aux>
      <Modal show={ingridients.purchasing} closeModal={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  )
}

export default withErrorHandler(BurgerBuilder, axios)
