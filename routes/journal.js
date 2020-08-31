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

// api/journal
router.get('', auth, async (req, res) => {
  try {
    let trainingDays = await JournalDay.find()

    trainingDays = trainingDays.map((item) => {
      return {
        createdAt: item.createdAt,
        day: item.day,
        id: item._id
      }
    })

    return res.send(trainingDays.reverse())
  } catch (e) {
    console.log(e.message)
    res.status(500).send('Server down')
  }
})

// api/journal/edit
router.put('/edit', async (req, res) => {
  const day = req.body

  if (!day) return res.status(400).json({ message: 'Something wrong' })

  try {
    await JournalDay.findOneAndUpdate({ _id: day.id }, day, {
      new: true
    })
    res.send(day)
  } catch (e) {
    console.log(e.message)
    res.status(500).send('Server down')
  }
})

module.exports = router
