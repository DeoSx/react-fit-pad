import React, { Component } from 'react'
import axios from '../../axios'
import { NavLink } from 'react-router-dom'

import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import Modal from '../Modal/Modal'
import './Navigation.scss'

import { Wrapper } from '../../styles'

class Navigation extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    modalState: false
  }

  changeHandler = (value, field) => {
    this.setState({
      [field]: value
    })
  }

  render() {
    const modal = (
      <Modal>
        <Input
          type="text"
          label="Name"
          onChange={(event) =>
            this.changeHandler(event.target.value, 'username')
          }
        />
        <Input
          type="text"
          label="Email"
          onChange={(event) => this.changeHandler(event.target.value, 'email')}
        />
        <Input
          type="password"
          label="Password"
          onChange={(event) =>
            this.changeHandler(event.target.value, 'password')
          }
        />
        <Button text="sign up" onClick={() => this.submitHandler(this.state)} />
      </Modal>
    )

    return (
      <Wrapper>
        <nav className="nav main-ui">
          <div className="logo">
            <img src="images/logo.png" alt="logo" />
          </div>
          <div className="links">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/history">History</NavLink>
          </div>
          <div className="auth-block">
            <a href>Sign in</a>/<a href>Sign up</a>
          </div>
        </nav>
        { this.state.modalState ? modal : null }
      </Wrapper>
    )
  }
}

export default Navigation
