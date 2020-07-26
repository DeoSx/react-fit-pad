import React from 'react'
import { connect } from 'react-redux'

import { FormWrapper } from '../../styles'
import Select from '../../components/UI/Select/Select'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

const mockData = [
  {
    name: 'Грудь',
    idOfTypeMuscle: '1'
  },
  {
    name: 'Ноги',
    idOfTypeMuscle: '2'
  },
  {
    name: 'Спина',
    idOfTypeMuscle: '3'
  },
  {
    name: 'Руки',
    idOfTypeMuscle: '4'
  },
  {
    name: 'Плечи',
    idOfTypeMuscle: '5'
  }
]

const Excercises = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <section className="section">
      <h1>Create</h1>

      <FormWrapper onSubmit={(e) => submitHandler(e)}>
        <Select title="Выбрать мышечную группу" items={mockData} />
        <Input label="Название упражнения" />
        <Button text={'Создать'} styleType={'primary'} />
      </FormWrapper>
    </section>
  )
}

const mapDispatchToProps = () => {}

export default connect(null, mapDispatchToProps)(Excercises)
