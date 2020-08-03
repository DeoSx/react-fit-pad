import React, { useState } from 'react'

import Input from '../../../UI/Input/Input'

const Item = (props) => {
  const { name } = props.item
  const [form, setForm] = useState(false)
  const [input, setInput] = useState(name)

  return (
    <li>
      <div className="item__content">
        <p>{name}</p>
        <div className="icons">
          <span className="edit" onClick={() => setForm(!form)}>
            <img src="./images/icons/edit.svg" />
          </span>
          <span className="delete">
            <img src="./images/icons/delete.svg" />
          </span>
        </div>
      </div>
      {form && (
        <form>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
      )}
    </li>
  )
}

export default Item
