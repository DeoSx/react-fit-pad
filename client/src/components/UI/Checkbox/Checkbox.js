import React, { useState } from 'react'

import './Checkbox.scss'

const Checkbox = (props) => {
  const { text, item, checkIn, checkOut } = props

  const [checked, setCheck] = useState(false)

  const checkHandler = () => {
    setCheck(!checked)
    if (!checked) {
      checkIn(item)
    } else {
      checkOut(item)
    }
  }

  return (
    <label className="chbx">
      <input type="checkbox" onClick={() => checkHandler()} />
      <span style={{ color: checked ? '#03a9f4' : '#000' }}>{text}</span>
    </label>
  )
}

export default Checkbox
