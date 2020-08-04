import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { changeExcercise } from '../../../store/excercise/excercise.api'
import Item from './Item'
import './index.scss'

const Accordion = ({ title, items, changeExcercise, getAll }) => {
  const [active, setActive] = useState(false)

  const changeHandler = (e, data) => {
    e.preventDefault()
    changeExcercise(data)
  }

  return (
    <div className="accordion">
      <div className="accordion__title" onClick={() => setActive(!active)}>
        {title}{' '}
        <span className={active ? 'active' : ''}>
          <img src="./images/icons/arrow-open.svg" alt="" />
        </span>
      </div>
      <CSSTransition in={active} timeout={300} classNames="fade" unmountOnExit>
        <ul className="accordion__items">
          {items.map((item) => (
            <Item key={item._id} item={item} changeHandler={changeHandler} />
          ))}
        </ul>
      </CSSTransition>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeExcercise: (data) => dispatch(changeExcercise(data))
  }
}

export default connect(null, mapDispatchToProps)(Accordion)
