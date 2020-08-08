import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import Input from '../../../components/UI/Input/Input'
import Modal from '../../../components/Modal/Modal'
import ConfirmModal from '../../../components/Modal/confirm'

const Item = (props) => {
  const { changeHandler, deleteHandler } = props
  const { name } = props.item
  const [form, setForm] = useState(null)
  const [input, setInput] = useState(name)
  const [modalState, setModalState] = useState(false)

  const closeModal = (e) => {
    if (e.target.classList.contains('overlay')) {
      setModalState(false)
    }
  }

  const deleteItem = () => {
    const id = props.item._id
    deleteHandler(id)
    setModalState(false)
  }

  return (
    <li>
      <div className="item__content">
        <p>{name}</p>
        <div className="icons">
          <span className="edit" onClick={() => setForm(!form)}>
            <img src="./images/icons/edit.svg" alt="" />
          </span>
          <span className="delete" onClick={() => setModalState(true)}>
            <img src="./images/icons/delete.svg" alt="" />
          </span>
        </div>
      </div>
      {form && (
        <form
          onSubmit={(e) => changeHandler(e, { ...props.item, name: input })}
        >
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
      )}
      <CSSTransition in={modalState} timeout={200} classNames="fade">
        <Modal modalState={modalState} close={closeModal}>
          <ConfirmModal
            question="Удалить из списка?"
            title={name}
            close={setModalState}
            callback={deleteItem}
          />
        </Modal>
      </CSSTransition>
    </li>
  )
}

export default Item
