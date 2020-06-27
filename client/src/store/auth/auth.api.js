import axios from '../../axios'
import { signInAction } from './auth.actions'

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
      localStorage.setItem('user', JSON.stringify(res.data))
      localStorage.setItem('token', JSON.stringify(res.data.token))
    } catch (e) {
      console.error(e)
    }
  }
}