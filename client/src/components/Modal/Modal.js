import React from 'react'

import './Modal.scss'

const Modal = (props) => {

  const modal = (
    <div className="overlay" onClick={(e) => props.close(e)}>
      <div className="modal main-ui">{props.children}</div>
    </div>
  )
  return props.modalState && modal
}

export default Modal
