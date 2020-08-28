import { combineReducers } from 'redux'
import authGympad from './auth/auth.reducer'
import userGympad from './user/user.reducer'
import excerciseGympad from './excercise/excercise.reducer'
import journalGympad from './journal/journal.reducer'

export default combineReducers({
  auth: authGympad,
  user: userGympad,
  excercise: excerciseGympad,
  journal: journalGympad,
})
