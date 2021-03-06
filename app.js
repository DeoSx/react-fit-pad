const mongoose = require('mongoose')
const config = require('config')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()

const PORT = config.get('port') || 5000

// Middlewares
app.use(cors())
app.use(express.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
app.use('/api/user', require('./routes/user'))
app.use('/api/excercise', require('./routes/excercise'))
app.use('/api/journal', require('./routes/journal'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(__dirname, 'client', 'build')))

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__diname, 'client', 'build', 'index.html'))
  })
}

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log('Connected to mongoDB')
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  } catch (e) {
    console.error('Server error', e.message)
  }
}
start()
