import React from 'react'

const Item = ({ title, children }) => {
  return (
    <li style={{ background: '#fff' }}>
      <div className="collapsible-header">{title}</div>
      <div className="collapsible-body">{children}</div>
    </li>
  )
}

export default Item
