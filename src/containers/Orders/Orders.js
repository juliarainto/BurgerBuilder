import React, { useState, useEffect } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const Orders = () => {

  const [orders, setOrders] = useState({
    orders: [],
    loading: true
  })
  useEffect(() => {
    axios.get('/orders.json').then(res => {
      console.log(res.data)
      const fetchOrders = []
      for (let key in res.data) {
        fetchOrders.push({
          ...res.data[key],
          id: key
        })
      }
      setOrders({ orders: fetchOrders, loading: false })
    }).catch(err => {
      setOrders({ ...orders, loading: false })
    })
  }, []);

  return (
    <div>
      {orders.orders.map(order =>
        <Order
          key={order.id}
          ingridients={order.ingr}
          price={order.totalPrice} />
      )}

    </div>
  )
}

export default withErrorHandler(Orders, axios)
