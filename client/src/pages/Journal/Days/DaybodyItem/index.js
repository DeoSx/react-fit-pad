import React, { useState } from 'react'

import './index.scss'
import Modal from '../../../../components/Modal/Modal'
import SetModal from '../../../../components/Modal/set'
import CounterItem from './CounterItem'
import Button from '../../../../components/UI/Button/Button'

const DayBodyItem = ({ item, counterAction, state, dayId }) => {
  const [modalState, setModalState] = useState(false)

  const closeModal = (e) => {
    if (e.target.classList.contains('overlay')) {
      setModalState(false)
    }
  }

  const counterHandler = ({ reps, weight }) => {
    counterAction({ _id: item._id, reps, weight })
    setModalState(false)
  }

  return (
    <div className="day-body__item">
      <p className="body-name">{item.name}</p>
      <div className="counter-list">
        {item.counter.map((it, idx) => (
          <CounterItem item={{ ...it, idx }} key={idx} />
        ))}
      </div>
      {state && (
        <Button
          text="+"
          small={true}
          styleType="blue"
          onClick={() => setModalState(true)}
        />
      )}
      <Modal modalState={modalState} close={closeModal}>
        <SetModal setHandler={counterHandler} />
      </Modal>
    </div>
  )
}

export default DayBodyItem
