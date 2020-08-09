import React from 'react'
import { connect } from 'react-redux'

import './Journal.scss'
import Day from './components/Day/'
import Button from '../../components/UI/Button/Button'

const Journal = () => {
  return (
    <section className="section">
      <div className="journal-top">
        <h1>Журнал</h1>
        <Button styleType="danger" text="Добавить тренировку" />
      </div>
      <Day />
    </section>
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Journal)
