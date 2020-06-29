import { AUTH_SIGNIN, AUTH_LOGOUT } from '../constants'

export function signInAction(payload) {
  return {
    type: AUTH_SIGNIN,
    payload
  }
}

export function logoutAction() {
  return {
    type: AUTH_LOGOUT
  }
}