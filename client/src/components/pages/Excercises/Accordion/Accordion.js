import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './Accordion.scss'
import Item from './Item'

const Accordion = ({ title, items }) => {
  const [active, setActive] = useState(false)

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
            <Item key={item._id} item={item} />
          ))}
        </ul>
      </CSSTransition>
    </div>
  )
}

export default Accordion
