import React from 'react'
import './Input.scss'

const Input = (props) => {
  const inputType = props.type || 'text'
  const htmlFor = `${inputType}-${Math.random()}`
  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Input
