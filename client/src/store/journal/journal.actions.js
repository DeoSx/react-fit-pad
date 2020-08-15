import {
  JOURNAL_ADD,
  JOURNAL_REMOVE,
  JOURNAL_CLEARPLAN,
  JOURNAL_ADDTODAYLY
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
