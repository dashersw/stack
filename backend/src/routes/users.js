const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await User.find())
})

module.exports = router
