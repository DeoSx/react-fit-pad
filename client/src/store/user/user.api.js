import axios from '../../axios'
import { getUserAction } from './user.actions'
import { setStorage, getStorage } from '../../helpers/storage'
// import { logout } from '../auth/auth.actions'

export function getUser() {
  return async (dispatch) => {
    try {
      const res = await axios.get('user/info', {
        headers: {
          Authorization: `Bearer ${getStorage('auth').token}`
        }
      })
      const { user } = res.data
      setStorage('user', user)
      dispatch(getUserAction(res.data.user))
    } catch (e) {
      console.error(e)
      // logout()
    }
  }
}
