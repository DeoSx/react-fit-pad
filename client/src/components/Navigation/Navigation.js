import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/auth/auth.actions'

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
    modalState: null,
    loginModal: false
  }

  componentDidMount() {
    console.log(this.props)
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  showModal = (e) => {
    e.preventDefault()
    const targetText = e.target.textContent
    if (targetText.replace(/\s/g, '').includes('up')) {
      this.setState({
        modalState: true,
        loginModal: false
      })
    } else {
      this.setState({
        modalState: true,
        loginModal: true
      })
    }
  }

  closeModal = (e) => {
    if (e.target.classList.contains('overlay')) {
      this.setState({
        modalState: false
      })
    }
  }

  submitHandler = async (data) => {
    const { loginModal } = this.state
    if (!loginModal) {
      try {
        await this.props.signUp(data)
        this.setState({
          modalState: false
        })
      } catch (e) {
        console.error(e)
      }
    } else {
      try {
        // const res = await axios.post('user/login', data)
        // console.log('login', res)

        this.setState({
          modalState: false
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  render() {
    const { loginModal, modalState } = this.state
    const modal = (
      <Modal modalState={modalState} close={this.closeModal}>
        {!loginModal && (
          <Input
            type="text"
            label="Name"
            name="username"
            onChange={(e) => this.changeHandler(e)}
          />
        )}
        <Input
          type="text"
          label="Email"
          name="email"
          onChange={(e) => this.changeHandler(e)}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          onChange={(e) => this.changeHandler(e)}
        />
        <Button
          text={loginModal ? 'Sign in' : 'Sign up'}
          onClick={() => this.submitHandler(this.state)}
        />
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
            <a href="" onClick={(e) => this.showModal(e)}>
              Sign in
            </a>
            /
            <a href="" onClick={(e) => this.showModal(e)}>
              Sign up
            </a>
          </div>
        </nav>
        {modal}
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => dispatch(signUp(data))
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
