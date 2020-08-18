import axios from '../../axios'
import { getStorage } from '../../helpers/storage'

export function createDay(data) {
  return async () => {
    try {
      await axios.post('journal/create', data)
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
