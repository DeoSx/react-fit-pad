import React from 'react'
import './Button.scss'

const Button = (props) => {
  const classes = 'btn waves-effect waves-light'

  return (
    <button
      className={props.styleType ? `${classes} ${props.styleType}` : classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
}

export default Button
