import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { signUp, signIn } from '../../store/auth/auth.api'
import { logout } from '../../store/auth/auth.actions'
import { getUser } from '../../store/user/user.api'

import Drowdown from '../UI/Dropdown/Dropdown'
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

  componentDidUpdate(prevProps) {
    if (this.props.user.user !== prevProps.user.user) {
      this.props.getUser()
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  showModal = (e, type) => {
    e.preventDefault()
    if (type === 'reg') {
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
    const { loginModal, username, password, email } = data
    if (!loginModal) {
      try {
        await this.props.signUp({ username, password, email })
        await this.props.getUser()
        this.setState({
          modalState: false
        })
      } catch (e) {
        console.error(e)
      }
    } else {
      try {
        await this.props.signIn({ email, password })
        await this.props.getUser()
        this.setState({
          modalState: false
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  logoutHandler = () => {
    this.props.logout()
    window.location.reload(true)
  }

  render() {
    const { loginModal, modalState } = this.state
    const isAuthenticated = this.props.auth.isAuthenticated
    const { user } = this.props.user
    const modal = (
      <CSSTransition in={modalState} timeout={200} classNames="fade">
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
            styleType="blue"
            text={loginModal ? 'Sign in' : 'Sign up'}
            onClick={() => this.submitHandler(this.state)}
          />
        </Modal>
      </CSSTransition>
    )

    const authBlock = (
      <div className="auth-block">
        <a
          href="/"
          className="btn-link"
          onClick={(e) => this.showModal(e, 'login')}
        >
          Sign in
        </a>
        /
        <a
          href="/"
          className="btn-link"
          onClick={(e) => this.showModal(e, 'reg')}
        >
          Sign up
        </a>
      </div>
    )

    return (
      <Wrapper>
        <nav className="nav main-ui">
          <div className="logo">
            <img src="images/logo.png" alt="logo" />
          </div>
          <div className="links">
            <NavLink exact to="/">
              Главная
            </NavLink>
          </div>
          <Drowdown title={user && user.username}>
            <NavLink className="btn-link" to="/profile">
              Profile
            </NavLink>
            <a
              href="/"
              className="btn-link"
              onClick={() => this.logoutHandler()}
            >
              Logout
            </a>
          </Drowdown>
          {!isAuthenticated && authBlock}
        </nav>
        {modal}
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => dispatch(signUp(data)),
    signIn: (data) => dispatch(signIn(data)),
    getUser: () => dispatch(getUser),
    logout: () => dispatch(logout)
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
