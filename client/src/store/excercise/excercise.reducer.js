import { EXCERCISE_GETALL } from '../constants'

const initialState = {
  excercises: []
}

export default function excerciseReducer(state = initialState, action) {
  switch (action.type) {
    case EXCERCISE_GETALL:
      return {
        ...state,
        excercises: action.payload
      }
    default:
      return state
  }
}
