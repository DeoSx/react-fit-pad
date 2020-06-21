import axios from '../../axios'
import { AUTH_SIGNIN, AUTH_SIGNUP } from '../constants'

export async function signUp(data) {
  return async (dispatch) => {
    try {
      const res = await axios.post('user/signup', data)
      localStorage.setItem('user', JSON.stringify(res.data))
      console.log('res', res)
      dispatch(signup(res.data))
    } catch (e) {
      console.error(e)
    }
  }
}

function signup(payload) {
  return {
    type: AUTH_SIGNUP,
    payload
  }
}