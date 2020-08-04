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
      const res = await axios.get('excercise')
      await dispatch(getAllAction(res.data))
    } catch (e) {
      console.error(e)
    }
  }
}

export function changeExcercise(data) {
  return async (dispatch) => {
    try {
      await axios.put('excercise', data)
      dispatch(getAll())
    } catch (e) {
      console.error(e)
    }
  }
}
