import React from 'react'

import Button from '../../../components/UI/Button/Button'
import DayBodyItem from './DaybodyItem'

const Day = (props) => {
  const { item } = props
  return (
    <div className="day-container">
      <div className="day-top">
        <p className="day-date">{item.createdAt}</p>
        <Button styleType="blue" text="Изменить" small={true} />
      </div>
      <div className="day-body">
        {item.day.map((i) => (
          <DayBodyItem key={i._id} item={i} />
        ))}
      </div>
      <button
        // onClick={() => setModalState(true)}
        className="btn-floating waves-effect waves-light green"
      >
        <i className="material-icons">add</i>
      </button>

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

export default Day
