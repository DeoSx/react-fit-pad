import React, { useState } from 'react'

import './set.scss'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

const SetModal = () => {
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')

  return (
    <div className="set-modal">
      <Input
        type="number"
        label="Вес"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <Input
        type="number"
        label="Повт"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <Button text="Ok" disabled={!weight || !reps ? true : false} />
    </div>
  )
}

export default SetModal
