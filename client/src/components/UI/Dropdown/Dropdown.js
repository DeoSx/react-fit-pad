import React, { useState } from 'react'

import './Dropdown.scss'

const Dropdown = (props) => {
  const [active, setActive] = useState(null)

  const drContent = <div className="dropdown-content">{props.children}</div>

  return (
    <div className="dropdown">
      <a onClick={() => setActive(true)}>{props.title}</a>
      {active && drContent}
    </div>
  )
}

export default Dropdown
