const mongoose = require('mongoose')
const config = require('config')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = config.get('port') || 5000

// Middlewares
app.use(bodyParser.json())

// Routes
app.use('api/user', require('./routes/user'))

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to mongoDB')
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  } catch (e) {
    console.error('Server error', e.message)
  }
}
start()
