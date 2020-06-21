import { AUTH_SIGNUP } from '../constants'

const initialState = {
  isAuthenticated: false
}

export default function authGymPad(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGNUP:
      return { ...state, isAuthenticated: action.payload }
    default:
      return { ...state }
  }
}
