import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './Dropdown.scss'

const Dropdown = (props) => {
  const [active, setActive] = useState(false)

  return (
    <div className="dropdown">
      <button
        className="dropdown__trigger btn-link"
        onClick={() => setActive(!active)}
      >
        {props.title}
      </button>
      <CSSTransition
        in={active}
        timeout={300}
        classNames="transform"
        unmountOnExit
      >
        <div className="dropdown__content main-ui">{props.children}</div>
      </CSSTransition>
    </div>
  )
}

export default Dropdown
