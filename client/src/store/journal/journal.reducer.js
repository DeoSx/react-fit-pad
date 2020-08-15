import {
  JOURNAL_ADD,
  JOURNAL_REMOVE,
  JOURNAL_CLEARPLAN,
  JOURNAL_ADDTODAYLY
} from '../constants'

const initialState = {
  plan: [],
  dailyPlan: []
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
    case JOURNAL_CLEARPLAN:
      return {
        ...state,
        plan: []
      }
    case JOURNAL_ADDTODAYLY:
      return {
        ...state,
        dailyPlan: [...state.dailyPlan, ...state.plan],
        plan: []
      }
    default:
      return {
        ...state
      }
  }
}

export default journalReducer
