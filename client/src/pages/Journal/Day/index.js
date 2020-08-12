import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import {
  addToPlanAction,
  removeFromPlanAction
} from '../../../store/journal/journal.actions'
import Modal from '../../../components/Modal/Modal'
import Button from '../../../components/UI/Button/Button'
import Checkbox from '../../../components/UI/Checkbox/Checkbox'
import Accordion from '../../../components/Accordion'
import ItemAccordion from '../../../components/Accordion/Item'

const Day = (props) => {
  const { exercises, addToPlanAction, removeFromPlanAction } = props
  const date = new Date().toLocaleString()
  const [modalState, setModalState] = useState(false)

  const closeModalHandler = (e) => {
    if (e.target.classList.contains('overlay')) {
      setModalState(false)
    }
  }

  return (
    <div className="day-container">
      <div className="day-top">
        <p className="day-date">{date}</p>
        <Button styleType="red" text="Сохранить" small={true} />
      </div>
      <div className="day-body"></div>
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
            <Button styleType="blue" text="Добавить" />
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
    removeFromPlanAction: (data) => dispatch(removeFromPlanAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)
