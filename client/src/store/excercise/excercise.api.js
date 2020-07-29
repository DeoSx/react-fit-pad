import axios from '../../axios'
import { getAllAction } from './excercise.actions'

export function createExcercise(data) {
  return async () => {
    try {
      await axios.post('excercise/create', data)
    } catch (e) {
      console.error(e)
    }
  }
}

export function getAll() {
  return async dispatch => {
    try {
      console.log('before')
      const res = await axios.get('excercise')
      await dispatch(getAllAction(res))
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }
}
