import React from 'react'
import './Input.scss'

const Input = (props) => {
  const inputType = props.type || 'text'
  const htmlFor = `${inputType}-${Math.random()}`
  const placeholder = props.placeholder || 'Введите текст'
  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        name={props.name}
        onChange={props.onChange}
        placeholder={placeholder}
        value={props.value && props.value}
      />
    </div>
  )
}

export default Input
