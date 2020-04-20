import React from 'react'
import { Backdrop } from '../../../styled/styledUI'

const backdrop = (props) =>
  props.show ? <Backdrop onClick={props.clicked}></Backdrop> : null

export default backdrop
