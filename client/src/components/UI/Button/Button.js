import React from 'react'
import './Button.scss'

const Button = (props) => {
  let classes = `btn waves-effect waves-light ${props.large ? 'btn-large' : ''} 
  ${props.small ? 'btn-small' : ''}`

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
