import React, { useState } from 'react'
import Spinner from '../../../components/UI/Spinner/Spinner'
import * as containers from '../../../styled/styledUI'
import { ContactDataForm, ContactDataInput } from '../../../styled/styledCheckout'
import axios from '../../../axios-orders'

const ContactData = (props) => {

  const [dataForm, setForm] = useState({
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  })

  function orderHandler() {
    alert('You continue!')
    setForm({
      ...dataForm,
      loading: true
    })
    const order = {
      totalPrice: props.totalPrice,
      ingr: props.ingridients,
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
        setForm({
          ...dataForm,
          loading: false
        })
        props.history.push('/')
      })
      .catch((error) => {
        setForm({
          ...dataForm,
          loading: false
        })
      })
  }

  let form = <form>
    <ContactDataInput type="text" name="name" placeholder="Your Name"></ContactDataInput>
    <ContactDataInput type="email" name="email" placeholder="Your Email Address"></ContactDataInput>
    <ContactDataInput type="text" name="street" placeholder="Street"></ContactDataInput>
    <ContactDataInput type="text" name="postal" placeholder="Postal Code"></ContactDataInput>
    <containers.ButtonContainerCheck>
      <containers.ButtonSuccess onClick={orderHandler}>
        ORDER
  </containers.ButtonSuccess>
    </containers.ButtonContainerCheck>
  </form>;
  if (dataForm.loading) {
    form = <Spinner />
  }

  return (
    < ContactDataForm >
      <h4>Enter your contact data:</h4>
      {form}
    </ContactDataForm >
  )
}

export default ContactData
