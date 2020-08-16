import React from 'react'
import './index.scss'

import ConterItem from './CounterItem'
import Button from '../../../../components/UI/Button/Button'

const DayBodyItem = ({ item }) => {
  return (
    <div className="day-body__item">
      <p className="body-name">{item.name}</p>
      <div className="counter-list">
        <ConterItem />
        <ConterItem />
        <ConterItem />
        <ConterItem />
        <ConterItem />
      </div>
      <Button text="+" small={true} styleType="blue" />
    </div>
  )
}

export default DayBodyItem
