import React from 'react'

import Button from '../../../../components/UI/Button/Button'
import Checkbox from '../../../../components/UI/Checkbox/Checkbox'

const Day = (props) => {
  const {} = props
  const date = new Date().toLocaleString()

  const exercises = []
  return (
    <div className="day-container">
      <div className="day-top">
        <p className="day-date">{date}</p>
        <Button styleType="red" text="Сохранить" small={true} />
      </div>
      <div className="day-body">
        <Checkbox text="Hello" />
      </div>
      <button className="btn-floating waves-effect waves-light green">
        <i className="material-icons">add</i>
      </button>
    </div>
  )
}

export default Day
