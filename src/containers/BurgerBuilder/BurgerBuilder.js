import React, { useState } from 'react'
import Aux from '../../hoc/AuxHoc'
import Burger from '../../components/Burger/Burger'
import BurgerControl from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGRIDIENT_PRICES = {
  salad: 0.2,
  cheese: 0.4,
  tomato: 0.6,
  patty: 1.5,
}

const BurgerBuilder = () => {
  const [ingridients, setIngridients] = useState({
    ingr: {
      salad: 0,
      tomato: 0,
      cheese: 0,
      patty: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  })

  function updatePurchaseState(newPrice, updatedIngridients) {
    const sum = Object.keys(updatedIngridients)
      .map((igKey) => {
        return updatedIngridients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)

    setIngridients({
      totalPrice: newPrice,
      ingr: updatedIngridients,
      purchaseable: sum > 0,
      purchasing: ingridients.purchasing,
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
      totalPrice: newPrice,
      ingr: updatedIngridients,
      purchaseable: ingridients.purchaseable,
      purchasing: ingridients.purchasing,
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
      totalPrice: newPrice,
      ingr: updatedIngridients,
      purchaseable: ingridients.purchaseable,
      purchasing: ingridients.purchasing,
    })
    updatePurchaseState(newPrice, updatedIngridients)
  }

  const disabledInfo = {
    ...ingridients.ingr,
  }
  for (const key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  function purchaseHandler() {
    setIngridients({
      totalPrice: ingridients.totalPrice,
      ingr: ingridients.ingr,
      purchaseable: ingridients.purchaseable,
      purchasing: true,
    })
  }

  function purchaseCancelHandler() {
    setIngridients({
      totalPrice: ingridients.totalPrice,
      ingr: ingridients.ingr,
      purchaseable: ingridients.purchaseable,
      purchasing: false,
    })
  }

  function purchaseContinueHandler() {
    alert('You continue!')
  }

  return (
    <Aux>
      <Modal show={ingridients.purchasing} closeModal={purchaseCancelHandler}>
        <OrderSummary
          ingridients={ingridients}
          price={ingridients.totalPrice}
          closeModal={purchaseCancelHandler}
          continue={purchaseContinueHandler}
        />
      </Modal>
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
}

export default BurgerBuilder
