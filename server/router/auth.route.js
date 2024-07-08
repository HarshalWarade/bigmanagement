const express = require('express')
const authController = require('../controller/auth.controller')
const router = express.Router()

router.route('/').get(authController.home)

module.exports = router