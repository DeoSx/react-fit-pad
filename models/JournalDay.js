const { Schema, model } = require('mongoose')

const subCounter = new Schema({
  reps: {
    type: String,
    required: false
  },
  weight: {
    type: String,
    required: false
  },
  _id: {
    type: String,
    required: false
  }
})

const subDay = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  idOfMuscleType: {
    type: Number,
    required: true
  },
  nameOfMuscleType: {
    type: String,
    required: true
  },
  counter: [subCounter]
})

const JournalDay = new Schema({
  day: [subDay],
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = model('JournalDay', JournalDay)
