import React, { Component } from 'react'
import Input from '../UI/Input/Input'

import './Modal.scss'

class Modal extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  changeHandler = (value, field) => {
    this.setState({
      [field]: value
    })
  }

  render() {
    return (
      <div className="overlay">
        <div className="modal main-ui">
          <Input
            type="text"
            label="Name"
            onChange={(event) => this.changeHandler(event.target.value, 'name')}
          />
          <Input
            type="text"
            label="Email"
            onChange={(event) => this.changeHandler(event.target.value, 'name')}
          />
          <Input
            type="text"
            label="Password"
            onChange={(event) => this.changeHandler(event.target.value, 'name')}
          />
        </div>
      </div>
    )
  }
}

export default Modal
