import { EXCERCISE_GETALL } from '../constants'

const initialState = {
  data: []
}

export default function excerciseReducer(state = initialState, action) {
  switch (action.type) {
    case EXCERCISE_GETALL:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}
