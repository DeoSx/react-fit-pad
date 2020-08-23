import axios from '../../axios'
import { clearDailyPlanAction } from './journal.actions'

export function createDay(data) {
  return async (dispatch) => {
    try {
      await axios.post('journal/create', data)
      await dispatch(getAllDays())
      dispatch(clearDailyPlanAction())
    } catch (e) {
      console.log(e)
    }
  }
}

export function getAllDays() {
  return async () => {
    try {
      const res = await axios.get('journal')
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
}
