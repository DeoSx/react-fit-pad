const { Router } = require('express')
const router = Router()

const Excercise = require('../models/Excercise')

// /api/excercise/create
router.post('/create', async (req, res) => {
  const { name, idOfMuscleType } = req.body

  try {
    let excercise = await new Excercise.findOne({ name })

    if (excercise) {
      return res.status(400).json('Excercise already exists')
    }

    excercise = new Excercise({
      name, idOfMuscleType
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
  try {
    let excercise = await Excercise.find({})

    if(!excercise) {
      return res.status(400).json('No excercises')
    }

    return res.json(excercise)
    
  } catch (e) {
    console.error(e)
    res.status(500).json('Cant get data')
  }
})

module.exports = router