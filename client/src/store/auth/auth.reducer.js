import { AUTH_SIGNUP, AUTH_SIGNIN } from '../constants'

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem('user')) || null
}

export default function authGymPad(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGNUP:
      return { ...state, isAuthenticated: action.payload }
    case AUTH_SIGNIN:
      return { ...state, isAuthenticated: action.payload }
    default:
      return { ...state }
  }
}
