import axios from '../../axios'
import { AUTH_SIGNIN, AUTH_SIGNUP } from '../constants'

export function signUp(data) {
  return async (dispatch) => {
    try {
      const res = await axios.post('user/signup', data)

      await dispatch(signupAction(res.data))
      localStorage.setItem('user', JSON.stringify(res.data))
    } catch (e) {
      console.error(e)
    }
  }
}

export function signupAction(payload) {
  return {
    type: AUTH_SIGNUP,
    payload
  }
}

export function signIn(data) {
  return async (dispatch) => {
    try {
      const res = await axios.post('user/login', data)
      await dispatch(signupAction(res.data))
      localStorage.setItem('user', JSON.stringify(res.data))
      localStorage.setItem('token', JSON.stringify(res.data.token))
    } catch (e) {
      console.error(e)
    }
  }
}

export function signInAction(payload) {
  return {
    type: AUTH_SIGNIN,
    payload
  }
}
