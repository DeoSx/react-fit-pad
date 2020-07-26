import React from 'react'
import './Button.scss'

const Button = (props) => {
  return (
    <button
      className={props.styleType ? `btn ${props.styleType}` : 'btn'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
}

export default Button
