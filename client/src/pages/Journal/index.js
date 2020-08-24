import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { getAll } from '../../store/excercise/excercise.api'
import { getAllDays } from '../../store/journal/journal.api'
import './Journal.scss'
import CreateDay from './Days/CreateDay'
import Button from '../../components/UI/Button/Button'

const Journal = (props) => {
  const { getAll } = props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
    dispatch(getAllDays())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="section">
      <div className="journal-top">
        <h1>Журнал</h1>
        <Button styleType="danger" text="Добавить тренировку" />
      </div>
      <CreateDay />
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
    getAll: () => dispatch(getAll),
    getAllDays: () => dispatch(getAllDays)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
