import axios from '../../axios'

export function createExcercise(data) {
  return async (dispatch) => {
    try {
      const res = await axios.post('excercise/create', data)
    } catch (e) {
      console.error(e)
    }
  }
}
