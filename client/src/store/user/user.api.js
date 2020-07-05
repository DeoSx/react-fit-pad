import axios from '../../axios'
import { getUserAction } from './user.actions'
import { setStorage } from '../../helpers/storage'
// import { clearStorages } from '../auth/auth.actions'

export function getUser() {
  return async (dispatch) => {
    try {
      const res = await axios.get('user/info')
      const { user } = res.data
      setStorage('user', user)

      console.log(res)
      dispatch(getUserAction(res.data.user))
    } catch (e) {
      console.error(e)
      // clearStorages()
    }
  }
}
