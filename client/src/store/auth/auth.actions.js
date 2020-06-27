import { AUTH_SIGNIN } from '../constants'

export function signInAction(payload) {
  return {
    type: AUTH_SIGNIN,
    payload
  }
}
