import { JOURNAL_ADD, JOURNAL_REMOVE } from '../constants'

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
