const express = require('express')
const router = express.Router()
const userService = require('../service/user.service')

router.post('/add-user', userService.addUser)
router.post('/update-user', userService.updateUser)
router.get('/get-user/:email', userService.getUser)
router.get('/get-all-users', userService.getAllUsers)
router.get('/get-user-by-username/:username', userService.getUserByUsername)
router.get('/check-username-exists/:username', userService.checkUsernameExists)

module.exports = router