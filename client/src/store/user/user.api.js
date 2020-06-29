import axios from '../../axios'
import { getUserAction } from './user.actions'

export function getUser() {
  return async (dispatch) => {
    try {
      const res = await axios.get('user/info')
      dispatch(getUserAction(res.data.user))
      const { user } = res.data
      localStorage.setItem('user', user)
    } catch (e) {
      console.error(e)
    }
  }
}
