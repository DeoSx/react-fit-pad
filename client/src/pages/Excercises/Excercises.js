import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createExcercise, getAll } from '../../store/excercise/excercise.api'

import { FormWrapper } from '../../styles'
import Select from '../../components/UI/Select/Select'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

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
  const [selected, setSelected] = useState(null)
  const [input, setInput] = useState(null)

  useEffect(() => {
    props.getAllExc()
    console.log(props)
  },)

  const submitHandler = (e) => {
    e.preventDefault()

    const data = {
      name: input,
      idOfMuscleType: selected.idOfMuscleType
    }
    props.createExcercise(data)
  }

  return (
    <section className="section">
      <h1>Create</h1>

      <FormWrapper onSubmit={(e) => submitHandler(e)}>
        <Select
          title="Выбрать мышечную группу"
          items={mockData}
          handler={setSelected}
        />
        <Input
          label="Название упражнения"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button text={'Создать'} styleType={'primary'} />
      </FormWrapper>
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
    getAllExc: () => dispatch(getAll)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Excercises)
