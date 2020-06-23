const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const router = Router()

const User = require('../models/User')
const authMiddleware = require('../middleware/auth.middleware')

// /api/user/signup
router.post(
  '/signup',
  [
    check('username', 'please enter a valid username').not().isEmpty(),
    check('email', 'please enter a valid email').isEmail(),
    check('password', 'password should me min 6 length').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { username, email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({
          message: 'User already exists'
        })
      }

      user = new User({
        username,
        email,
        password
      })

      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      await user.save()

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        config.get('stringKey'),
        { expiresIn: 10000 },
        (err, token) => {
          if (err) throw err
          res.status(200).json({ token, userId: payload.user.id })
        }
      )
    } catch (e) {
      console.log(e.message)
      res.status(500).send('Error in saving')
    }
  }
)

// /api/user/login
router.post(
  '/login',
  [
    check('email', 'please enter a valid email').isEmail(),
    check('password', 'password should me min 6 length').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    try {
      let user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({
          message: 'Email or Password is wrong'
        })
      }

      let isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({
          message: 'Email or Password is wrong'
        })
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        config.get('stringKey'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err
          return res.json({ token, userId: payload.user.id })
        }
      )
    } catch (e) {
      console.log(e.message)
      res.status(500).send('Server error')
    }
  }
)

router.get('/info', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
    if (user) {
      res.json({ user })
    }
  } catch (e) {
    res.status(500).json({ message: 'Something is wrong, try later' })
  }
})

module.exports = router
