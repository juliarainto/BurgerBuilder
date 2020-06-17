import React, { useState } from 'react'
import Order from '../../components/Order/Order'

const Orders = () => {

  const [totalPrice, setTotalPrice] = useState({})


  return (
    <div>
      < Order />
      < Order />

    </div>
  )
}

export default Orders
