import React from 'react'
import { blockTextCenter } from '../../../../styles/index'

const CounterItem = () => {
  return (
    <div className="counter-list__item">
      <small style={blockTextCenter}>1</small>
      <p>50 kg</p>
      <p>60 reps</p>
    </div>
  )
}

export default CounterItem
