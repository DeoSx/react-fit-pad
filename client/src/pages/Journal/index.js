import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { getAll } from '../../store/excercise/excercise.api'
import './Journal.scss'
import Day from './Day'
import Button from '../../components/UI/Button/Button'

const Journal = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
  return {
    exercises: state.excercise,
    journal: state.journal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(getAll)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
