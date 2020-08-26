import {
  JOURNAL_ADD,
  JOURNAL_REMOVE,
  JOURNAL_CLEARPLAN,
  JOURNAL_ADDTODAYLY,
  JOURNAL_ADDCOUNTER,
  JOURNAL_CLEARDAILYPLAN,
  JOURNAL_GETALLDAYS,
  JOURNAL_TOGGLENEWDAY
} from '../constants'

export function addToPlanAction(payload) {
  return {
    type: JOURNAL_ADD,
    payload
  }
}

export function removeFromPlanAction(payload) {
  return {
    type: JOURNAL_REMOVE,
    payload
  }
}

export function clearPlanAction() {
  return {
    type: JOURNAL_CLEARPLAN
  }
}

export function toDailyAction() {
  return {
    type: JOURNAL_ADDTODAYLY
  }
}

export function addCounterAction(payload) {
  return {
    type: JOURNAL_ADDCOUNTER,
    payload
  }
}

export function clearDailyPlanAction() {
  return {
    type: JOURNAL_CLEARDAILYPLAN
  }
}

export function getAllDaysAction(payload) {
  return {
    type: JOURNAL_GETALLDAYS,
    payload
  }
}

export function toggleNewDayAction(payload) {
  return {
    type: JOURNAL_TOGGLENEWDAY,
    payload
  }
}
