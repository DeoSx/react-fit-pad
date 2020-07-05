import { USER_INFO } from '../constants'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_INFO:
      return { ...state, user: action.payload }
    default:
      return { ...state }
  }
}