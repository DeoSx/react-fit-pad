import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './Select.scss'

const Select = ({ title, items, handler }) => {
  const [selected, setSelected] = useState(title)
  const [showList, setShowList] = useState(null)

  const selectHandler = (item) => {
    setSelected(item.name)
    handler(item)
    setShowList(!showList)
  }

  return (
    <div className="select">
      <div className="selected" onClick={() => setShowList(!showList)}>
        {selected}
        <span>
          <img src="./images/icons/arrow-down.svg" />
        </span>
      </div>

      <CSSTransition
        in={showList}
        timeout={300}
        classNames="transform"
        unmountOnExit
      >
        <ul>
          {items &&
            items.map((item, i) => (
              <li key={i} onClick={() => selectHandler(item)}>
                {item.name}
              </li>
            ))}
        </ul>
      </CSSTransition>
    </div>
  )
}

export default Select
