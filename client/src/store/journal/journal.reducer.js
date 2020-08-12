import { JOURNAL_ADD, JOURNAL_REMOVE } from '../constants'

const initialState = {
  plan: []
}

function journalReducer(state = initialState, action) {
  switch (action.type) {
    case JOURNAL_ADD:
      return {
        ...state,
        plan: [...state.plan, { ...action.payload }]
      }
    case JOURNAL_REMOVE:
      return {
        ...state,
        plan: [...state.plan].filter((i) => i._id !== action.payload._id)
      }
    default:
      return {
        ...state
      }
  }
}

export default journalReducer
