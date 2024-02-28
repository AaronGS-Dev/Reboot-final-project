const router = require('express').Router()

const {
    createUser, getAllUsers
} = require('../controllers/user.controller')

const {
    checkAuth,
    checkAdmin
} = require('../utils/middlewares')

router.post('/', checkAuth, checkAdmin, createUser)
router.get('/', getAllUsers)

module.exports = router