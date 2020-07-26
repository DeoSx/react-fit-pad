import axios from '../../axios'
import { signInAction } from './auth.actions'
import { getUser } from '../user/user.api'

import { setStorage } from '../../helpers/storage'

export function signUp(data) {
  return async () => {
    try {
      await axios.post('user/signup', data)
    } catch (e) {
      console.error(e)
    }
  }
}

export function signIn(data) {
  return async (dispatch) => {
    try {
      const res = await axios.post('user/login', data)
      await dispatch(signInAction(res.data))
      const { token, userId } = res.data
      setStorage('auth', { token, userId })
      dispatch(getUser())
    } catch (e) {
      console.error(e)
    }
  }
}
