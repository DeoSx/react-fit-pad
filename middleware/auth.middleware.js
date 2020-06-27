const jwt = require('jsonwebtoken')
const config = require('../config/default.json')

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  try {
    const decoded = jwt.verify(token, 'randomString')
    req.user = decoded.user
    next()
  } catch (e) {
    console.log(e)
    res.status(401).json({ message: 'Invalid data' })
  }
}
