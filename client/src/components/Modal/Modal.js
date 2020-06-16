import React, { Component } from 'react'
import axios from '../../axios/'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

import './Modal.scss'

class Modal extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  changeHandler = (value, field) => {
    this.setState({
      [field]: value
    })
  }

  submitHandler = async (data) => {
    console.log(data)
    const res = await axios.post('user/signup', data)
    console.log(res)
  }

  render() {
    return (
      <div className="overlay">
        <div className="modal main-ui">
          <Input
            type="text"
            label="Name"
            onChange={(event) => this.changeHandler(event.target.value, 'username')}
          />
          <Input
            type="text"
            label="Email"
            onChange={(event) =>
              this.changeHandler(event.target.value, 'email')
            }
          />
          <Input
            type="password"
            label="Password"
            onChange={(event) =>
              this.changeHandler(event.target.value, 'password')
            }
          />
          <Button
            text="Registration"
            onClick={() => this.submitHandler(this.state)}
          />
        </div>
      </div>
    )
  }
}

export default Modal
