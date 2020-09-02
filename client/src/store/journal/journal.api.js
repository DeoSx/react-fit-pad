import axios from '../../axios'
import { clearDailyPlanAction, getAllDaysAction } from './journal.actions'

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
  return async (dispatch) => {
    try {
      const res = await axios.get('journal')
      dispatch(getAllDaysAction(res.data))
    } catch (e) {
      console.log(e)
    }
  }
}

export function editDay(data) {
  return async () => {
    try {
      await axios.put('journal/edit', data)
    } catch (e) {
      console.log(e)
    }
  }
}
