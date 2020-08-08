import React from 'react'
import './Confirm.scss'

import Button from '../../UI/Button/Button'

const ConfirmModal = (props) => {
  const { title, question, callback, close } = props
  return (
    <div className="confirm">
      <div className="confirm-content">
        <p className="question">{question}</p>
        <h3 className="title">{title}</h3>
      </div>
      <div className="confirm-actions">
        <Button styleType="blue" text="Да" onClick={() => callback()} />
        <Button styleType="red" text="Нет" onClick={() => close(false)} />
      </div>
    </div>
  )
}

export default ConfirmModal
