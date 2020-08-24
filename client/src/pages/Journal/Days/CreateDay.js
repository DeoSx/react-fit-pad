import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect, useDispatch } from 'react-redux'

import {
  addToPlanAction,
  removeFromPlanAction,
  clearPlanAction,
  toDailyAction
} from '../../../store/journal/journal.actions'
import { createDay, getAllDays } from '../../../store/journal/journal.api'

import DayBodyItem from './DaybodyItem'
import Modal from '../../../components/Modal/Modal'
import Button from '../../../components/UI/Button/Button'
import Checkbox from '../../../components/UI/Checkbox/Checkbox'
import Accordion from '../../../components/Accordion'
import ItemAccordion from '../../../components/Accordion/Item'

const CreateDay = (props) => {
  const dispatch = useDispatch()
  const {
    exercises,
    addToPlanAction,
    removeFromPlanAction,
    addToDaily,
    journal,
    createDay
  } = props
  const date = new Date().toLocaleString()
  const [modalState, setModalState] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const { dailyPlan } = journal

  useEffect(() => {
    dailyPlan.length ? setDisabled(false) : setDisabled(true)
  }, [dailyPlan])

  const closeModalHandler = (e) => {
    if (e.target.classList.contains('overlay')) {
      dispatch(clearPlanAction())
      setModalState(false)
    }
  }

  const addToDailyHandler = () => {
    dispatch(addToDaily())
    setModalState(false)
  }

  const createDayHandler = async () => {
    setDisabled(true)
    await createDay({ day: journal.dailyPlan })
    setDisabled(false)
  }

  return (
    <div className="day-container">
      <div className="day-top">
        <p className="day-date">{date}</p>
        <Button
          styleType="red"
          text="Сохранить"
          small={true}
          onClick={() => createDayHandler()}
          disabled={disabled}
        />
      </div>
      <div className="day-body">
        {journal.dailyPlan.map((i) => (
          <DayBodyItem key={i._id} item={i} />
        ))}
      </div>
      <button
        onClick={() => setModalState(true)}
        className="btn-floating waves-effect waves-light green"
      >
        <i className="material-icons">add</i>
      </button>

      <CSSTransition in={modalState} timeout={300} classNames="fade">
        <Modal modalState={modalState} close={closeModalHandler}>
          <Accordion>
            {exercises.map((i) => (
              <ItemAccordion key={i.id} title={i.name}>
                {i.excercises.map((it) => (
                  <Checkbox
                    key={it._id}
                    text={it.name}
                    item={it}
                    checkIn={addToPlanAction}
                    checkOut={removeFromPlanAction}
                  />
                ))}
              </ItemAccordion>
            ))}
            <Button
              styleType="blue"
              text="Добавить"
              onClick={() => addToDailyHandler()}
              style={{ marginTop: '15px' }}
            />
          </Accordion>
        </Modal>
      </CSSTransition>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    journal: state.journal,
    exercises: state.excercise.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToPlanAction: (data) => dispatch(addToPlanAction(data)),
    removeFromPlanAction: (data) => dispatch(removeFromPlanAction(data)),
    addToDaily: () => dispatch(toDailyAction),
    createDay: (data) => dispatch(createDay(data)),
    getAllDays: () => dispatch(getAllDays)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDay)
