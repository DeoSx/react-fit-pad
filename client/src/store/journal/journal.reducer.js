import {
  JOURNAL_ADD,
  JOURNAL_REMOVE,
  JOURNAL_CLEARPLAN,
  JOURNAL_ADDTODAYLY,
  JOURNAL_ADDCOUNTER,
  JOURNAL_CLEARDAILYPLAN,
  JOURNAL_GETALLDAYS,
  JOURNAL_COUNTERDAY,
  JOURNAL_ADDEXERCISE,
  JOURNAL_TOEDITDAY,
  JOURNAL_EDITDAY
} from '../constants'

const initialState = {
  plan: null,
  dailyPlan: [],
  days: [],
  editPlan: [],
  editBtnState: true
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
        plan: null
      }
    case JOURNAL_CLEARDAILYPLAN: {
      return {
        ...state,
        dailyPlan: []
      }
    }
    case JOURNAL_ADDTODAYLY:
      return {
        ...state,
        dailyPlan: [...state.dailyPlan, ...state.plan],
        plan: []
      }
    case JOURNAL_ADDCOUNTER:
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
    case JOURNAL_GETALLDAYS:
      return {
        ...state,
        days: action.payload
      }
    case JOURNAL_TOEDITDAY:
      return {
        ...state,
        plan: action.payload
      }
    case JOURNAL_COUNTERDAY:
      return {
        ...state,
        days: [
          ...state.days.map((item) =>
            item.id === action.payload.dayId
              ? {
                  ...item,
                  day: [
                    ...item.day.map((i) =>
                      i._id === action.payload._id
                        ? {
                            ...i,
                            counter: [
                              ...i.counter,
                              {
                                _id: action.payload._id,
                                reps: action.payload.reps,
                                weight: action.payload.weight
                              }
                            ]
                          }
                        : i
                    )
                  ]
                }
              : item
          )
        ]
      }
    case JOURNAL_EDITDAY:
      return {
        ...state,
        days: [
          ...state.days.map((day) =>
            day.id === action.payload.id ? { ...action.payload } : day
          )
        ]
      }
    case JOURNAL_ADDEXERCISE:
      return {
        ...state
      }

    default:
      return {
        ...state
      }
  }
}

export default journalReducer
