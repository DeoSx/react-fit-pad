import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { counterDayAction } from '../../../store/journal/journal.actions'
import Button from '../../../components/UI/Button/Button'
import DayBodyItem from './DaybodyItem'

const Day = (props) => {
  const [change, setChange] = useState(false)

  const { item, counterDay } = props

  const buttonsBlock = (
    <div className="day-buttons">
      <Button icon="add" float={true} styleType="blue" />
      <Button styleType="green" small={true} text="Сохранить" />
    </div>
  )

  return (
    <div className="day-container">
      <div className="day-top">
        <p className="day-date">{item.createdAt}</p>

        {change ? (
          <Button
            styleType="red"
            text="Отмена"
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

      {/* <CSSTransition in={modalState} timeout={300} classNames="fade">
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
      </CSSTransition> */}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    counterDay: (data) => dispatch(counterDayAction(data))
  }
}

export default connect(null, mapDispatchToProps)(Day)
