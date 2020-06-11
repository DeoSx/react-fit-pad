const mongoose = require('mongoose')
const config = require('config')
const express = require('express')

const app = express()

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  } catch (e) {
    console.error('Server error', e.message)
  }
}
start()
