import React, { useState } from 'react'
import Modal from '../../../../components/Modal/Modal'
import SetModal from '../../../../components/Modal/set'
import './index.scss'

import ConterItem from './CounterItem'
import Button from '../../../../components/UI/Button/Button'

const DayBodyItem = ({ item }) => {
  const [modalState, setModalState] = useState(false)

  const closeModal = (e) => {
    if (e.target.classList.contains('overlay')) {
      setModalState(false)
    }
  }

  return (
    <div className="day-body__item">
      <p className="body-name">{item.name}</p>
      <div className="counter-list">
        <ConterItem />
        <ConterItem />
      </div>
      <Button
        text="+"
        small={true}
        styleType="blue"
        onClick={() => setModalState(true)}
      />
      <Modal modalState={modalState} close={closeModal}>
        <SetModal />
      </Modal>
    </div>
  )
}

export default DayBodyItem
