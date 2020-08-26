import React from 'react'
import './Button.scss'

const Button = (props) => {
  const floating = props.float ? 'btn-floating' : 'btn'
  const large = props.large ? 'btn-large' : ''
  const small = props.small ? 'btn-small' : ''
  const classes = `${floating} waves-effect waves-light ${large} ${small}`

  return (
    <button
      className={props.styleType ? `${classes} ${props.styleType}` : classes}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.float ? (
        <i className="material-icons">{props.icon}</i>
      ) : (
        props.text
      )}
    </button>
  )
}

export default Button
