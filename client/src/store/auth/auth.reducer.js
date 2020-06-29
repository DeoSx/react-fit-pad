import { AUTH_SIGNIN, AUTH_LOGOUT } from '../constants'

const initialState = {
  isAuthenticated: JSON.parse(sessionStorage.getItem('auth')) || null
}

export default function authGymPad(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGNIN:
      return { ...state, isAuthenticated: action.payload }
    case AUTH_LOGOUT: 
      return { ...state, isAuthenticated: null }
    default:
      return { ...state }
  }
}
