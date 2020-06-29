const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }
  const token = req.headers.authorization.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'Invalid data' })
  }

  try {
    const decoded = jwt.verify(token, config.get('stringKey'))
    req.user = decoded

    next()
  } catch (e) {
    console.log(e.message)
    res.status(500).json({ message: e.message })
  }
}
