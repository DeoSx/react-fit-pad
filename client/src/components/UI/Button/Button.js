import React from 'react'
import './Button.scss'

const Button = (props) => {
  return (
    <button
      className={props.styleType ? `btn ${props.styleType}` : 'btn'}
      onClick={props.onClick}
    >
      <span>{props.text}</span>
    </button>
  )
}

export default Button
