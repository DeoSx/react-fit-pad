import React from 'react'

const Day = (props) => {
  const {} = props
  const date = new Date().toLocaleString()
  return (
    <div className="day-container">
      <div className="day-top">
        <p className="day-date">{ date }</p>
      </div>
    </div>
  )
}

export default Day
