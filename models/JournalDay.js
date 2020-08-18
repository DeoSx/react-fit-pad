const { Schema, model } = require('mongoose')

const JournalDay = new Schema({
  day: {
    type: Array,
    required: true
  }
})

module.exports = model('JournalDay', JournalDay)
