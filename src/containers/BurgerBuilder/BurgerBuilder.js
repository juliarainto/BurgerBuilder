import React, { useState } from 'react'
import Aux from '../../hoc/AuxHoc'
import Burger from '../../components/Burger/Burger'
import BurgerControl from '../../components/Burger/BuildControls/BuildControls'

const INGRIDIENT_PRICES = {
  salad: 0.2,
  cheese: 0.4,
  bacon: 0.6,
  patty: 1.5,
}

const BurgerBuilder = () => {
  const [ingridients, setIngridients] = useState({
    ingr: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      patty: 0,
    },
    totalPrice: 4,
  })

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
    setIngridients({ totalPrice: newPrice, ingr: updatedIngridients })
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
    setIngridients({ totalPrice: newPrice, ingr: updatedIngridients })
  }

  const disabledInfo = {
    ...ingridients.ingr,
  }
  for (const key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  return (
    <Aux>
      <Burger ingridients={ingridients.ingr}></Burger>
      <BurgerControl
        ingridientAdded={addIngridientHandler}
        ingridientRemoved={removeIngridientHandler}
        disabled={disabledInfo}
      />
    </Aux>
  )
}

export default BurgerBuilder
