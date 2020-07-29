import { EXCERCISE_GETALL } from '../constants'

export const getAllAction = (payload) => {
  return {
    type: EXCERCISE_GETALL,
    payload
  }
}
