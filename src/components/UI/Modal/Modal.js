import React, { useEffect, memo } from 'react'
import { ModalUI } from '../../../styled/styledUI'
import Aux from '../../../hoc/AuxHoc'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
  useEffect(() => { console.log('[Modal] updated') })
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <ModalUI show={props.show}>{props.children}</ModalUI>
    </Aux>
  )
}

export default memo(
  Modal,
  (prevProps, nextProps) => prevProps.show === nextProps.show &&
    nextProps.children === prevProps.children
)
