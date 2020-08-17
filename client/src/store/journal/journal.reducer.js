import {
  JOURNAL_ADD,
  JOURNAL_REMOVE,
  JOURNAL_CLEARPLAN,
  JOURNAL_ADDTODAYLY,
  JOURNAL_ADDCOUNTER
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
        plan: [...state.plan, { ...action.payload, counter: [] }]
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
    case JOURNAL_ADDCOUNTER: {
      return {
        ...state,
        dailyPlan: [
          ...state.dailyPlan.map((it) =>
            it._id === action.payload._id
              ? {
                  ...it,
                  counter: [...it.counter, { ...action.payload }]
                }
              : it
          )
        ],
        plan: [...state.plan]
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default journalReducer
