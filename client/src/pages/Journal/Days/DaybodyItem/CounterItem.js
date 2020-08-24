import React from 'react'
import { blockTextCenter } from '../../../../styles/index'

const CounterItem = ({ item }) => {
  return (
    <div className="counter-list__item">
      <small style={blockTextCenter}>{item.idx + 1}</small>
      <p>{item.weight} kg</p>
      <p>{item.reps} reps</p>
    </div>
  )
}

export default CounterItem
