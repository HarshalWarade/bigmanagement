const express = require('express')
const authController = require('../controller/auth.controller')
const router = express.Router()

router.route('/').get(authController.home)
router.route('/signup').post(authController.signup)

module.exports = router
