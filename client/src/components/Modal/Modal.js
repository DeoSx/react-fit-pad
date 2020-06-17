import React, { Component } from 'react'
import axios from '../../axios/'

import './Modal.scss'

class Modal extends Component {

  render() {
    return (
      <div className="overlay">
        <div className="modal main-ui">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Modal
