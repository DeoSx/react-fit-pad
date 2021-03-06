import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { createExcercise, getAll } from '../../store/excercise/excercise.api'

import { FormWrapper } from '../../styles'
import Select from '../../components/UI/Select/Select'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Accordion from './components/Accordion'

const mockData = [
  {
    name: 'Грудь',
    idOfMuscleType: '1'
  },
  {
    name: 'Ноги',
    idOfMuscleType: '2'
  },
  {
    name: 'Спина',
    idOfMuscleType: '3'
  },
  {
    name: 'Руки',
    idOfMuscleType: '4'
  },
  {
    name: 'Плечи',
    idOfMuscleType: '5'
  }
]

const Excercises = (props) => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(null)
  const [input, setInput] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [disabled, setDisabled] = useState(null)

  useEffect(() => {
    dispatch(props.getAll())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    setDisabled(true)
    const data = {
      name: input,
      idOfMuscleType: selected.idOfMuscleType,
      nameOfMuscleType: selected.name
    }
    await props.createExcercise(data)
    await props.getAll()
    setDisabled(null)
    setInput('')
  }

  return (
    <section className="section">
      <h1>Упражнения</h1>

      <FormWrapper onSubmit={(e) => submitHandler(e)}>
        <Select
          title="Выбрать мышечную группу"
          items={mockData}
          handler={setSelected}
        />
        <Input
          label="Название упражнения"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          text={'Создать'}
          styleType={'primary'}
          disabled={!selected || !input ? true : false}
          style={{marginTop: '10px'}}
        />
      </FormWrapper>

      {props.excercise.data.map((item) => (
        <Accordion key={item.id} title={item.name} items={item.excercises} />
      ))}
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    excercise: state.excercise
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createExcercise: (data) => dispatch(createExcercise(data)),
    getAll: () => dispatch(getAll)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Excercises)
