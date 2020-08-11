import React from 'react'

import Button from '../../../components/UI/Button/Button'
import Checkbox from '../../../components/UI/Checkbox/Checkbox'
import Accordion from '../../../components/Accordion'
import ItemAccordion from '../../../components/Accordion/Item'

const Day = (props) => {
  const { exercises } = props
  const date = new Date().toLocaleString()

  return (
    <div className="day-container">
      <div className="day-top">
        <p className="day-date">{date}</p>
        <Button styleType="red" text="Сохранить" small={true} />
      </div>
      <div className="day-body"></div>
      <button className="btn-floating waves-effect waves-light green">
        <i className="material-icons">add</i>
      </button>
      <Accordion>
        {exercises.map((i) => (
          <ItemAccordion key={i.id} title={i.name}>
            {i.excercises.map((it) => (
              <Checkbox key={it._id} text={it.name} />
            ))}
          </ItemAccordion>
        ))}
      </Accordion>
    </div>
  )
}

export default Day
