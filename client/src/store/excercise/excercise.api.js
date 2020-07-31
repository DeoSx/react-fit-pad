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
  return async (dispatch) => {
    try {
      console.log('before')
      const res = await axios.get('excercise')
      console.log(res)
      await dispatch(getAllAction(res))
    } catch (e) {
      console.error(e)
    }
  }
}