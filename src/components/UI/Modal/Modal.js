import React from 'react'
import { Modal } from '../../../styled/styledUI'
import Aux from '../../../hoc/AuxHoc'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.closeModal} />
    <Modal show={props.show}>{props.children}</Modal>
  </Aux>
)

export default modal
