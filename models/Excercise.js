const { model, Schema } = require('mongoose')

const Excercise = new Schema({
  name: {
    type: String,
    required: true
  },
  idOfTypeMuscle: {
    type: Number,
    required: true
  }
})

module.exports = model('excercise', Excercise)