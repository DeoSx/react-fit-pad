const { Schema, model } = require('mongoose')

const subCounter = new Schema({
  reps: {
    type: String,
    required: false
  },
  weight: {
    type: String,
    required: false
  }
})

const subDay = new Schema({
  _id: {
    type: String
  },
  name: {
    type: String
  },
  idOfMuscleType: {
    type: Number
  },
  nameOfMuscleType: {
    type: String
  },
  __v: {
    type: Number
  },
  counter: [subCounter]
})

const JournalDay = new Schema({
  day: [subDay],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = model('JournalDay', JournalDay)
