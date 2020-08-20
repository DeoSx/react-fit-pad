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
  counter: [subCounter],
  idOfMuscleType: {
    type: Number
  },
  name: {
    type: String
  },
  nameOfMuscleType: {
    type: String
  },
  _id: {
    type: String
  }
})

const JournalDay = new Schema({
  day: [subDay]
})

module.exports = model('JournalDay', JournalDay)
