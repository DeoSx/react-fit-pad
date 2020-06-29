import { combineReducers } from 'redux'
import authGympad from './auth/auth.reducer'
import userGympad from './user/user.reducer'

export default combineReducers({
  auth: authGympad,
  user: userGympad
})