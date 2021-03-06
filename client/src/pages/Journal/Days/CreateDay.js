import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect, useDispatch } from 'react-redux'

import {
  addToPlanAction,
  removeFromPlanAction,
  clearPlanAction,
  toDailyAction,
  addCounterAction
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
    createDay,
    state,
    addCounter
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
    <div className="day-container" style={{ borderColor: '#009688' }}>
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
          <DayBodyItem
            key={i._id}
            item={i}
            state={state}
            counterAction={addCounter}
          />
        ))}
      </div>
      <Button
        onClick={() => setModalState(true)}
        styleType="green"
        float={true}
        icon="add"
      />

      <CSSTransition in={modalState} timeout={300} classNames="fade">
        <Modal modalState={modalState} close={closeModalHandler}>
          <Accordion>
            {exercises.map((i) => (
              <ItemAccordion key={i.id} title={i.name}>
                {i.excercises.map((it) => (
                  <Checkbox
                    key={it._id}
                    text={it.name}
                    checkIn={() => addToPlanAction(it)}
                    checkOut={() => removeFromPlanAction(it)}
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
    getAllDays: () => dispatch(getAllDays),
    addCounter: (data) => dispatch(addCounterAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDay)
