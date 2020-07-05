import { AUTH_SIGNIN, AUTH_LOGOUT } from '../constants'
import { getStorage } from '../../helpers/storage'

const initialState = {
  isAuthenticated: getStorage('auth') || null
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
