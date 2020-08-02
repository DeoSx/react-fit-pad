import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './Accordion.scss'

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
          {items &&
            items.map((item, i) => (
              <li key={i}>
                <div>{item.name}</div>
                <div className="icons">
                  <span className="edit">
                    <img src="./images/icons/edit.svg" />
                  </span>
                  <span className="delete">
                    <img src="./images/icons/delete.svg" />
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </CSSTransition>
    </div>
  )
}

export default Accordion
