import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { getAll } from '../../store/excercise/excercise.api'
import { getAllDays } from '../../store/journal/journal.api'
import './Journal.scss'
import CreateDay from './Days/CreateDay'
import Day from './Days/Day'
import Button from '../../components/UI/Button/Button'

const Journal = (props) => {
  const { getAllDays, getAll, journal } = props
  const [newDay, setNewDay] = useState(false)

  useEffect(() => {
    getAll()
    getAllDays()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="section">
      <div className="journal-top">
        <h1>Журнал</h1>
        <Button
          styleType={newDay ? 'red' : 'green'}
          text={newDay ? 'Закрыть' : 'Добавить тренировку'}
          onClick={() => setNewDay(!newDay)}
        />
      </div>
      <CSSTransition in={newDay} classNames="fade" timeout={300}>
        {newDay ? (
          <CreateDay state={newDay} />
        ) : (
          <p style={{ display: 'none' }}></p>
        )}
      </CSSTransition>

      {journal.days.map((day) => (
        <Day item={day} key={day.id} />
      ))}
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    journal: state.journal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(getAll()),
    getAllDays: () => dispatch(getAllDays())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
