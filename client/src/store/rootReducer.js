import { combineReducers } from 'redux'
import authGympad from './auth/auth.reducer'

export default combineReducers({
  auth: authGympad
})