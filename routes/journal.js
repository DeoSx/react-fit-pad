const { Router } = require('express')
const JournalDay = require('../models/JournalDay')
const auth = require('../middleware/auth.middleware')

const router = Router()

// api/journal/create
router.post('/create', auth, async (req, res) => {
  const day = req.body

  if (!day) return res.status(400).json({ message: 'Try later' })
  try {
    const trainingDay = new JournalDay(day)
    
    await trainingDay.save()
    return res.status(201).json(trainingDay)
  } catch (e) {
    console.log(e.message)
    res.status(500).send('Server shut down')
  }
})

router.get('', async (req, res) => {
  try {
    let trainingDays = await JournalDay.find()
    return res.send(trainingDays)
  } catch (e) {
    console.log(e.message)
    res.status(500).send('Server down')
  }
})

module.exports = router
