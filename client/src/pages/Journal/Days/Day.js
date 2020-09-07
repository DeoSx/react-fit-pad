import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { counterDayAction } from '../../../store/journal/journal.actions'
import { editDay } from '../../../store/journal/journal.api'
import Modal from '../../../components/Modal/Modal'
import Accordion from '../../../components/Accordion'
import ItemAccordion from '../../../components/Accordion/Item'
import Button from '../../../components/UI/Button/Button'
import DayBodyItem from './DaybodyItem'
import Checkbox from '../../../components/UI/Checkbox/Checkbox'

const Day = (props) => {
  const [change, setChange] = useState(false)
  const [modalState, setModalState] = useState(false)

  const { item, counterDay, editDay, exercise, clearPlan } = props

  const saveHandler = async () => {
    await editDay(item)
    setChange(false)
  }

  const closeModalHandler = (e) => {
    if (e.target.classList.contains('overlay')) {
      setModalState(false)
    }
  }

  const buttonsBlock = (
    <div className="day-buttons">
      <Button
        icon="add"
        float={true}
        styleType="blue"
        onClick={() => setModalState(true)}
      />
      <Button
        styleType="green"
        small={true}
        text="Сохранить"
        onClick={() => saveHandler()}
      />
    </div>
  )

  return (
    <div className="day-container">
      <div className="day-top">
        <p className="day-date">{item.createdAt}</p>

        {change ? (
          <Button
            styleType="red"
            text="Выйти"
            small={true}
            onClick={() => setChange(false)}
          />
        ) : (
          <Button
            styleType="blue"
            text="Изменить"
            small={true}
            onClick={() => setChange(true)}
          />
        )}
      </div>
      <div className="day-body">
        {item.day.map((i) => (
          <DayBodyItem
            key={i._id}
            item={i}
            state={change}
            dayId={item.id}
            counterAction={counterDay}
          />
        ))}
      </div>
      <CSSTransition in={change} timeout={300} classNames="fade">
        {change ? buttonsBlock : <p style={{ display: 'none' }}></p>}
      </CSSTransition>

      <CSSTransition in={modalState} timeout={300} classNames="fade">
        <Modal modalState={modalState} close={closeModalHandler}>
          <Accordion>
            {exercise.map((i) => (
              <ItemAccordion key={i.id} title={i.name}>
                {i.excercises.map((it) => (
                  <Checkbox
                    key={it._id}
                    text={it.name}
                    // checkIn={addToPlanAction}
                    // checkOut={removeFromPlanAction}
                  />
                ))}
              </ItemAccordion>
            ))}
            <Button
              styleType="blue"
              text="Добавить"
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
    exercise: state.excercise.data,
    journalPlan: state.journal.plan
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    counterDay: (data) => dispatch(counterDayAction(data)),
    editDay: (data) => dispatch(editDay(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)
