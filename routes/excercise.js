const { Router } = require('express')
const router = Router()

const Excercise = require('../models/Excercise')

// /api/excercise/create
router.post('/create', async (req, res) => {
  const { name, idOfMuscleType, nameOfMuscleType } = req.body

  try {
    let excercise = await Excercise.findOne({ name })

    if (excercise) {
      return res.status(400).json('Excercise already exists')
    }

    excercise = new Excercise({
      name,
      idOfMuscleType,
      nameOfMuscleType
    })

    await excercise.save()
    return res.status(201).json(excercise)
  } catch (e) {
    console.error(e.message)
    res.status(500).send('Error with creating excercise')
  }
})

// /api/excercise
router.get('', async (req, res) => {
  let excercises = await Excercise.find({})
  try {
    if (!excercises) {
      return res.status(400).json('No excercises')
    }

    let muscleTypes = excercises
      .map((item) => {
        return {
          id: item.idOfMuscleType,
          name: item.nameOfMuscleType
        }
      })
      .sort((a, b) => a.id - b.id)

    muscleTypes = muscleTypes.filter(
      (item, i) =>
        item.id !== (!muscleTypes[i - 1] ? null : muscleTypes[i - 1].id)
    )

    const data = muscleTypes.map((i) => {
      const dataObj = {
        id: i.id,
        name: i.name,
        excercises: []
      }
      excercises.map((item) => {
        if (item.idOfMuscleType === i.id) {
          dataObj.excercises.push(item)
        }
      })
      return dataObj
    })

    return res.json(data)
  } catch (e) {
    console.error(e)
    res.status(500).json(`Can't get data`)
  }
})

module.exports = router
